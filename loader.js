(function () {
  var loader = document.getElementById("siteLoader");
  if (!loader) return;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasSeenLoader = false;

  try {
    hasSeenLoader = sessionStorage.getItem("staafin-loader-seen") === "1";
  } catch (_) {
    hasSeenLoader = false;
  }

  function dismissLoader(immediate) {
    if (immediate) {
      loader.remove();
      return;
    }

    loader.classList.add("is-complete");
    window.setTimeout(function () {
      loader.remove();
    }, 500);
  }

  if (reducedMotion || hasSeenLoader) {
    dismissLoader(true);
    return;
  }

  try {
    sessionStorage.setItem("staafin-loader-seen", "1");
  } catch (_) {
    // The animation can still run when browser storage is unavailable.
  }

  var startedAt = performance.now();
  var minimumDisplay = 900;

  function finishWhenReady() {
    var remaining = Math.max(0, minimumDisplay - (performance.now() - startedAt));
    window.setTimeout(function () {
      dismissLoader(false);
    }, remaining);
  }

  if (document.readyState === "complete") {
    finishWhenReady();
  } else {
    window.addEventListener("load", finishWhenReady, { once: true });
  }

  window.setTimeout(function () {
    dismissLoader(false);
  }, 1600);
})();
