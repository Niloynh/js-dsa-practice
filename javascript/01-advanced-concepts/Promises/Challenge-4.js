const p1 = new Promise(res => setTimeout(() => res('Task 1 done'),1000))
const p2 = new Promise(res => setTimeout(() => res('Task 2 done'),2000))
const p3 = new Promise(res => setTimeout(() => res('Task 3 done'),3000))

Promise.all([p1,p2,p3])
.then(result => console.log(result)
).catch(error => console.error(error)
)