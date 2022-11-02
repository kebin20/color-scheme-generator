//  Global variable
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

async function fetchColor() {
  // To obtain the value of the hex color from color picker without hex number
  const hexValue = document.getElementById("color-picker").value;
  const hexNumber = hexValue.replace("#", "");

  // To obtain values from select dropdown
  const schemeValue = scheme.value;
  scheme.onchange = schemeValue;

  const res = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexNumber}&mode=${schemeValue}`,
    {
      method: "GET",
    }
  );
  const data = await res.json();

  const hexNumberData = data.colors;
  const colorData = hexNumberData.map((number) => number.hex.value);
  colorData.forEach((color, index) => {
    colorStrips[index].style.backgroundColor = color;
    hexNumberDisplays[index].textContent = color;

    // Copy to clipboard function
    hexNumberDisplays[index].addEventListener("click", () => {
      document.execCommand("copy");
      showToolTip();
      setTimeout(() => {
        removeToolTip();
      }, 1000);
    });

    colorStrips[index].addEventListener("click", () => {
      document.execCommand("copy");
      showToolTip();
      setTimeout(() => {
        removeToolTip();
      }, 1000);
    });

    colorStrips[index].addEventListener("copy", (e) => {
      e.preventDefault();
      if (e.clipboardData) {
        e.clipboardData.setData(
          "text/plain",
          colorStrips[index].style.backgroundColor
        );
        console.log(e.clipboardData.getData("text"));
      }
    });

    hexNumberDisplays[index].addEventListener("copy", (e) => {
      e.preventDefault();
      if (e.clipboardData) {
        e.clipboardData.setData(
          "text/plain",
          hexNumberDisplays[index].textContent
        );
        console.log(e.clipboardData.getData("text"));
      }
    });
  });
}

getColorBtn.addEventListener("click", () => {
  fetchColor();
});

fetchColor();

function showToolTip() {
  document.getElementById("tooltip").style.display = "block";
}

function removeToolTip() {
  document.getElementById("tooltip").style.display = "none";
}

// Alternative solution
// for(i=0; i < 5; i++) {
//   colorStrips[i].style.backgroundColor = colorData[i]
// }
