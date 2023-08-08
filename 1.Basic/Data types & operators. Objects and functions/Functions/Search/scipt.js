const products = [
    { id: 1, name: "Яблоко",description:"Вкусное яблоко"},
    { id: 2, name: "Груша",description:"Вкусная груша"},
    { id: 3, name: "Банан",description:"Вкусный банан"},
    { id: 4, name: "Виноград",description:"Вкусный виноград"},
    { id: 5, name:'Вишня',description:"Вкусная вишня"}
];
function searchProducts(description,searchText) {
    let mas = [];
    const lowerSearchText = searchText.toLowerCase();
    let o;
    for(let i=0;i<products.length;i++){
        o = products[i];
        const ProductName = products[i].name.toLowerCase();
        const ProductDescription = products[i].description.toLocaleLowerCase()
        if(ProductName.includes(lowerSearchText) || ProductDescription.includes(description)){
            mas.push(o);
        }else{
            continue;
        }
    }
    return mas;
}
const searchText = "гр";
const description = "гр"
const foundProducts = searchProducts(description, searchText);
console.log(foundProducts);
