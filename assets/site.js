// Fills the pages from assets/config.js. Nothing here is needed to read the site: without it, every page keeps its fallback text.
(() => {
  "use strict";

  const site = window.SITE || {};
  const all = (selector) => Array.from(document.querySelectorAll(selector));

  // A value from the configuration replaces the fallback text, and the "to be completed" highlight goes with it.
  const text = (selector, value) => {
    if (value) {
      all(selector).forEach((element) => {
        element.textContent = value;
        element.classList.remove("todo");
      });
    }
  };

  text("[data-fill='publisher']", site.publisher);

  // The support address, as text and as a mailto link.
  if (site.supportEmail) {
    all("[data-fill='support-email']").forEach((element) => {
      element.textContent = site.supportEmail;
      element.classList.remove("todo");
      if (element.tagName === "A") {
        element.href = `mailto:${site.supportEmail}`;
      }
    });
  }

  // The download: each button points at its file once the release is known.
  const download = site.download || {};
  if (download.baseUrl && download.version) {
    const base = download.baseUrl.replace(/\/+$/, "");
    const files = {
      "setup": `LockDesk-Setup-v${download.version}.exe`,
      "zip-x64": `LockDesk-v${download.version}-win-x64.zip`,
      "zip-arm64": `LockDesk-v${download.version}-win-arm64.zip`,
    };
    all("[data-download-file]").forEach((element) => {
      const file = files[element.getAttribute("data-download-file")];
      if (file) {
        element.href = `${base}/${file}`;
        element.removeAttribute("aria-disabled");
        element.classList.remove("is-disabled");
      }
    });
    all("[data-when='no-download']").forEach((element) => { element.hidden = true; });
  }

  text("[data-download='version']", download.version);
  all("[data-download-detail]").forEach((element) => {
    element.hidden = !download[element.getAttribute("data-download-detail")];
  });

  // A disabled download button goes nowhere.
  all("[data-download-file][aria-disabled='true']").forEach((element) => {
    element.addEventListener("click", (event) => event.preventDefault());
  });

  text("[data-fill='year']", String(new Date().getFullYear()));
})();
