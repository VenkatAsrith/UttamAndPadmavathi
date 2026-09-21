/**
 * UTTAM & PADHMAVATHI | Interactive Architecture & Controller
 * INC Editorial Cinematic Website System
 * Incorporates: GSAP + ScrollTrigger choreography, 9-phase documentary reveal,
 * Curated exhibition frames, Fullscreen lightbox with keyboard navigation,
 * Scrubbed timeline progress, Bilingual localization, and Floating Command Dock.
 */

let currentLang = 'en';
let currentGalleryItems = [];
let currentLightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  initGSAPMotion();
  initCommandDock();
  initLightbox();
  initVideoModal();
  initAccordions();
  initLangSwitcher();
});

/* --------------------------------------------------------------------------
   Documentary Opening Load Sequence & GSAP Choreography
   -------------------------------------------------------------------------- */
function initGSAPMotion() {
  const hasGSAP = typeof gsap !== 'undefined';
  const loader = document.getElementById('curtain-loader');
  const progress = document.querySelector('.loader-progress');

  if (progress) {
    progress.style.width = '100%';
  }

  if (!hasGSAP) {
    // Fallback if GSAP is unavailable
    setTimeout(() => {
      if (loader) loader.classList.add('loaded');
    }, 850);
    return;
  }

  // 9-Phase Cinematic Reveal Timeline
  const introTl = gsap.timeline({
    delay: 0.2,
    onComplete: () => {
      if (loader) loader.classList.add('loaded');
      initScrollTriggerAnimations();
    }
  });

  introTl
    // Phase 01: Black screen with progress bar loading
    .to(progress, { width: '100%', duration: 0.9, ease: 'power2.inOut' })
    // Phase 02: INC watermark soft pulse
    .fromTo('.loader-watermark', { opacity: 0, scale: 0.92 }, { opacity: 0.05, scale: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3')
    // Phase 03: Loader fade out
    .to(loader, { opacity: 0, duration: 0.8, ease: 'power3.inOut' }, '+=0.2')
    // Phase 04: Saffron ambient light enters
    .fromTo('#ambient-glow-saffron', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }, '-=0.5')
    // Phase 05: Uttam portrait plane reveals
    .fromTo('.hero-plane-left .hero-portrait', 
      { opacity: 0, y: 40, filter: 'contrast(100%) grayscale(60%)' }, 
      { opacity: 0.95, y: 0, filter: 'contrast(108%) grayscale(15%)', duration: 1.1, ease: 'power3.out' }, '-=0.8')
    // Phase 06: Padhmavathi portrait plane reveals
    .fromTo('.hero-plane-right .hero-portrait', 
      { opacity: 0, y: 40, filter: 'contrast(100%) grayscale(60%)' }, 
      { opacity: 0.95, y: 0, filter: 'contrast(110%) grayscale(10%)', duration: 1.1, ease: 'power3.out' }, '-=0.9')
    // Phase 07: White typography and hero title appear with clip & stagger
    .fromTo('.hero-super', { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.6')
    .fromTo('#hero-title .hero-title-line', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out' }, '-=0.5')
    .fromTo('.hero-amp', 
      { opacity: 0, scale: 0.6 }, 
      { opacity: 0.95, scale: 1, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.7')
    // Phase 08: Green ambient light enters & metadata panels settle
    .fromTo('#ambient-glow-green', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }, '-=0.8')
    .fromTo('#ambient-glow-center', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }, '-=1.0')
    .fromTo('.hero-person-preview, .hero-stats-badge', 
      { opacity: 0, y: 25 }, 
      { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: 'power2.out' }, '-=0.6')
    // Phase 09: Bottom command dock floats in
    .fromTo('#command-dock', 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3');
}

/* --------------------------------------------------------------------------
   ScrollTrigger Choreography & Parallax Storytelling
   -------------------------------------------------------------------------- */
function initScrollTriggerAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Parallax on Ambient Backdrop
  gsap.to('#ambient-backdrop', {
    yPercent: 12,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2
    }
  });

  // Parallax on Hero Portraits
  gsap.to('#hero-img-uttam', {
    yPercent: -12,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.8
    }
  });

  gsap.to('#hero-img-padma', {
    yPercent: -14,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.8
    }
  });

  // Giant INC Watermarks Subtle Drift
  gsap.utils.toArray('.inc-watermark-section').forEach(wm => {
    gsap.to(wm, {
      xPercent: -6,
      opacity: 0.045,
      ease: 'none',
      scrollTrigger: {
        trigger: wm.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });
  });

  // Scrubbed Timeline Progress Bar
  const tlTrack = document.getElementById('timeline-track');
  const tlFill = document.getElementById('tl-progress-fill');
  if (tlTrack && tlFill) {
    gsap.to(tlFill, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: tlTrack,
        start: 'top 75%',
        end: 'bottom 40%',
        scrub: 0.5
      }
    });
  }

  // Section Headings & Eyebrows Reveal
  gsap.utils.toArray('.section-heading, .manifesto-quote, .profile-name-oversized').forEach(heading => {
    gsap.fromTo(heading, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // INC Gradient Lines Expansion on Scroll
  gsap.utils.toArray('.inc-gradient-line').forEach(line => {
    gsap.fromTo(line,
      { scaleX: 0, opacity: 0.4 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: line,
          start: 'top 93%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Framed Media Stack Elevation on Scroll
  gsap.utils.toArray('.framed-media-container').forEach(media => {
    gsap.fromTo(media,
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: media,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
}

/* --------------------------------------------------------------------------
   Render Application Content based on Language
   -------------------------------------------------------------------------- */
function renderApp() {
  const data = ARCHIVE_DATA[currentLang];
  if (!data) return;

  // Language class on body
  if (currentLang === 'te') {
    document.body.classList.add('lang-te');
  } else {
    document.body.classList.remove('lang-te');
  }

  // Hero Section
  document.getElementById('hero-tag').textContent = data.hero.tag;
  document.getElementById('hero-title').innerHTML = data.hero.title;
  document.getElementById('hero-subtitle').textContent = data.hero.subtitle;
  document.getElementById('uttam-hero-role').textContent = data.hero.uttamRole;
  document.getElementById('uttam-hero-bio').textContent = data.hero.uttamBio;
  document.getElementById('padma-hero-role').textContent = data.hero.padmavathiRole;
  document.getElementById('padma-hero-bio').textContent = data.hero.padmavathiBio;

  // Hero Stats Badge
  const statsContainer = document.getElementById('hero-stats-badge');
  if (statsContainer) {
    statsContainer.innerHTML = data.hero.stats.map(s => `
      <div class="stat-item">
        <span class="stat-num">${s.num}</span>
        <span class="stat-lbl">${s.label}</span>
      </div>
    `).join('');
  }

  // Manifesto
  document.getElementById('manifesto-lead').textContent = data.manifesto.lead;
  document.getElementById('manifesto-quote').innerHTML = data.manifesto.quote;
  document.getElementById('manifesto-col-1').textContent = data.manifesto.col1;
  document.getElementById('manifesto-col-2').textContent = data.manifesto.col2;

  // Uttam Kumar Reddy Profile
  document.getElementById('uttam-eyebrow').textContent = data.uttam.eyebrow;
  document.getElementById('uttam-name').textContent = data.uttam.name;
  document.getElementById('uttam-bio').textContent = data.uttam.bio;
  
  const uttamPills = document.getElementById('uttam-pills');
  if (uttamPills) {
    uttamPills.innerHTML = data.uttam.pills.map((p, idx) => `
      <span class="profile-pill ${idx === 0 ? 'highlight' : ''}">${p}</span>
    `).join('');
  }

  const uttamFacts = document.getElementById('uttam-facts');
  if (uttamFacts) {
    uttamFacts.innerHTML = data.uttam.facts.map(f => `
      <div class="fact-item-block">
        <span class="fact-item-title">${f.label}</span>
        <span class="fact-item-val">${f.val}</span>
      </div>
    `).join('');
  }

  // Military Record
  document.getElementById('mil-title').textContent = data.uttam.military.title;
  document.getElementById('mil-tag').textContent = data.uttam.military.tag;
  const milPoints = document.getElementById('mil-points');
  if (milPoints) {
    milPoints.innerHTML = data.uttam.military.points.map(p => `
      <div class="mil-point">
        <div class="mil-point-label">${p.label}</div>
        <div class="mil-point-val">${p.val}</div>
      </div>
    `).join('');
  }

  // Padhmavathi Reddy Profile (Equal Weight)
  document.getElementById('padma-eyebrow').textContent = data.padmavathi.eyebrow;
  document.getElementById('padma-name').textContent = data.padmavathi.name;
  document.getElementById('padma-bio').textContent = data.padmavathi.bio;

  const padmaPills = document.getElementById('padma-pills');
  if (padmaPills) {
    padmaPills.innerHTML = data.padmavathi.pills.map((p, idx) => `
      <span class="profile-pill ${idx === 0 ? 'highlight' : ''}">${p}</span>
    `).join('');
  }

  const padmaFacts = document.getElementById('padma-facts');
  if (padmaFacts) {
    padmaFacts.innerHTML = data.padmavathi.facts.map(f => `
      <div class="fact-item-block">
        <span class="fact-item-title">${f.label}</span>
        <span class="fact-item-val">${f.val}</span>
      </div>
    `).join('');
  }

  // Architecture & Social Service
  document.getElementById('arch-title').textContent = data.padmavathi.service.title;
  document.getElementById('arch-tag').textContent = data.padmavathi.service.tag;
  const archPoints = document.getElementById('arch-points');
  if (archPoints) {
    archPoints.innerHTML = data.padmavathi.service.points.map(p => `
      <div class="mil-point">
        <div class="mil-point-label">${p.label}</div>
        <div class="mil-point-val">${p.val}</div>
      </div>
    `).join('');
  }

  // Together Section
  document.getElementById('together-eyebrow').textContent = data.together.eyebrow;
  document.getElementById('together-title').innerHTML = data.together.title;
  document.getElementById('together-lead').textContent = data.together.lead;

  const synergyGrid = document.getElementById('synergy-grid');
  if (synergyGrid) {
    synergyGrid.innerHTML = data.together.synergies.map(s => `
      <div class="synergy-card">
        <div class="synergy-number">${s.num}</div>
        <div class="synergy-title">${s.title}</div>
        <p class="synergy-desc">${s.desc}</p>
      </div>
    `).join('');
  }

  // Render Timeline
  renderTimeline('all');

  // Record Metrics Row
  const recordRow = document.getElementById('record-metrics-row');
  if (recordRow) {
    recordRow.innerHTML = data.recordMetrics.map(m => `
      <div class="record-metric-card">
        <div class="metric-big-num">${m.num}</div>
        <div class="metric-title">${m.title}</div>
        <div class="metric-desc">${m.desc}</div>
      </div>
    `).join('');
  }

  // Development Projects Catalogue
  const devContainer = document.getElementById('dev-catalogue');
  if (devContainer) {
    devContainer.innerHTML = data.projects.map((proj, idx) => `
      <div class="dev-catalogue-item ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <div class="dev-catalogue-header">
          <span class="dev-index">${proj.index}</span>
          <span class="dev-name">${proj.name}</span>
          <span class="dev-tag">${proj.tag}</span>
          <div class="dev-toggle-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </div>
        <div class="dev-catalogue-body" style="${idx === 0 ? 'max-height: 420px;' : ''}">
          <div class="dev-body-inner">
            <div class="dev-body-text">
              <p>${proj.desc}</p>
              <div style="font-size: 0.75rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.15em;">
                Verified Authority: ${proj.source}
              </div>
            </div>
            <div class="dev-body-specs">
              <div class="spec-line">
                <span class="spec-key">Key Lead:</span>
                <span class="spec-val">${proj.person}</span>
              </div>
              <div class="spec-line">
                <span class="spec-key">Financial Scale:</span>
                <span class="spec-val">${proj.budget}</span>
              </div>
              <div class="spec-line">
                <span class="spec-key">Execution Status:</span>
                <span class="spec-val" style="color: var(--inc-saffron);">${proj.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Curated Exhibition Gallery
  renderGallery('all');

  // Media Section
  document.getElementById('media-lead-quote').textContent = data.media.leadQuote;
  document.getElementById('media-lead-speaker').textContent = data.media.leadSpeaker;
  const mediaList = document.getElementById('media-secondary-list');
  if (mediaList) {
    mediaList.innerHTML = data.media.items.map(item => `
      <div class="media-item-row" data-video="${item.videoId}">
        <div class="media-item-content">
          <div class="media-item-date">${item.date} • ${item.source}</div>
          <div class="media-item-title">${item.title}</div>
        </div>
        <div class="media-play-icon" aria-label="Play video">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
      </div>
    `).join('');
    
    // Attach click for video modal
    document.querySelectorAll('.media-item-row').forEach(row => {
      row.addEventListener('click', () => {
        const vid = row.getAttribute('data-video');
        openVideoModal(vid);
      });
    });
  }
}

/* --------------------------------------------------------------------------
   Timeline Rendering with Interactive Filtering
   -------------------------------------------------------------------------- */
function renderTimeline(filter) {
  const data = ARCHIVE_DATA[currentLang];
  const container = document.getElementById('timeline-track');
  if (!container) return;

  const events = data.timeline.filter(e => filter === 'all' || e.person === filter);

  container.innerHTML = events.map(e => `
    <div class="timeline-event-item">
      <div class="tl-node-dot"></div>
      <div class="tl-header-row">
        <span class="tl-year">${e.year}</span>
        <span class="tl-person-tag ${e.person}">${e.person === 'both' ? 'Uttam & Padhmavathi' : (e.person === 'uttam' ? 'Uttam Kumar Reddy' : 'Padhmavathi Reddy')}</span>
      </div>
      <div class="tl-event-title">${e.title}</div>
      <div class="tl-event-desc">${e.desc}</div>
      <div class="tl-event-source">Official Record: ${e.source}</div>
    </div>
  `).join('');

  // Setup filter button states
  document.querySelectorAll('.tl-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
    btn.onclick = () => renderTimeline(btn.getAttribute('data-filter'));
  });
}

/* --------------------------------------------------------------------------
   Curated Exhibition Gallery Rendering with 4 Intentional Frame Styles
   FRAME 01: Paper white + Black typography
   FRAME 02: Saffron border + Black typography
   FRAME 03: Deep green border + White typography
   FRAME 04: Black frame + Paper typography
   -------------------------------------------------------------------------- */
function renderGallery(filter) {
  const data = ARCHIVE_DATA[currentLang];
  const grid = document.getElementById('editorial-gallery-grid');
  if (!grid) return;

  currentGalleryItems = data.gallery.filter(item => filter === 'all' || item.category === filter);

  // 4 Intentional Frame Styles mapped cyclically
  const frameStyles = [
    'frame-paper-white',
    'frame-saffron-border',
    'frame-green-border',
    'frame-black-archival'
  ];

  // Asymmetric Spanning Configurations
  const layoutPatterns = [
    { span: 'span-7', type: 'wide' },
    { span: 'span-5', type: 'tall', offset: true },
    { span: 'span-4', type: 'tall' },
    { span: 'span-8', type: 'wide' },
    { span: 'span-6', type: 'standard' },
    { span: 'span-6', type: 'standard', offset: true }
  ];

  grid.innerHTML = currentGalleryItems.map((item, index) => {
    const layout = layoutPatterns[index % layoutPatterns.length];
    const frame = frameStyles[index % frameStyles.length];
    const offsetClass = layout.offset ? 'offset-down' : '';
    
    return `
      <div class="gallery-card ${frame} ${layout.span} ${layout.type} ${offsetClass}" data-id="${item.id}" data-index="${index}">
        <div class="gallery-image-frame">
          <div class="gallery-overlay-badge">${item.location} • ${item.year}</div>
          <img src="${item.src}" alt="${item.title}" class="gallery-img" loading="lazy" />
        </div>
        <div class="gallery-card-footer">
          <div class="gallery-card-meta">
            <span class="gal-card-cat">${item.category.toUpperCase()} • ARCHIVE</span>
            <div class="gal-card-title">${item.title}</div>
          </div>
          <div class="gal-card-year">${item.year}</div>
        </div>
      </div>
    `;
  }).join('');

  // Attach card click for Fullscreen Lightbox
  grid.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      openLightboxByIndex(idx);
    });
  });

  // Filter button handlers
  document.querySelectorAll('.gal-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
    btn.onclick = () => renderGallery(btn.getAttribute('data-filter'));
  });
}

/* --------------------------------------------------------------------------
   Fullscreen Lightbox System with Previous / Next Navigation
   -------------------------------------------------------------------------- */
function initLightbox() {
  const modal = document.getElementById('editorial-lightbox');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lb-prev');
  const nextBtn = document.getElementById('lb-next');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => navigateLightbox(-1));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => navigateLightbox(1));
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') navigateLightbox(-1);
    else if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightboxByIndex(index) {
  if (!currentGalleryItems || currentGalleryItems.length === 0) return;
  if (index < 0) index = currentGalleryItems.length - 1;
  if (index >= currentGalleryItems.length) index = 0;

  currentLightboxIndex = index;
  const item = currentGalleryItems[currentLightboxIndex];
  const modal = document.getElementById('editorial-lightbox');
  if (!modal || !item) return;

  document.getElementById('lb-img').src = item.src;
  document.getElementById('lb-img').alt = item.title;
  document.getElementById('lb-category').textContent = `${item.category.toUpperCase()} • DOCUMENTARY ARCHIVE`;
  document.getElementById('lb-title').textContent = item.title;
  document.getElementById('lb-year').textContent = item.year;
  document.getElementById('lb-location').textContent = item.location;
  document.getElementById('lb-desc').textContent = item.desc;
  document.getElementById('lb-source').textContent = item.source;

  modal.classList.add('active');
}

function navigateLightbox(direction) {
  openLightboxByIndex(currentLightboxIndex + direction);
}

function closeLightbox() {
  const modal = document.getElementById('editorial-lightbox');
  if (modal) modal.classList.remove('active');
}

/* --------------------------------------------------------------------------
   Video Player Modal
   -------------------------------------------------------------------------- */
function initVideoModal() {
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('video-modal-close');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeVideoModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeVideoModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeVideoModal();
    }
  });
}

function openVideoModal(videoId) {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  if (!modal || !iframe) return;

  iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
  modal.classList.add('active');
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  if (iframe) iframe.src = '';
  if (modal) modal.classList.remove('active');
}

/* --------------------------------------------------------------------------
   Accordion Interaction for Projects
   -------------------------------------------------------------------------- */
function initAccordions() {
  document.addEventListener('click', (e) => {
    const header = e.target.closest('.dev-catalogue-header');
    if (!header) return;

    const item = header.closest('.dev-catalogue-item');
    const body = item.querySelector('.dev-catalogue-body');
    const isActive = item.classList.contains('active');

    // Close others
    document.querySelectorAll('.dev-catalogue-item').forEach(other => {
      other.classList.remove('active');
      const otherBody = other.querySelector('.dev-catalogue-body');
      if (otherBody) otherBody.style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add('active');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
}

/* --------------------------------------------------------------------------
   ScrollSpy for Floating Bottom Command Dock
   -------------------------------------------------------------------------- */
function initCommandDock() {
  const dockItems = document.querySelectorAll('.dock-item');
  const sections = Array.from(dockItems).map(item => {
    const targetId = item.getAttribute('href').substring(1);
    return document.getElementById(targetId);
  }).filter(Boolean);

  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight * 0.4;

    let currentSection = sections[0];
    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPos) {
        currentSection = sec;
      }
    });

    if (currentSection) {
      dockItems.forEach(item => {
        const isMatch = item.getAttribute('href') === `#${currentSection.id}`;
        item.classList.toggle('active', isMatch);
      });
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --------------------------------------------------------------------------
   Bilingual Language Switcher
   -------------------------------------------------------------------------- */
function initLangSwitcher() {
  const btns = document.querySelectorAll('.lang-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang === currentLang) return;

      currentLang = targetLang;
      btns.forEach(b => b.classList.toggle('active', b.getAttribute('data-lang') === currentLang));

      // Re-render
      renderApp();
    });
  });
}
