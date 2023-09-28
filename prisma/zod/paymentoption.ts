import * as z from "zod"
import * as imports from "../null"
import { PaymentType } from "@prisma/client"
import { CompletePaymentMethod, RelatedPaymentMethodModel } from "./index"

export const PaymentOptionModel = z.object({
  id: z.number().int(),
  paymentType: z.nativeEnum(PaymentType),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompletePaymentOption extends z.infer<typeof PaymentOptionModel> {
  paymentMethod: CompletePaymentMethod[]
}

/**
 * RelatedPaymentOptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPaymentOptionModel: z.ZodSchema<CompletePaymentOption> = z.lazy(() => PaymentOptionModel.extend({
  paymentMethod: RelatedPaymentMethodModel.array(),
}))
