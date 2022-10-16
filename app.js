//Global variable
const numbers = [1, 2, 3, 4, 5];

// HTML Components
const colorStrips = numbers.map((number) =>
  document.getElementById(`color-strip-${number}`)
);
const hexNumberDisplays = numbers.map((number) =>
  document.getElementById(`hex-number-${number}`)
);
const getColorBtn = document.getElementById("get-color-scheme");
const scheme = document.getElementById("scheme-select");

function fetchColor() {
  //To obtain the value of the hex color from color picker
  const hexValue = document.getElementById("color-picker").value;
  const hexNumber = hexValue.replace("#", "");

  //To obtain values from select dropdown
  let schemeValue = scheme.value;
  scheme.onchange = schemeValue;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexNumber}&mode=${schemeValue}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      let hexNumberData = data.colors;
      const colorData = hexNumberData.map((number) => number.hex.value);
      colorData.forEach((color, index) => {
        colorStrips[index].style.backgroundColor = color;
        hexNumberDisplays[index].textContent = color;
      });
    });
}

getColorBtn.addEventListener("click", () => {
  fetchColor();
});

//Alternative solution
// for(i=0; i < 5; i++) {
//   colorStrips[i].style.backgroundColor = colorData[i]
// }
