(() => {
  const root = document.documentElement;
  const controls = document.querySelector('.theme-switch');
  const buttons = controls.querySelectorAll('[data-theme-choice]');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  let preference = root.dataset.theme || 'system';

  function applyTheme(choice) {
    preference = choice;
    if (choice === 'system') {
      delete root.dataset.theme;
    } else {
      root.dataset.theme = choice;
    }

    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.themeChoice === choice));
    });

    const isDark = choice === 'dark' || (choice === 'system' && systemTheme.matches);
    themeColor.setAttribute('content', isDark ? '#131a18' : '#f8f9f7');
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const choice = button.dataset.themeChoice;
      applyTheme(choice);
      try {
        if (choice === 'system') {
          localStorage.removeItem('xin-huang-theme');
        } else {
          localStorage.setItem('xin-huang-theme', choice);
        }
      } catch (error) { /* Theme switching remains available without storage. */ }
    });
  });

  systemTheme.addEventListener('change', () => {
    if (preference === 'system') applyTheme('system');
  });

  // Keep other tabs in sync; a removed or invalid preference means system mode.
  window.addEventListener('storage', (event) => {
    if (event.key === 'xin-huang-theme' || event.key === null) {
      const choice = event.newValue;
      applyTheme(choice === 'light' || choice === 'dark' ? choice : 'system');
    }
  });

  applyTheme(preference);
  controls.hidden = false;
})();