/**
 * Iridescence - Cookie & Privacy Notice
 * Shows on every visit, summarising how the site and booking form
 * handle personal information, and links out to the full Privacy
 * Policy and Terms of Service. Intentionally NOT remembered between
 * visits, per Iridescence's instruction that it must appear every
 * time the site is opened.
 */
(function () {
  function init() {
    var banner = document.createElement('div');
    banner.id = 'cookieConsent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Cookie and privacy notice');

    banner.innerHTML =
      '<div class="cookie-consent-inner">' +
        '<p class="cookie-consent-text">' +
          '<strong>Your privacy matters to us.</strong> This site uses essential cookies to run properly, ' +
          'and when you submit our booking or contact form we collect details such as your name, contact ' +
          'information, and any health information you choose to share, so we can prepare for your session. ' +
          'We never sell your information. Read our ' +
          '<a href="privacy.html">Privacy Policy</a> and <a href="terms.html">Terms of Service</a> for the full details.' +
        '</p>' +
        '<div class="cookie-consent-actions">' +
          '<button type="button" class="cookie-consent-btn decline" id="cookieDecline">Essential Only</button>' +
          '<button type="button" class="cookie-consent-btn accept" id="cookieAccept">Accept</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(banner);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        banner.classList.add('show');
      });
    });

    document.getElementById('cookieAccept').addEventListener('click', function () {
      banner.classList.remove('show');
      setTimeout(function () { banner.remove(); }, 500);
    });

    document.getElementById('cookieDecline').addEventListener('click', function () {
      banner.classList.remove('show');
      setTimeout(function () { banner.remove(); }, 500);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
