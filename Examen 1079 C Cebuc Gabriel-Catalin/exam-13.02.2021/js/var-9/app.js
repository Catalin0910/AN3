function applyBlackFriday(products, discount) {
  return new Promise((resolve, reject) => {
    if (typeof discount !== "number") {
      reject(new Error("Invalid discount"));
    }
    if (discount <= 0 || discount > 10) {
      reject(new Error("Discount not applicable"));
    }

    console.log("Inputs:", products, discount);
    if (
      products.every(
        (prod) =>
          typeof prod.name !== "string" || typeof prod.price !== "number"
      )
    ) {
      reject(new Error("Invalid array format"));
    }
    let result = [];
    products.forEach((product) => {
      let obj = {};
      obj.name = product.name;
      obj.price = product.price - (discount * product.price) / 100;
      result.push(obj);
    });

    resolve(result);
  });
}

const app = {
  applyBlackFriday: applyBlackFriday,
};
module.exports = app;
