interface ILoan { 
    interest:number 
 } 
  
 class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
  
 var obj5 = new AgriLoan(10,1) 
 console.log("利润为 : "+obj5.interest+"，抽成为 : "+obj5.rebate )
 //利润为 : 10，抽成为 : 1