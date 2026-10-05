(function () {
  var cfg = window.INTAKE || {};
  var url = "https://wa.me/" + cfg.whatsapp + "?text=" + encodeURIComponent(cfg.message || "");
  document.querySelectorAll(".js-wpp").forEach(function (a) { a.href = url; });
  if (cfg.instagram) { var ig = document.getElementById("ig"); if (ig) ig.href = cfg.instagram; }
  document.getElementById("year").textContent = new Date().getFullYear();

  // Imagens: carrega /assets/img/<nome>; se não existir, mantém o placeholder.
  document.querySelectorAll("[data-img]").forEach(function (el) {
    var src = "assets/img/" + el.dataset.img, img = new Image();
    img.onload = function () { el.style.backgroundImage = "url(" + src + ")"; el.classList.add("has-img"); };
    img.src = src;
  });

  var nav = document.getElementById("nav");
  var onScroll = function () { nav.classList.toggle("solid", window.scrollY > 40); };
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  els.forEach(function (e) { io.observe(e); });
})();
