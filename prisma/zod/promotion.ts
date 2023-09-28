import * as z from "zod"
import * as imports from "../null"
import { CompletePromotionCategory, RelatedPromotionCategoryModel, CompleteCartItem, RelatedCartItemModel } from "./index"

export const PromotionModel = z.object({
  id: z.number().int(),
  promotionName: z.string(),
  promotionDesc: z.string(),
  promotionRate: z.number().int(),
  isActive: z.boolean(),
  startDate: z.date(),
  endDate: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompletePromotion extends z.infer<typeof PromotionModel> {
  promotionCategory: CompletePromotionCategory[]
  CartItem?: CompleteCartItem | null
}

/**
 * RelatedPromotionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPromotionModel: z.ZodSchema<CompletePromotion> = z.lazy(() => PromotionModel.extend({
  promotionCategory: RelatedPromotionCategoryModel.array(),
  CartItem: RelatedCartItemModel.nullish(),
}))
