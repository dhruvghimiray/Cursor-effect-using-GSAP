let cursor = document.querySelector("#cursor");

let main = document.querySelector("#main");
main.addEventListener("mousemove", (e) => {
  gsap.to("#cursor", {
    x: e.clientX,
    y: e.clientY,
    duration: 0.5,
  });
});

let img = document.querySelector("#img");
cursor.innerHTML = "View More"
img.addEventListener("mouseenter", () => {
  gsap.to("#cursor", {
    scale: 6,
    backgroundColor: "#64646441",
  });
});
img.addEventListener("mouseleave", () => {
    cursor.innerHTML = ""
  gsap.to("#cursor", {
    scale: 1,
    backgroundColor: "#fff",
  });
});
