function delay() {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Done After 1s")
        }, 1000)
    })
}

async function runDelay() {
    const result = await delay();
    console.log(result);
    
}
runDelay();