import * as z from "zod"
import * as imports from "../null"
import { CompleteCategory, RelatedCategoryModel, CompletePromotion, RelatedPromotionModel } from "./index"

export const PromotionCategoryModel = z.object({
  id: z.number().int(),
  categoryId: z.number().int(),
  promotionId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompletePromotionCategory extends z.infer<typeof PromotionCategoryModel> {
  category: CompleteCategory
  promotion: CompletePromotion
}

/**
 * RelatedPromotionCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPromotionCategoryModel: z.ZodSchema<CompletePromotionCategory> = z.lazy(() => PromotionCategoryModel.extend({
  category: RelatedCategoryModel,
  promotion: RelatedPromotionModel,
}))
