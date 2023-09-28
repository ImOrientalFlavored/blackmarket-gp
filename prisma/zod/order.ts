import * as z from "zod"
import * as imports from "../null"
import { Decimal } from "decimal.js"
import { OrderStatusType } from "@prisma/client"
import { CompleteUser, RelatedUserModel, CompleteShippingDetail, RelatedShippingDetailModel, CompletePaymentDetail, RelatedPaymentDetailModel, CompleteOrderDetail, RelatedOrderDetailModel } from "./index"

// Helper schema for Decimal fields
z
  .instanceof(Decimal)
  .or(z.string())
  .or(z.number())
  .refine((value) => {
    try {
      return new Decimal(value)
    } catch (error) {
      return false
    }
  })
  .transform((value) => new Decimal(value))

export const OrderModel = z.object({
  id: z.string(),
  status: z.nativeEnum(OrderStatusType),
  tax: z.number(),
  total: z.number(),
  createdAt: z.date(),
  userId: z.number().int(),
  updatedAt: z.date(),
})

export interface CompleteOrder extends z.infer<typeof OrderModel> {
  user: CompleteUser
  shippingDetail?: CompleteShippingDetail | null
  paymentDetail?: CompletePaymentDetail | null
  orderDetail: CompleteOrderDetail[]
}

/**
 * RelatedOrderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOrderModel: z.ZodSchema<CompleteOrder> = z.lazy(() => OrderModel.extend({
  user: RelatedUserModel,
  shippingDetail: RelatedShippingDetailModel.nullish(),
  paymentDetail: RelatedPaymentDetailModel.nullish(),
  orderDetail: RelatedOrderDetailModel.array(),
}))
