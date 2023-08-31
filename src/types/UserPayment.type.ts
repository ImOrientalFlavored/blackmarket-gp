export default interface UserPayment{
    id:number             //int
    user_id:number        //int
    payment_type:string   //varchar
    provider:string       //varchar
    account_no:number     //int
    expiration:string     //date
 }