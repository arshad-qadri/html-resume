const image = document.getElementById("image");
const docs = document.getElementById("Docs");

image.onclick = () => {
  alert("hi");
  // console.log(window.html2)
  html2pdf().from(docs).save();
};
