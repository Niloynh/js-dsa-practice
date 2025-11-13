function createGreeter(name){
    return function(){
            console.log(`Hello ${name} Have a Nice Day!!`);
        }

}

const greetNiloy = createGreeter("Niloy");
greetNiloy();

