(function () {
  const year = document.querySelectorAll("[data-year]");
  year.forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  const btn = document.querySelector("[data-menu]");
  const panel = document.querySelector("[data-nav-panel]");
  if (btn && panel) {
    btn.addEventListener("click", () => {
      const open = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => panel.classList.remove("open"));
    });
  }

  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();
      const subject = encodeURIComponent("Portfolio inquiry from " + (name || "the site"));
      const body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\n\n" + message
      );
      window.location.href =
        "mailto:renzononoy@gmail.com?subject=" + subject + "&body=" + body;
    });
  }
})();
