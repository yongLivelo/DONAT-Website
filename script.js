"use strict";

const acronym = document.querySelector(".acronym");
const acronym_meaning = document.querySelector(".acronymm_meaning");
acronym.addEventListener("mouseenter", (e) => {
  acronym_meaning.classList.remove("hidden");
});
acronym.addEventListener("mouseleave", (e) => {
  acronym_meaning.classList.add("hidden");
});
