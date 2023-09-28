import * as z from "zod"
import * as imports from "../null"
import { CompleteProduct, RelatedProductModel, CompletePromotionCategory, RelatedPromotionCategoryModel } from "./index"

export const CategoryModel = z.object({
  id: z.number().int(),
  categoryName: z.string(),
  categoryDesc: z.string(),
  slug: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  parentCategoryId: z.number().int().nullish(),
})

export interface CompleteCategory extends z.infer<typeof CategoryModel> {
  parentCategory?: CompleteCategory | null
  childCategories: CompleteCategory[]
  product: CompleteProduct[]
  promotionCategory: CompletePromotionCategory[]
}

/**
 * RelatedCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCategoryModel: z.ZodSchema<CompleteCategory> = z.lazy(() => CategoryModel.extend({
  parentCategory: RelatedCategoryModel.nullish(),
  childCategories: RelatedCategoryModel.array(),
  product: RelatedProductModel.array(),
  promotionCategory: RelatedPromotionCategoryModel.array(),
}))
