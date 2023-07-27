const products = [
    { id: 1, name: "Яблоко",price:90},
    { id: 2, name: "Груша",price:30},
    { id: 3, name: "Банан",price:25},
    { id: 4, name: "Виноград",price:76},
    { id: 5, name:'Вишня',price:50}
];
function sortByName(a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
}
function sortByID(a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
}
function sortByPrice(a, b) {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
    return 0;
}
  
const sortProducts = function(products, sortRule){
    if(sortRule=="ID"||sortRule=="id"||sortRule=="Id"){
        products.sort(sortByID);
        return products;
    }else if(sortRule=="Name"||sortRule=="NAME"|| sortRule=="name"){
        products.sort(sortByName);
        return products;
    }else if(sortRule=="Price"||sortRule=="PRICE"|| sortRule=="price"){
        products.sort(sortByPrice);
        return products;
    }
}
console.log(sortProducts(products,'id'))