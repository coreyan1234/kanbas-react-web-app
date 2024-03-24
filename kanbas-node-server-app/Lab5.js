const Lab5 = (app) => {
  app.get("/a5/welcome", (req, res) => {
    res.send("Welcome to Assignment 5");
  });
  app.get("/a5/add/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const sum = parseInt(a) + parseInt(b);
    res.send(sum.toString());
  });
  app.get("/a5/subtract/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const sum = parseInt(a) - parseInt(b);
    res.send(sum.toString());
  });
  app.get("/a5/multiply/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const product = parseInt(a) * parseInt(b);
    res.send(product.toString());
  });
  app.get("/a5/divide/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const quotient = parseInt(a) / parseInt(b);
    res.send(quotient.toString());
  });
  app.get("/a5/calculator", (req, res) => {
    const { a, b, operation } = req.query;
    let result = 0;
    switch (operation) {
      case "add":
        result = parseInt(a) + parseInt(b);
        break;
      case "subtract":
        result = parseInt(a) - parseInt(b);
        break;
      case "multiply":
        result = parseInt(a) * parseInt(b);
        break;
      case "divide":
        result = parseInt(a) / parseInt(b);
        break;
      default:
        result = "Invalid operation";
    }
    res.send(result.toString());
  });
};
export default Lab5;
