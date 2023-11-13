"use strict";

const acronym = document.querySelector(".acronym");
const acronym_meaning = document.querySelector(".acronym_meaning");
const left_arrow = document.querySelector(".left");
const right_arrow = document.querySelector(".right");
const strands = document.querySelectorAll(".strand");
acronym.addEventListener("mouseenter", (e) => {
  acronym_meaning.classList.remove("hidden");
});
acronym.addEventListener("mouseleave", (e) => {
  acronym_meaning.classList.add("hidden");
});

// let arr = ["s1", "s2", "s3"];

// console.log(arr);
// left_arrow.addEventListener("click", () => {
//   for (let i = 0; i < arr.length; i++) {
//     strands[i].classList.remove(`${arr[i]}`);
//   }
//   const temp = arr.shift();
//   arr.push(temp);
//   for (let i = 0; i < arr.length; i++) {
//     strands[i].classList.add(`${arr[i]}`);
//   }
// });
// right_arrow.addEventListener("click", () => {
//   for (let i = 0; i < arr.length; i++) {
//     strands[i].classList.remove(`${arr[i]}`);
//   }
//   const temp = arr.pop();
//   arr.unshift(temp);
//   for (let i = 0; i < arr.length; i++) {
//     strands[i].classList.add(`${arr[i]}`);
//   }
// });
