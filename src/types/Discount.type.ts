export default interface Discount{
    id:number               //int
    name:string             //varchar
    desc:string             //text
    discount_percent:number //decimal
    active:boolean          //boolean
    created_at: string      //timestamp
    modified_at:string      //timestamp
    deleted_at: string      //timestamp
 }