const express = require("express");
const app = express();

// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token:
    "APP_USR-1101607055472183-110312-9bb899bb525989cb00439b3a8cc678ee-1011730652",
});

let preference = {
  items: [
    {
      title: "Mi producto",
      unit_price: 100,
      quantity: 1,
    },
  ],
};

mercadopago.preferences
  .create(preference)
  .then(function (response) {
    console.log(response);
    // Este valor reemplazará el string "<%= global.id %>" en tu HTML
    global.id = response.body.id;
  })
  .catch(function (error) {
    console.log(error);
  });

app.get("/backend", (req, res) => {
  res.send("<h1>Hola</h1>");
});

app.listen(8080, () => {
  console.log("Desde el servidor 8080");
});
