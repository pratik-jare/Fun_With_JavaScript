let arr:any = [{product:300},{product:400},{product:100},{product:150},{discount:10},{product:300},{discount:20},{product:540}]

let totalPrice :any= 0;
let discount :any = 0;


arr.forEach((ele:any) => { 
if(ele.discount !== undefined) {
discount = ele.discount 
} else {
let pricetoAdd:any = (ele.product - (ele.product * (discount/ 100)) ) ;
totalPrice += pricetoAdd; 
discount = 0
}
});


console.log(totalPrice);
