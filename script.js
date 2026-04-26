/* ===== Reveal on scroll ===== */
const reveals = document.querySelectorAll('.reveal');
document.querySelectorAll('.plate.reveal').forEach((el, i) => {
    el.style.setProperty('--reveal-delay', (i * 90) + 'ms');
});
document.querySelectorAll('.process-card.reveal, .service.reveal, .testimonial.reveal').forEach((el, i) => {
    el.style.setProperty('--reveal-delay', (i * 110) + 'ms');
});
const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.14, rootMargin: '0px 0px -60px 0px' });
reveals.forEach(el => io.observe(el));

/* ===== Filtres galerie ===== */
const pills = document.querySelectorAll('.filter-pill');
const plates = document.querySelectorAll('.plate');
pills.forEach(pill => {
    pill.addEventListener('click', () => {
        const f = pill.dataset.filter;
        pills.forEach(p => {
            p.classList.toggle('active', p === pill);
            p.setAttribute('aria-selected', p === pill);
        });
        plates.forEach(plate => {
            const cats = (plate.dataset.cat || '').split(' ');
            const show = f === 'all' || cats.includes(f);
            plate.classList.toggle('hidden', !show);
        });
    });
});

/* ===== Lightbox ===== */
const allImages = Array.from(document.querySelectorAll('.plate-img, .cat-img, .fig-frame'));
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbCap = document.getElementById('lb-cap');
let currentIdx = 0;

function visibleImages() {
    return allImages.filter(el => {
        const plate = el.closest('.plate');
        return !plate || !plate.classList.contains('hidden');
    });
}
function openLb(el) {
    const visible = visibleImages();
    currentIdx = visible.indexOf(el);
    if (currentIdx === -1) return;
    showLb(visible[currentIdx]);
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}
function showLb(el) {
    const img = el.querySelector('img');
    if (!img) return;
    lbImg.src = img.src;
    lbImg.alt = img.alt || '';
    const fig = el.closest('figure, .hero-fig');
    let cap = '';
    if (fig) {
        const name = fig.querySelector('.plate-name, .cat-body h3, .fig-label');
        cap = name ? name.textContent.trim() : '';
    }
    lbCap.textContent = cap;
}
function closeLb() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}
function step(d) {
    const visible = visibleImages();
    if (!visible.length) return;
    currentIdx = (currentIdx + d + visible.length) % visible.length;
    showLb(visible[currentIdx]);
}

allImages.forEach(el => el.addEventListener('click', () => openLb(el)));
document.getElementById('lb-close').addEventListener('click', closeLb);
document.getElementById('lb-prev').addEventListener('click', e => { e.stopPropagation(); step(-1); });
document.getElementById('lb-next').addEventListener('click', e => { e.stopPropagation(); step(1); });
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
window.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
});

/* ===== Custom cursor (dot + ring) ===== */
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
if (dot && ring && window.matchMedia('(hover: hover)').matches) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
        if (!dot.classList.contains('visible')) {
            dot.classList.add('visible');
            ring.classList.add('visible');
        }
    });
    function tick() {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        requestAnimationFrame(tick);
    }
    tick();
    document.addEventListener('mouseleave', () => {
        dot.classList.remove('visible');
        ring.classList.remove('visible');
    });
    document.querySelectorAll('.plate-img, .cat-img, .fig-frame').forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('zoom'));
        el.addEventListener('mouseleave', () => ring.classList.remove('zoom'));
    });
}

/* ===== Mobile nav close on click ===== */
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav').classList.remove('open');
    });
});

/* ===== Form mailto ===== */
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
    window.location.href = `mailto:lempreinteflorale66@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return false;
}
window.submitForm = submitForm;

/* ===== Hero parallax léger ===== */
const heroFig = document.querySelector('.hero-fig');
if (heroFig && window.matchMedia('(hover: hover)').matches) {
    const heroOrn = document.querySelector('.hero-orn');
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y < 800) {
            heroFig.style.transform = `translateY(${y * 0.05}px)`;
            if (heroOrn) heroOrn.style.transform = `translateY(${y * -0.08}px) rotate(${y * 0.02}deg)`;
        }
    }, { passive: true });
}
