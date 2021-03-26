let shoppingList = new Map(
    [
        ['Banana', 3],
        ['Pineapple', 5],
        ['Pear', 2],
        ['Carrot', 10],
        ['Apple', 1.5],
    ]
);
let arrKey = [];
for(let col of shoppingList.entries()) {
    arrKey.push(`groceries: ${col[0]}`)
}
for(let i = 0; i < arrKey.length; i++) {
    console.log(arrKey[i]);
}
let arrValue = [];
for(let col of shoppingList.entries()) {
    arrValue.push(`amount: ${col[1]}`)
}
for(let i = 0; i < arrValue.length; i++) {
    console.log(arrValue[i]);
}
for(let col of shoppingList.entries()) {
    console.log([`${col[0]}`, `${col[1]}`]);
}
module.exports = { shoppingList, arrKey, arrValue};



