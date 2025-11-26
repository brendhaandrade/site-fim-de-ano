// MENU HAMBÚRGUER
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// ================== MODAL DE IMAGEM ==================
const imagens = document.querySelectorAll(".redacao-img");

// pega SOMENTE o primeiro zoomModal que existe no HTML
const zoomModal = document.querySelector("#zoomModal");
const zoomImg = zoomModal.querySelector("#zoomImg");
const closeModal = zoomModal.querySelector("#closeModal");

// escala do zoom
let scale = 1;
let startDistance = 0;

// Abrir modal
imagens.forEach(img => {
    img.addEventListener("click", () => {
        zoomModal.style.display = "flex";
        zoomImg.src = img.src;
        scale = 1;
        zoomImg.style.transform = "scale(1)";
    });
});

// Fechar no X
closeModal.addEventListener("click", () => {
    zoomModal.style.display = "none";
});

// Fechar clicando fora
zoomModal.addEventListener("click", (e) => {
    if (e.target === zoomModal) {
        zoomModal.style.display = "none";
    }
});

// ================== ZOOM NO PC ==================
zoomImg.addEventListener("wheel", (e) => {
    e.preventDefault();

    scale += e.deltaY * -0.0015;
    scale = Math.min(Math.max(scale, 0.5), 4);

    zoomImg.style.transform = `scale(${scale})`;
});

// ================== PINCH-ZOOM NO CELULAR ==================
zoomImg.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
        e.preventDefault();

        const [t1, t2] = e.touches;
        startDistance = Math.hypot(
            t2.clientX - t1.clientX,
            t2.clientY - t1.clientY
        );
    }
}, { passive: false });

zoomImg.addEventListener("touchmove", (e) => {
    if (e.touches.length === 2) {
        e.preventDefault();

        const [t1, t2] = e.touches;
        const newDist = Math.hypot(
            t2.clientX - t1.clientX,
            t2.clientY - t1.clientY
        );

        const zoomFactor = newDist / startDistance;

        scale *= zoomFactor;
        scale = Math.min(Math.max(scale, 0.5), 4);

        zoomImg.style.transform = `scale(${scale})`;

        startDistance = newDist;
    }
}, { passive: false });
