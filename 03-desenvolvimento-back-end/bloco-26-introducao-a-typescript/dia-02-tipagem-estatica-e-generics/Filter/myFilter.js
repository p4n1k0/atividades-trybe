function myFilter(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(myFilter([1, 2, 3], function (item, index, array) { return item < 3; }));
console.log(myFilter(["a", "b", "c"], function (item, index, array) {
    return item !== "a";
}));
