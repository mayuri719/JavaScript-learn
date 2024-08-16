
let sbiBank = {
    bankName: "SBI",
    location: "Pune",
    accountNo: 123456789,
    Ifsc: "SBI0001234",
    intrestRate: 5.0 ,
    showDetails: function () {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, account Number: ${this.accountNo},Ifsc Code :${this.Ifsc}, Inrest Rate : ${this.intrestRate}`); 
    }

};

let axisBank = {
    bankName: "AXIS",
    location: "Pune",
    accountNo: 123566789,
    Ifsc: "AXIS000123",
    intrestRate: 3.0 ,
    showDetails: function () {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, account Number: ${this.accountNo},Ifsc Code :${this.Ifsc}, Inrest Rate : ${this.intrestRate}`); 
    }
};

let hdfcBank = {
    bankName: "HDFC",
    location: "Pune",
    accountNo: 1777645789,
    Ifsc: "HDFC0000234",
    intrestRate:  0.049 ,
    showDetails: function () {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, account Number: ${this.accountNo},Ifsc Code :${this.Ifsc}, Inrest Rate : ${this.intrestRate}`); 
    }
};

let yesBank = {
    bankName: "YES",
    location: "Pune",
    accountNo: 100045789,
    Ifsc: "YES0000294",
    intrestRate:  0.07,
    showDetails: function () {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, account Number: ${this.accountNo},Ifsc Code :${this.Ifsc}, Inrest Rate : ${this.intrestRate}`);   
    }
}


console.log("SBI details invoked using function is : ");
sbiBank.showDetails();
console.log("================================================================================");

console.log("Axis Bank details invoked using function is : ");
axisBank.showDetails();
console.log("================================================================================");

console.log("HDFC Bank details invoked using function is : ");
hdfcBank.showDetails();
console.log("================================================================================");

console.log("YES Bank details invoked using function is : ");
yesBank.showDetails();













