// const port = 9000;
// const http = require("http");
// const httpStatus = require("http-status-codes");
// const db = require("./models/index");

// const routeResponseMap = {
//   "/movies": "All Movies Data in JSON format from Mongo DB",
//   "/genres": "All Genres Data in JSON format from Mongo DB",
//   "/artists": "All Artists Data in JSON format from Mongo DB",
// };

// const app = http.createServer((req, res) => {
//   let url = req.url;
//   if (routeResponseMap[url]) {
//     res.writeHead(httpStatus.StatusCodes.OK, {
//       "Content-Type": "text/html",
//     });
//     res.write(routeResponseMap[url]);
//     res.end();
//   } else {
//     res.writeHead(httpStatus.StatusCodes.NOT_FOUND, {
//       "Content-Type": "text/html",
//     });
//     res.write("Error: Page Not Found");
//     res.end();
//   }
// });

// app.listen(port);

// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch((err) => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

const express = require("express");
const cors = require("cors");
const app = express();
const port = 9000;
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Upgrad Movie booking application development.",
  });
});

app.listen(port, () => {
  console.log('Connection Established on PORT ', port);
}); 