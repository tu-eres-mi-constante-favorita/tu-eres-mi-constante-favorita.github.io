document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".imagenes");
    imagenes.forEach((imagen) => {
      imagen.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.2)";
      });
      imagen.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
      });
    });
});
