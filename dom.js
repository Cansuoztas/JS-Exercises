document.querySelector(".btn-ekle").addEventListener("click", () => {
  const liste = document.querySelector(".liste");
  const inputListe = document.querySelector(".input-liste");
  const yeniListe = document.createElement("li");
  const textNode = document.createTextNode(inputListe.value);
  yeniListe.appendChild(textNode);
  liste.appendChild(yeniListe);
});
document.querySelector(".btn-sil").addEventListener("click", () => {
  const liste = document.querySelector(".liste");
  liste.childElementCount > 0
    ? liste.removeChild(liste.lastElementChild)
    : alert("silinecek eleman kalmadi");
});

document.querySelector(".btn-on").addEventListener("click", () => {
  document.querySelector(".img").src = "./img/açık.png";
});
document.querySelector(".btn-off").addEventListener("click", () => {
  document.querySelector(".img").src = "./img/Untitled.png";
});
