function changeBox() {
  let width = document.getElementById("width").value;
  let length = document.getElementById("length").value;
  let color = document.getElementById("color").value;
  let border = document.getElementById("border").value;
  let box = document.getElementsByClassName("box")[0];

  box.style.width = width + "%";
  box.style.height = length + "%";
  box.style.backgroundColor = color;
  box.style.borderRadius = border + "%";
}

function resert() {
  let box = document.getElementsByClassName("box")[0];


  box.style.width = "30%";
  box.style.height = "40%";
  box.style.backgroundColor = "blue";
  box.style.borderRadius = "0";
}
