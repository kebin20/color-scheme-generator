fetch(
  "https://www.thecolorapi.com/id?hex=24B1E0",
  { method: "GET" }
)
  .then( res=> res.json())
  .then(data => console.log(data));
