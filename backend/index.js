const express = require("express");
const routes = require("./routes");

const port = 5000;
const app = express();

app.use(express.json());
app.use("/",routes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("Server running on port 5000");
});
