let imgBox = document.getElementById("imgBox");
let barcode = document.getElementById("barcode");
let brText = document.getElementById("Text");

function generate() {
  if (brText.value === "") {
    alert("Masukan teks terlebih dahulu!");
  } else {
    JsBarcode(barcode, brText.value);
    imgBox.classList.add("show-img");
  }
}
