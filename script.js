// ---- Reveal on scroll ----
const revealEls = document.querySelectorAll('.reveal');
document.querySelectorAll('.card.reveal').forEach((el, i) => {
    el.style.setProperty('--reveal-delay', (i * 90) + 'ms');
});
document.querySelectorAll('.offer.reveal').forEach((el, i) => {
    el.style.setProperty('--reveal-delay', (i * 140) + 'ms');
});
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => io.observe(el));

// ---- Lightbox ----
const cards = Array.from(document.querySelectorAll('.card'));
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbCap = document.getElementById('lb-cap');
let idx = 0;

function openLb(i) {
    idx = i;
    const c = cards[idx];
    const img = c.querySelector('img');
    const nameEl = c.querySelector('.name');
    const name = nameEl ? nameEl.textContent : '';
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = name;
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}
function closeLb() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}
function step(d) {
    openLb((idx + d + cards.length) % cards.length);
}

cards.forEach((c, i) => {
    c.addEventListener('click', () => openLb(i));
});
document.getElementById('lb-close').addEventListener('click', closeLb);
document.getElementById('lb-prev').addEventListener('click', (e) => { e.stopPropagation(); step(-1); });
document.getElementById('lb-next').addEventListener('click', (e) => { e.stopPropagation(); step(1); });
lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
window.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
});

// ---- Mobile nav close on click ----
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav').classList.remove('open');
    });
});
