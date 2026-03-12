/* ============================================
   Guitar Club - Song Page Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initCopyButtons();
  initVideoContainers();
  initSectionNavHighlight();
});

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
          setTimeout(() => { btn.textContent = originalText; btn.classList.remove('copied'); }, 2000);
        } catch (err) {
          btn.textContent = 'Failed';
          setTimeout(() => { btn.textContent = 'Copy Tab'; }, 2000);
        }
      });
    }
  });
}

function initVideoContainers() {
  document.querySelectorAll('.video-wrapper[data-video-id]').forEach(container => {
    const videoId = container.dataset.videoId;
    const thumbnail = container.querySelector('.video-thumbnail');
    const playBtn = container.querySelector('.video-play-btn');
    const popoutBtn = container.querySelector('.video-popout-btn');
    const triggerPlay = () => loadVideo(container, videoId);
    if (thumbnail) thumbnail.addEventListener('click', triggerPlay);
    if (playBtn) playBtn.addEventListener('click', triggerPlay);
    if (popoutBtn) {
      popoutBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(`https://www.youtube.com/watch?v=${videoId}`, 'youtube-popout', 'width=854,height=480');
      });
    }
  });
}

function loadVideo(container, videoId) {
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  container.querySelectorAll('.video-thumbnail, .video-play-btn').forEach(el => el.remove());
  container.appendChild(iframe);
}

function initSectionNavHighlight() {
  const nav = document.querySelector('.section-nav');
  if (!nav) return;
  const links = nav.querySelectorAll('a[href^="#"]');
  const sections = [];
  links.forEach(link => {
    const id = link.getAttribute('href').slice(1);
    const section = document.getElementById(id);
    if (section) sections.push({ link, section });
  });
  if (sections.length === 0) return;
  function updateActive() {
    let current = sections[0];
    const scrollPosition = window.scrollY + 150;
    sections.forEach(({ link, section }) => { if (section.offsetTop <= scrollPosition) current = { link, section }; });
    links.forEach(link => link.classList.remove('active'));
    current.link.classList.add('active');
  }
  window.addEventListener('scroll', updateActive);
  updateActive();
}
