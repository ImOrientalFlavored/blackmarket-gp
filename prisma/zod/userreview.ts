import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel, CompleteProduct, RelatedProductModel } from "./index"

export const UserReviewModel = z.object({
  id: z.number().int(),
  title: z.string(),
  message: z.string(),
  rating: z.number().int(),
  authorId: z.number().int(),
  productId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUserReview extends z.infer<typeof UserReviewModel> {
  author: CompleteUser
  product: CompleteProduct
}

/**
 * RelatedUserReviewModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserReviewModel: z.ZodSchema<CompleteUserReview> = z.lazy(() => UserReviewModel.extend({
  author: RelatedUserModel,
  product: RelatedProductModel,
}))
