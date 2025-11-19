// Built-in map()
let nums = [1, 2, 3]
let doubled = nums.map(n => n * 2)
// console.log(doubled);

// custom map 
function customMap(arr, callBack){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callBack(arr[i], i, arr))
    }
    return result;
}

// Using custom map

let nums2 = [1, 2, 3];

let doubled2 = customMap(nums2, function(n) {
    return n * 2;
});


// Built-in filter()

let nums3 = [1, 2, 3, 4];
let even = nums3.filter(n => n % 2 === 0);
// console.log(even);

// custom filter()

function customFilter(arr1, callBack1){
    let result = [];
    for(let i = 0; i < arr1.length; i++) {
    if(callBack1(arr1[i], i, arr1)){
        result.push(arr1[i])
    }
}
return result;
}

// using 
let nums4 = [1, 2, 3, 4];

let evenFilter = customFilter(nums4, function(n) {
    return n % 2 === 0;
});
console.log(evenFilter);
