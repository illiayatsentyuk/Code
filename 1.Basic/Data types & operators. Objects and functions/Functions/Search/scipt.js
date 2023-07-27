const products = [
    { id: 1, name: "Яблоко"},
    { id: 2, name: "Груша"},
    { id: 3, name: "Банан"},
    { id: 4, name: "Виноград"},
    { id: 5, name:'Вишня'}
];
console.log(products.length)
function searchProducts(products, searchText) {
    let mas = [];
    const lowerSearchText = searchText.toLowerCase();
    for(let i=0;i<products.length;i++){
        const ProductName = products[i].name.toLowerCase();
        if(ProductName.includes(lowerSearchText)){
            mas.push(ProductName);
        }else{
            continue;
        }
    }
    return mas;
}
const searchText = "в";
const foundProducts = searchProducts(products, searchText);
console.log(foundProducts);