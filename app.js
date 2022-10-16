// HTML Components
const colorStrip1 = document.getElementById("color-strip-one");
const colorStrip2 = document.getElementById("color-strip-two");
const colorStrip3 = document.getElementById("color-strip-three");
const colorStrip4 = document.getElementById("color-strip-four");
const colorStrip5 = document.getElementById("color-strip-five");
const hexNumberDisplay1 = document.getElementById("hex-number-one");
const hexNumberDisplay2 = document.getElementById("hex-number-two");
const hexNumberDisplay3 = document.getElementById("hex-number-three");
const hexNumberDisplay4 = document.getElementById("hex-number-four");
const hexNumberDisplay5 = document.getElementById("hex-number-five");
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
      const colorData1 = data.colors[0].hex.value;
      const colorData2 = data.colors[1].hex.value;
      const colorData3 = data.colors[2].hex.value;
      const colorData4 = data.colors[3].hex.value;
      const colorData5 = data.colors[4].hex.value;

      colorStrip1.style.backgroundColor = colorData1;
      colorStrip2.style.backgroundColor = colorData2;
      colorStrip3.style.backgroundColor = colorData3;
      colorStrip4.style.backgroundColor = colorData4;
      colorStrip5.style.backgroundColor = colorData5;

      hexNumberDisplay1.textContent = colorData1;
      hexNumberDisplay2.textContent = colorData2;
      hexNumberDisplay3.textContent = colorData3;
      hexNumberDisplay4.textContent = colorData4;
      hexNumberDisplay5.textContent = colorData5;

      console.log(data);
    });
}

getColorBtn.addEventListener("click", () => {
  fetchColor();
});

//Display Initial Colour
// displayInitialColor(hexValue, hexNumber);
// function displayInitialColor(hexValue, hexNumber) {
//   colorStrip1.style.backgroundColor = hexValue;
//   hexNumberDisplay1.textContent = hexNumber.replace("", "#");
// }

//ALTERNATIVE SOLUTION TO EXPERIMENT
// let color = {
//   getHex: function () {
//     let hex = document.getElementById("color-picker").value;
//     let justHexNumber = hex.replace("#", "");
//     return justHexNumber;
//   },

//   fetchColor: function (hex) {
//     fetch(`https://www.thecolorapi.com/id?hex=${hex}`, {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   },

//   getColorHtml: function (data) {},

//   displayColor: function () {
//     this.fetchColor(this.getHex);
//   },
// };

// TEST PURPOSES
// let color = document.getElementById("colorPicker").value;
//   let justCn = color.replace("#", "");

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {

//   console.log(justCn);
// });
