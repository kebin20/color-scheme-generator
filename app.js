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

function fetchColor() { 
  const hexValue = document.getElementById("color-picker").value;
  const hexNumber = hexValue.replace("#", "");
  displayColor(hexValue, hexNumber);
  fetch(`https://www.thecolorapi.com/scheme?hex=${hexNumber}&mode=${scheme}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function displayColor(hexValue, hexNumber) {
  colorStrip1.style.backgroundColor = hexValue;
  hexNumberDisplay1.textContent = hexNumber.replace("", "#");
}

getColorBtn.addEventListener("click", () => {
  fetchColor();
});

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
