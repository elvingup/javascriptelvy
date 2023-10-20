//fazer o consumo da api https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json
// use promise

const consumo = new Promise((resolve, reject) => {
    fetch( `https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json`)
})();
