(function () {
  function scrollToPageTop(event) {
    if (event) {
      event.preventDefault();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".js-page-top").forEach(function (link) {
      link.addEventListener("click", scrollToPageTop);
    });

    const backToTop = document.getElementById("backToTop");
    if (!backToTop) {
      return;
    }

    const updateBackToTop = function () {
      backToTop.classList.toggle("visible", window.scrollY > 500);
    };

    backToTop.addEventListener("click", scrollToPageTop);
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();
  });
})();

// アフィリエイト・自社導線のクリック計測（GA4）
(function () {
  function track(eventName, link) {
    if (typeof gtag !== "function") { return; }
    gtag("event", eventName, {
      link_label: (link.textContent || "").trim().slice(0, 60),
      page_path: location.pathname,
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href*="px.a8.net"]').forEach(function (link) {
      link.addEventListener("click", function () { track("affiliate_click", link); });
    });
    document.querySelectorAll('a[href*="coconala.com/users"]').forEach(function (link) {
      link.addEventListener("click", function () { track("own_product_click", link); });
    });
    document.querySelectorAll('a[href*="youtube.com/channel"]').forEach(function (link) {
      link.addEventListener("click", function () { track("youtube_click", link); });
    });
  });
})();
