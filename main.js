// MENU HAMBÚRGUER
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// FORMULÁRIO
const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome.trim() === "" || mensagem.trim() === "") {
        alert("Preencha todos os campos!");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
});

// ZOOM NAS IMAGENS
const imagens = document.querySelectorAll(".redacao-img");
const zoomModal = document.getElementById("zoomModal");
const zoomImg = document.getElementById("zoomImg");
const closeModal = document.getElementById("closeModal");

imagens.forEach(img => {
    img.addEventListener("click", () => {
        zoomModal.style.display = "flex";
        zoomImg.src = img.src;
    });
});

closeModal.addEventListener("click", () => {
    zoomModal.style.display = "none";
});

zoomModal.addEventListener("click", (e) => {
    if (e.target === zoomModal) {
        zoomModal.style.display = "none";
    }
});
