const botaoTrailer = document.querySelector('.botao-trailer');//string
const modal = document.querySelector(".modal")
const video = document.getElementById("video")
const botaofecharModal = document.querySelector(".fechar-modal")
const linkDoVideo = video.src

function alternarModal() {
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
        alternarModal()
        video.setAttribute("src",linkDoVideo)
}) //função executa uma ação

botaofecharModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "")

})



