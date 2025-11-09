// 🔢 Problem: Two Sum


/*========================================================*/
// Step 1: The Naive Approach (Brute Force) - O(n^2
/*========================================================*/


// 🚀 Solution Starter:
const TwoSumBruteForce = (nums, target) => {

    // 1. Outer Loop: Select the First Number
    for(let i = 0; i < nums.length; i++){

        // 2. inner loop: compare with every number after i
        for(let j = i +1; j < nums.length; j++){
            // 3. check if the pair adds up to the target

            if(nums[i] + nums[j] === target){

                // 4. found the valid pair > return their indices
                return[i, j]
            }
        }
    }

    // 5. if the valid pair not found . return empty array

    return [];
}

// test cases 

// console.log(TwoSumBruteForce([3, 4, 2, 5, 8], 5))
// console.log(TwoSumBruteForce([3, 7, 2, 5, 8], 7))


// time complexity: O(n^2) nested loops ( slow for large inputs)

/*========================================================*/
// Step 2: The Optimized Approach (Using Hash Map) - O(n)
/*========================================================*/


// solution (using hash map)

const twoSumHashMap = (nums, target) => {
    // 1. create a hash map
    const mapNum = new Map();

    // 2. traverse the array only once 
    for(let i = 0; i < nums.length; i++){
        const currentNum = nums[i]

    // 3. find the complement (the number we need)
        const complement = target - currentNum;

    // 4. check if the complement already exists in the map
        if(mapNum.has(complement)){
            // found the pair
            return [mapNum.get(complement), i]
        }
    // 5. otherwise, store current number and its index
        mapNum.set(currentNum, i)
    }

    // if valid pair not found > return empty array
    return [];
}

// test cases
console.log(twoSumHashMap([1, 2, 4, 5, 8], 6))

// time complexity: O(n)
// Each loopup and insertion in map: O(1), total = n * 1 = O(n).