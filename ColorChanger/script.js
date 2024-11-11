const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e.target);
    switch (e.target.id) {
      case "crimson":
        body.style.backgroundColor = "crimson";
        break;
      case "pink":
        body.style.backgroundColor = "pink";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      case "orange":
        body.style.backgroundColor = "orange";
        break;
      case "coral":
        body.style.backgroundColor = "coral";
        break;
      case "green":
        body.style.backgroundColor = "green";
        break;
      case "Lime":
        body.style.backgroundColor = "Lime";
        break;
      default:
       
        break;
    }
  });
});
