//import { CartItem } from "@prisma/client"
export default interface CartItemType{
    id:number           //int
    productId:number   //int
    cartId:number   //int
    quantity:number     //int
    promotionId:string   //timestamp
 }