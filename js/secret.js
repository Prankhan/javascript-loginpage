const wrpper = document.querySelector(".wrapper");
const loginlink = document.querySelector(".loginlink");
const registrationlink = document.querySelector(".registrationlink");
const btnlogin = document.querySelector(".btnlogin");

registrationlink.addEventListener("click", () => {
  wrpper.classList.add("active");
});

loginlink.addEventListener("click", () => {
  wrpper.classList.remove("active");
});
btnlogin.addEventListener("click", () => {
  wrpper.classList.add("active-popup");
});
