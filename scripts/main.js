/* ============================================
   MAIN.JS: Tab copy, video lazy-load
   Guitar Club - Student Materials
   ============================================ */

// Use jQuery's ready
$(function() {
  initCopyButtons();
  initVideoContainers();
  initSectionNavHighlight();
  initHubVideoPreviews();
  initExternalLinks();
  
  // jTab renders automatically via window.onload for elements with class="jtab"
  // If it didn't render (timing issue), force it:
  if (typeof jtab !== 'undefined') {
    jtab.renderimplicit();
  }
});

/* ============================================
   EXTERNAL LINKS: Prevent toggle on external link click
   ============================================ */

function initExternalLinks() {
  document.querySelectorAll('.learn-nav .external-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
}

/* ============================================
   COPY BUTTONS
   ============================================ */

function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    const container = btn.closest('.tab-container');
    const tabContent = container?.querySelector('.tab');
    
    if (tabContent) {
      btn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(tabContent.textContent);
          
          const originalText = btn.textContent;
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          
          setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
          }, 2000);
          
        } catch (err) {
          console.error('Copy failed:', err);
          btn.textContent = 'Failed';
          setTimeout(() => {
            btn.textContent = 'Copy';
          }, 2000);
        }
      });
    }
  });
}

/* ============================================
   VIDEO: Lazy load + pop-out
   ============================================ */

function initVideoContainers() {
  document.querySelectorAll('.video-container[data-video-id]').forEach(container => {
    const videoId = container.dataset.videoId;
    const thumbnail = container.querySelector('.video-thumbnail');
    const popoutBtn = container.querySelector('.video-popout-btn');
    
    if (thumbnail) {
      thumbnail.addEventListener('click', () => loadVideo(container, videoId));
    }
    
    if (popoutBtn) {
      popoutBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const url = `https://www.youtube.com/watch?v=${videoId}`;
        window.open(url, 'youtube-popout', 'width=854,height=480');
      });
    }
  });
}

function loadVideo(container, videoId) {
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  
  container.innerHTML = '';
  container.appendChild(iframe);
}

/* ============================================
   SECTION NAV: Highlight current section
   ============================================ */

function initSectionNavHighlight() {
  const nav = document.querySelector('.section-nav');
  if (!nav) return;
  
  const links = nav.querySelectorAll('a[href^="#"]');
  const sections = [];
  
  links.forEach(link => {
    const id = link.getAttribute('href').slice(1);
    const section = document.getElementById(id);
    if (section) {
      sections.push({ link, section });
    }
  });
  
  if (sections.length === 0) return;
  
  function updateActive() {
    let current = sections[0];
    
    sections.forEach(({ link, section }) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100) {
        current = { link, section };
      }
    });
    
    links.forEach(link => link.classList.remove('active'));
    current.link.classList.add('active');
  }
  
  window.addEventListener('scroll', updateActive);
  updateActive();
}

/* ============================================
   HUB VIDEO PREVIEWS: Modal lightbox
   ============================================ */

function initHubVideoPreviews() {
  const modal = document.getElementById('videoModal');
  if (!modal) return;

  const backdrop = modal.querySelector('.modal-backdrop');
  const closeBtn = modal.querySelector('.modal-close');
  const videoContainer = modal.querySelector('.modal-video');
  const openLink = modal.querySelector('.modal-open-link');

  // Click handlers for preview thumbnails and play buttons
  document.querySelectorAll('.video-preview').forEach(preview => {
    const videoId = preview.dataset.videoId;
    const card = preview.closest('.song-card');
    const href = card?.dataset.href || '#';

    preview.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openVideoModal(videoId, href);
    });
  });

  function openVideoModal(videoId, href) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    videoContainer.innerHTML = '';
    videoContainer.appendChild(iframe);
    openLink.href = href;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    videoContainer.innerHTML = '';
  }

  // Close handlers
  backdrop.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
