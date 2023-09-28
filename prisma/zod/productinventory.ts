import * as z from "zod"
import * as imports from "../null"
import { InventoryStatus } from "@prisma/client"
import { CompleteProduct, RelatedProductModel } from "./index"

export const ProductInventoryModel = z.object({
  id: z.number().int(),
  quantity: z.number().int(),
  reStockLevel: z.number().int().nullish(),
  status: z.nativeEnum(InventoryStatus),
  createdAt: z.date(),
  updatedAt: z.date(),
  productId: z.number().int(),
})

export interface CompleteProductInventory extends z.infer<typeof ProductInventoryModel> {
  product: CompleteProduct
}

/**
 * RelatedProductInventoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductInventoryModel: z.ZodSchema<CompleteProductInventory> = z.lazy(() => ProductInventoryModel.extend({
  product: RelatedProductModel,
}))
