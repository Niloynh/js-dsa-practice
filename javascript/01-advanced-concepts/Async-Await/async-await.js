function delay() {
    return new Promise((resolve) =>{
        setTimeout(() => resolve() ,2000)
    });
}


async function test(){
    // console.log("Wait...");
    await delay();
    // console.log("Doneee!!!");
}

test();

function fakeFetch(){
    return new Promise((resolve) =>{
        setTimeout(() => resolve("(Few Seconds wait)"), 2000)
    });
}

async function testing(){
    // console.log("Starting...");
   const result =  await fakeFetch();
    // console.log(result);
    // console.log("Done!")
}

testing();




function fetchData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Oops! Something went wrong.");
            }
        }, 1000);
    });
}

async function handleFetchData(){
    console.log("Trying to fetch...");

    try {
        const result = await fetchData(true);
        console.log("✔️", result);
    } catch (error) {
    console.log("❌", error);
        
    }
    
}

handleFetchData();