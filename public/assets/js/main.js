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
      copyStatus.textContent = 'A cím vágólapra másolva.';
    } catch {
      copyStatus.textContent = 'Nem sikerült automatikusan másolni. Jelöld ki kézzel a címet.';
    }
  });
}
