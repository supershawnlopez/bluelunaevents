(function () {
  const cfg = window.BLUE_LUNA_CONFIG || {};
  const stripe = (cfg.stripe || {});
  const contact = (cfg.contact || {});

  document.querySelectorAll('.stripe-link').forEach((link) => {
    const key = link.getAttribute('data-stripe');
    const fallback = link.getAttribute('data-fallback') || '/get-a-quote/';
    if (key && stripe[key]) {
      link.setAttribute('href', stripe[key]);
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noreferrer');
    } else {
      link.setAttribute('href', fallback);
    }
  });

  const phoneDisplay = contact.phoneDisplay || '(520) 222-6142';
  const phoneHref = contact.phoneHref || 'tel:+15202226142';
  const email = contact.email || 'monica@bluelunaevents.com';

  ['footer-phone-link', 'footer-phone', 'quote-phone-link'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = `Call ${phoneDisplay}`.replace('Call Call', 'Call ');
      if (id === 'footer-phone') el.textContent = phoneDisplay;
      el.setAttribute('href', phoneHref);
    }
  });

  ['footer-email', 'quote-email-link'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = id === 'quote-email-link' ? 'Email Monica' : email;
      el.setAttribute('href', `mailto:${email}`);
    }
  });

  const params = new URLSearchParams(window.location.search);
  const packageField = document.getElementById('packageField');
  if (packageField) {
    const selected = params.get('package') || params.get('service') || '';
    if (selected) packageField.value = selected.replace(/-/g, ' ');
  }
})();
