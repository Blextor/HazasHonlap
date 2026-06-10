const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');
const copyButton = document.querySelector('[data-copy]');
const copyStatus = document.querySelector('[data-copy-status]');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

if (copyButton && copyStatus) {
  copyButton.addEventListener('click', async () => {
    const selector = copyButton.getAttribute('data-copy');
    const target = selector ? document.querySelector(selector) : null;
    const text = target?.textContent?.trim();

    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      copyStatus.textContent = 'A helyszín vágólapra másolva.';
    } catch {
      copyStatus.textContent = 'Nem sikerült automatikusan másolni. Jelöld ki kézzel a helyszínt.';
    }
  });
}

const gallery = document.querySelector('.photo-gallery');
const mobileGalleryQuery = window.matchMedia('(max-width: 560px)');
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let galleryTimer;
let galleryResumeTimer;

const getMobileGalleryItems = () =>
  gallery
    ? Array.from(gallery.querySelectorAll('.photo-portrait')).filter((item) => item.offsetParent !== null)
    : [];

const stopGalleryRotation = () => {
  window.clearInterval(galleryTimer);
  galleryTimer = undefined;
};

const startGalleryRotation = () => {
  if (!gallery || !mobileGalleryQuery.matches || reducedMotionQuery.matches) return;

  const items = getMobileGalleryItems();
  if (items.length < 2) return;

  stopGalleryRotation();

  galleryTimer = window.setInterval(() => {
    const galleryRect = gallery.getBoundingClientRect();
    const galleryCenter = galleryRect.left + galleryRect.width / 2;
    const currentIndex = items.reduce((closestIndex, item, index) => {
      const itemRect = item.getBoundingClientRect();
      const closestRect = items[closestIndex].getBoundingClientRect();
      const currentDistance = Math.abs(itemRect.left + itemRect.width / 2 - galleryCenter);
      const closestDistance = Math.abs(closestRect.left + closestRect.width / 2 - galleryCenter);
      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);
    const nextItem = items[(currentIndex + 1) % items.length];
    const nextLeft = nextItem.offsetLeft - (gallery.clientWidth - nextItem.clientWidth) / 2;
    gallery.scrollTo({ left: nextLeft, behavior: 'smooth' });
  }, 4200);
};

if (gallery) {
  const pauseGalleryRotation = () => {
    stopGalleryRotation();
    window.clearTimeout(galleryResumeTimer);
    galleryResumeTimer = window.setTimeout(startGalleryRotation, 7000);
  };

  gallery.addEventListener('pointerdown', pauseGalleryRotation, { passive: true });
  gallery.addEventListener('wheel', pauseGalleryRotation, { passive: true });

  mobileGalleryQuery.addEventListener('change', () => {
    stopGalleryRotation();
    startGalleryRotation();
  });

  reducedMotionQuery.addEventListener('change', () => {
    stopGalleryRotation();
    startGalleryRotation();
  });

  startGalleryRotation();
}
