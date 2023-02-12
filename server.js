// import app
const app = require("./app");

// setting port
const port = process.env.PORT;

// creating server
app.listen(port, () =>
  console.log(`Server is running successfully on port ${port}`)
);
