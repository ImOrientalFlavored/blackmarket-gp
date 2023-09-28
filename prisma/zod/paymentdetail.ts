import * as z from "zod"
import * as imports from "../null"
import { CompletePaymentMethod, RelatedPaymentMethodModel, CompleteAddress, RelatedAddressModel, CompleteOrder, RelatedOrderModel } from "./index"

export const PaymentDetailModel = z.object({
  id: z.number().int(),
  billingAddressId: z.number().int(),
  orderId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompletePaymentDetail extends z.infer<typeof PaymentDetailModel> {
  paymentMethod: CompletePaymentMethod[]
  billingAddress: CompleteAddress
  order: CompleteOrder
}

/**
 * RelatedPaymentDetailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPaymentDetailModel: z.ZodSchema<CompletePaymentDetail> = z.lazy(() => PaymentDetailModel.extend({
  paymentMethod: RelatedPaymentMethodModel.array(),
  billingAddress: RelatedAddressModel,
  order: RelatedOrderModel,
}))
