// 🚀 In-place O(1) Space Solution (3-pointer approach)

function merge(nums1, m, nums2, n){
    console.log("before merge:", nums1, nums2);


    let i = m - 1; // pointer for nums1's last valid element
    let j = n - 1; // pointer for nums2's last element
    let k = m + n - 1; // pointer for the last index of nums1


    // merge in reverse order
    while(j >= 0){
        if(i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        }else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
        console.log(`current state:`, nums1);
        
    }

    console.log("Final marged array:", nums1);
}



// Test Cases
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
merge(nums1, 3, nums2, 3); 

let nums3 = [1];
let nums4 = [];
merge(nums3, 1, nums4, 0); 

let nums5 = [0];
let nums6 = [1];
merge(nums5, 0, nums6, 1); 