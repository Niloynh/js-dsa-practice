// Problem: Rotate Array
// ----------------------------

// Solution Starter
function rotate(nums, k) {
    // handle k greater than array length
    k = k % nums.length;
    console.log("intial array:", nums);
    console.log("rotate steps (k):", k);

    //  halper funtion to parts of array
    function reverse(start, end){
        while(start < end){
            [nums[start], nums[end]] = [nums[end], nums[start]];

            start++;
            end--
        }
    }

    // reverse the whole array
    reverse(0, nums.length - 1)
    console.log("after reversing the whole array",nums)

    // reverse first k elements
    reverse(0, k - 1)
    console.log(`after reversing first ${k} elements:`,nums);

    // reverse remaining elements
    reverse(k, nums.length - 1)
    console.log("after reversign the rest",nums);

    console.log("final rotated array:", nums);
}

// Test Cases
let arr1 = [1, 2, 3, 4, 5, 6, 7];
rotate(arr1, 3);
console.log("Arr1",arr1); // Expected: [5,6,7,1,2,3,4]

let arr2 = [-1, -100, 3, 99];
rotate(arr2, 2);
console.log("Arr2",arr2); // Expected: [3,99,-1,-100]
