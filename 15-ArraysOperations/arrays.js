let array = [4, 3, 1, 22, 44, 66, 88, 99, 900, 67, 87, 43];

console.log("Show Array: [" + array + "]");
console.log("Is 5 included?--Answer:" + array.includes(5));
console.log("Find 1st number > 50?--Answer:" + array.find(el => el > 50));
console.log("Indexof number 88?--Answer:" + array.indexOf(88));
console.log("Filter numbers > 50?--Answer:" + array.filter(el => el > 50));
console.log("Sort Array: --Answer:" + array.sort());