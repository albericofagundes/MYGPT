const app = require("./app");
const port = process.env.PORT || 3000;
console.log(`app: ${app}`);
console.log(`port: ${port}`);
app.listen(port, () => {
  console.log(`Server listening ou port: ${port}`);
});
