function randomPromise() {
    return new Promise((resolve) =>{
        const random = Math.random()

        if(random < 0.5){
            resolve("Success")
        }else{
            resolve("Fail")
        }
    })
}


randomPromise().then(res => console.log(res)
).catch(err => console.log(err)
)

