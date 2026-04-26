// ---- Reveal on scroll ----
const revealEls = document.querySelectorAll('.reveal');
document.querySelectorAll('.card.reveal').forEach((el, i) => {
    el.style.setProperty('--reveal-delay', (i * 80) + 'ms');
});
document.querySelectorAll('.offer.reveal, .process-step, .review.reveal').forEach((el, i) => {
    el.style.setProperty('--reveal-delay', (i * 110) + 'ms');
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

// ---- Gallery filters ----
const filterPills = document.querySelectorAll('.filter-pill');
const galleryCards = document.querySelectorAll('#product-grid .card');

filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
        const filter = pill.dataset.filter;
        filterPills.forEach(p => {
            p.classList.toggle('active', p === pill);
            p.setAttribute('aria-selected', p === pill);
        });
        galleryCards.forEach(card => {
            const cats = (card.dataset.cat || '').split(' ');
            const show = filter === 'all' || cats.includes(filter);
            card.classList.toggle('hidden', !show);
        });
    });
});

// ---- Lightbox ----
const allCards = Array.from(document.querySelectorAll('.card'));
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbCap = document.getElementById('lb-cap');
let idx = 0;

function visibleCards() {
    return allCards.filter(c => !c.classList.contains('hidden'));
}

function openLb(card) {
    const visible = visibleCards();
    idx = visible.indexOf(card);
    if (idx === -1) idx = 0;
    showLb(visible[idx]);
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}
function showLb(c) {
    const img = c.querySelector('img');
    const nameEl = c.querySelector('.name');
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = nameEl ? nameEl.textContent : (img.alt || '');
}
function closeLb() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}
function step(d) {
    const visible = visibleCards();
    if (!visible.length) return;
    idx = (idx + d + visible.length) % visible.length;
    showLb(visible[idx]);
}

allCards.forEach(c => {
    c.addEventListener('click', () => openLb(c));
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

// ---- Custom loupe cursor on cards ----
const cursor = document.getElementById('customCursor');
if (cursor && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.card .frame').forEach(frame => {
        frame.addEventListener('mouseenter', () => cursor.classList.add('visible'));
        frame.addEventListener('mouseleave', () => cursor.classList.remove('visible'));
    });
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

// ---- Mobile nav close on link click ----
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav').classList.remove('open');
    });
});

// ---- Contact form (mailto) ----
function submitForm(e) {
    e.preventDefault();
    const f = e.target;
    const nom = f.nom.value.trim();
    const contact = f.contact.value.trim();
    const eventType = f.event.value;
    const date = f.date.value;
    const message = f.message.value.trim();

    const subject = `Demande de devis — ${eventType}${nom ? ' — ' + nom : ''}`;
    const body = [
        `Nom : ${nom}`,
        `Contact : ${contact}`,
        `Type : ${eventType}`,
        date ? `Date souhaitée : ${date}` : '',
        '',
        'Message :',
        message
    ].filter(Boolean).join('\n');

    const mailto = `mailto:lempreinteflorale66@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    return false;
}
window.submitForm = submitForm;
