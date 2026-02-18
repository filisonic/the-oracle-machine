// Remember language choice when user clicks switcher
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.lang-switcher a[href]').forEach(function (link) {
    link.addEventListener('click', function () {
      var href = this.getAttribute('href') || '';
      var code = href === 'index.html' ? 'en' : (href.match(/([a-z]{2})\.html/) || [])[1];
      if (code) {
        document.cookie = 'preferred_lang=' + code + '; path=/; max-age=31536000';
      }
    });
  });

  const sections = document.querySelectorAll('.section, .documentation, .footer');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
  );
  sections.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.05}s, transform 0.6s ease ${i * 0.05}s`;
    observer.observe(el);
  });
});
