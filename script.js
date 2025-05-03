const l = document.querySelector(".shadow__btn").textContent;
console.log(l);
if (l != "AVNEETSINGH") {
  document.querySelector(".rightarea").addEventListener("click", function () {
    alert("Please Log in to Start using Voice Assistant");
  });
  document.querySelector(".mic").addEventListener("click", function () {
    alert("Please Log in to Start using Voice Assistant");
  });
} else window.location.href = "/dashboard.html";
