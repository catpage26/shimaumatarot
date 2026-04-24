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
