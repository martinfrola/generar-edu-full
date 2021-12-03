const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// SDK de Mercado Pago
const mercadopago = require("mercadopago");

//middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "/generar-edu/build")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/generar-edu/build", "index.html"));
});

// Agrega credenciales
mercadopago.configure({
  access_token:
    "APP_USR-2207575592258010-100323-27f423294df71f3bc95b24cbd3d096cd-36377523",
});

//routes
app.post("/pagos/", (req, res) => {
  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
        title: req.body.title,
        unit_price: 0.01,
        quantity: 1,
        id: req.body.userId,
      },
    ],
    binary_mode: true,
    back_urls: {
      success: "http://localhost:3000/finpago",
      failure: "http://localhost:3000/finpago",
    },
    auto_return: "approved",
    payment_methods: {
      excluded_payment_types: [
        {
          id: "ticket",
        },
      ],
      installments: 12,
    },

    //...
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log(response.body);
      res.redirect(response.body.init_point);
    })
    .then((req, res) => {
      console.log(req);
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
});

const port = process.env.PORT || 3001;

//server
app.listen(port, () => {
  console.log("Server on port 3001");
});
