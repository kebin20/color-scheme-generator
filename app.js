// HTML Components
// const colorStrip1 = document.getElementById("color-strip-1");
// const colorStrip2 = document.getElementById("color-strip-2");
// const colorStrip3 = document.getElementById("color-strip-3");
// const colorStrip4 = document.getElementById("color-strip-4");
// const colorStrip5 = document.getElementById("color-strip-5");

const numbers = [1, 2, 3, 4, 5];

const colorStrips = numbers.map((number) =>
  document.getElementById(`color-strip-${number}`)
);

const hexNumberDisplays = numbers.map((number) =>
  document.getElementById(`hex-number-${number}`)
);

// const hexNumberDisplay1 = document.getElementById("hex-number-1");
// const hexNumberDisplay2 = document.getElementById("hex-number-2");
// const hexNumberDisplay3 = document.getElementById("hex-number-3");
// const hexNumberDisplay4 = document.getElementById("hex-number-4");
// const hexNumberDisplay5 = document.getElementById("hex-number-5");
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
      // const colorData1 = data.colors[0].hex.value;
      // const colorData2 = data.colors[1].hex.value;
      // const colorData3 = data.colors[2].hex.value;
      // const colorData4 = data.colors[3].hex.value;
      // const colorData5 = data.colors[4].hex.value;

      // colorStrip1.style.backgroundColor = colorData1;
      // colorStrip2.style.backgroundColor = colorData2;
      // colorStrip3.style.backgroundColor = colorData3;
      // colorStrip4.style.backgroundColor = colorData4;
      // colorStrip5.style.backgroundColor = colorData5;

      // hexNumberDisplay1.textContent = colorData1;
      // hexNumberDisplay2.textContent = colorData2;
      // hexNumberDisplay3.textContent = colorData3;
      // hexNumberDisplay4.textContent = colorData4;
      // hexNumberDisplay5.textContent = colorData5;

      const colorData = hexNumberData.forEach((number) =>
        console.log(number.hex.value)
      );

      colorStrips.forEach((strip) => {
        strip.style.backgroundColor = colorData;
      });

      // hexNumberDisplays.textContent = colorData;

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
