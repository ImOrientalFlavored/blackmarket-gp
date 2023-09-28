import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel, CompletePaymentDetail, RelatedPaymentDetailModel, CompletePaymentOption, RelatedPaymentOptionModel } from "./index"

export const PaymentMethodModel = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  paymentDetailId: z.number().int(),
  paymentOptionId: z.number().int(),
  cardProvider: z.string().nullish(),
  nameOnCard: z.string().nullish(),
  isDefault: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompletePaymentMethod extends z.infer<typeof PaymentMethodModel> {
  user: CompleteUser
  paymentDetail: CompletePaymentDetail
  paymentOption: CompletePaymentOption
}

/**
 * RelatedPaymentMethodModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPaymentMethodModel: z.ZodSchema<CompletePaymentMethod> = z.lazy(() => PaymentMethodModel.extend({
  user: RelatedUserModel,
  paymentDetail: RelatedPaymentDetailModel,
  paymentOption: RelatedPaymentOptionModel,
}))
