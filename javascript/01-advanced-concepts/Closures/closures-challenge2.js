function createBankAccount(balance) {
    return {
        deposit(amount) {
           balance += amount;
           console.log("Deposit:", amount, "Current Balance:", balance);
           
        },
        withdraw(amount) {
         if(amount > balance){
            console.log("Insufficient balance!!!!!");
         }else{
            balance -= amount
            console.log("Withdraw", amount, "Current Balance:", balance);
         }
         
        },
        getBalance(){
            console.log(balance);
        },
    };
}

const account = createBankAccount(100);

account.deposit(50)
account.withdraw(200)
console.log(account.getBalance());
