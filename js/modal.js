(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-modal]"),
    closeModalBtn: document.querySelector("[data-close-mod-btn]"),
    closeModalLink: document.querySelector("[data-close-mod-link]"),
    backdropp: document.querySelector("[data-backdrop]"),
  };

  // ---- Open and close Modal ------

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn.addEventListener("click", stopScroll);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", startScroll);
  refs.closeModalLink.addEventListener("click", toggleModal);
  refs.closeModalLink.addEventListener("click", startScroll);

  function toggleModal() {
    refs.backdropp.classList.toggle("visibility-hidden");
  }

  function stopScroll() {
    document.body.style.overflow = "hidden";
  }

  function startScroll() {
    document.body.style.overflow = "";
  }

  // ----- Display date to console ------
  document.querySelector(".js-modal").addEventListener("submit", (e) => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );

    e.currentTarget.reset();
  });
})();
