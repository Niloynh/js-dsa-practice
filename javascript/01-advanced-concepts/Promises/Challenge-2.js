function alwaysSuccess(){

    return new Promise((resolve) => {
        resolve("Always Success!!")
    })
}

alwaysSuccess().then(res => console.log(res)
).catch(err => console.log(err))



const alwaysSuccess2 = () => Promise.resolve("Always Success!!")

alwaysSuccess2().then(res => console.log(res)
).catch(error => console.log(error)
)