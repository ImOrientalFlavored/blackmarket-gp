export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      Address: {
        Row: {
          city: string
          country: string
          createdAt: string
          galaxy: string | null
          id: number
          localCluster: string | null
          localGroup: string | null
          planet: string | null
          solarSystem: string | null
          state: string
          street: string
          unit: string
          universe: string | null
          updatedAt: string
          zipcode: string
        }
        Insert: {
          city: string
          country: string
          createdAt?: string
          galaxy?: string | null
          id?: number
          localCluster?: string | null
          localGroup?: string | null
          planet?: string | null
          solarSystem?: string | null
          state: string
          street: string
          unit: string
          universe?: string | null
          updatedAt: string
          zipcode: string
        }
        Update: {
          city?: string
          country?: string
          createdAt?: string
          galaxy?: string | null
          id?: number
          localCluster?: string | null
          localGroup?: string | null
          planet?: string | null
          solarSystem?: string | null
          state?: string
          street?: string
          unit?: string
          universe?: string | null
          updatedAt?: string
          zipcode?: string
        }
        Relationships: []
      }
      AuthenticationToken: {
        Row: {
          createdAt: string
          expiry: string | null
          id: number
          token: string
          updatedAt: string
          userId: number
        }
        Insert: {
          createdAt?: string
          expiry?: string | null
          id?: number
          token: string
          updatedAt: string
          userId: number
        }
        Update: {
          createdAt?: string
          expiry?: string | null
          id?: number
          token?: string
          updatedAt?: string
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "AuthenticationToken_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      Cart: {
        Row: {
          createdAt: string
          id: number
          updatedAt: string
          userId: number
        }
        Insert: {
          createdAt?: string
          id?: number
          updatedAt: string
          userId: number
        }
        Update: {
          createdAt?: string
          id?: number
          updatedAt?: string
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "Cart_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      CartItem: {
        Row: {
          cartId: number
          createdAt: string
          id: number
          productId: number
          promotionId: number | null
          quantity: number
          updatedAt: string
        }
        Insert: {
          cartId: number
          createdAt?: string
          id?: number
          productId: number
          promotionId?: number | null
          quantity: number
          updatedAt: string
        }
        Update: {
          cartId?: number
          createdAt?: string
          id?: number
          productId?: number
          promotionId?: number | null
          quantity?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "CartItem_cartId_fkey"
            columns: ["cartId"]
            referencedRelation: "Cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CartItem_productId_fkey"
            columns: ["productId"]
            referencedRelation: "Product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CartItem_promotionId_fkey"
            columns: ["promotionId"]
            referencedRelation: "Promotion"
            referencedColumns: ["id"]
          }
        ]
      }
      Category: {
        Row: {
          categoryDesc: string
          categoryName: string
          createdAt: string
          id: number
          parentCategoryId: number | null
          slug: string | null
          updatedAt: string
        }
        Insert: {
          categoryDesc: string
          categoryName: string
          createdAt?: string
          id?: number
          parentCategoryId?: number | null
          slug?: string | null
          updatedAt: string
        }
        Update: {
          categoryDesc?: string
          categoryName?: string
          createdAt?: string
          id?: number
          parentCategoryId?: number | null
          slug?: string | null
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Category_parentCategoryId_fkey"
            columns: ["parentCategoryId"]
            referencedRelation: "Category"
            referencedColumns: ["id"]
          }
        ]
      }
      Invoice: {
        Row: {
          id: string
        }
        Insert: {
          id: string
        }
        Update: {
          id?: string
        }
        Relationships: []
      }
      Login: {
        Row: {
          createdAt: string
          failedAttempts: number
          id: string
          lastLogin: string | null
          lockoutTime: string | null
          password: string
          updatedAt: string
          userId: number
          username: string
        }
        Insert: {
          createdAt?: string
          failedAttempts?: number
          id: string
          lastLogin?: string | null
          lockoutTime?: string | null
          password: string
          updatedAt: string
          userId: number
          username: string
        }
        Update: {
          createdAt?: string
          failedAttempts?: number
          id?: string
          lastLogin?: string | null
          lockoutTime?: string | null
          password?: string
          updatedAt?: string
          userId?: number
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "Login_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      Order: {
        Row: {
          createdAt: string
          id: string
          status:
            | "Pending"
            | "Processing"
            | "Shipped"
            | "Delivered"
            | "Cancelled"
          tax: number
          total: number
          updatedAt: string
          userId: number
        }
        Insert: {
          createdAt?: string
          id: string
          status?:
            | "Pending"
            | "Processing"
            | "Shipped"
            | "Delivered"
            | "Cancelled"
          tax: number
          total: number
          updatedAt: string
          userId: number
        }
        Update: {
          createdAt?: string
          id?: string
          status?:
            | "Pending"
            | "Processing"
            | "Shipped"
            | "Delivered"
            | "Cancelled"
          tax?: number
          total?: number
          updatedAt?: string
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "Order_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      OrderDetail: {
        Row: {
          createdAt: string
          id: number
          orderId: string
          productId: number
          quantity: number
          total: number
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: number
          orderId: string
          productId: number
          quantity: number
          total: number
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: number
          orderId?: string
          productId?: number
          quantity?: number
          total?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "OrderDetail_orderId_fkey"
            columns: ["orderId"]
            referencedRelation: "Order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "OrderDetail_productId_fkey"
            columns: ["productId"]
            referencedRelation: "Product"
            referencedColumns: ["id"]
          }
        ]
      }
      PaymentDetail: {
        Row: {
          billingAddressId: number
          createdAt: string
          id: number
          orderId: string
          updatedAt: string
        }
        Insert: {
          billingAddressId: number
          createdAt?: string
          id: number
          orderId: string
          updatedAt: string
        }
        Update: {
          billingAddressId?: number
          createdAt?: string
          id?: number
          orderId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "PaymentDetail_billingAddressId_fkey"
            columns: ["billingAddressId"]
            referencedRelation: "Address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "PaymentDetail_orderId_fkey"
            columns: ["orderId"]
            referencedRelation: "Order"
            referencedColumns: ["id"]
          }
        ]
      }
      PaymentMethod: {
        Row: {
          cardProvider: string | null
          createdAt: string
          id: number
          isDefault: boolean
          nameOnCard: string | null
          paymentDetailId: number
          paymentOptionId: number
          updatedAt: string
          userId: number
        }
        Insert: {
          cardProvider?: string | null
          createdAt?: string
          id: number
          isDefault: boolean
          nameOnCard?: string | null
          paymentDetailId: number
          paymentOptionId: number
          updatedAt: string
          userId: number
        }
        Update: {
          cardProvider?: string | null
          createdAt?: string
          id?: number
          isDefault?: boolean
          nameOnCard?: string | null
          paymentDetailId?: number
          paymentOptionId?: number
          updatedAt?: string
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "PaymentMethod_paymentDetailId_fkey"
            columns: ["paymentDetailId"]
            referencedRelation: "PaymentDetail"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "PaymentMethod_paymentOptionId_fkey"
            columns: ["paymentOptionId"]
            referencedRelation: "PaymentOption"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "PaymentMethod_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      PaymentOption: {
        Row: {
          createdAt: string
          id: number
          paymentType:
            | "CASH"
            | "DEBIT"
            | "CREDIT"
            | "BITCOIN"
            | "PAYPAL"
            | "AFFIRM"
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: number
          paymentType:
            | "CASH"
            | "DEBIT"
            | "CREDIT"
            | "BITCOIN"
            | "PAYPAL"
            | "AFFIRM"
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: number
          paymentType?:
            | "CASH"
            | "DEBIT"
            | "CREDIT"
            | "BITCOIN"
            | "PAYPAL"
            | "AFFIRM"
          updatedAt?: string
        }
        Relationships: []
      }
      Permission: {
        Row: {
          accessType: "READ" | "WRITE" | "UPDATE" | "DELETE"
          createdAt: string
          id: number
          resource: string
          updatedAt: string
        }
        Insert: {
          accessType: "READ" | "WRITE" | "UPDATE" | "DELETE"
          createdAt?: string
          id?: number
          resource: string
          updatedAt: string
        }
        Update: {
          accessType?: "READ" | "WRITE" | "UPDATE" | "DELETE"
          createdAt?: string
          id?: number
          resource?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Product: {
        Row: {
          categoryId: number
          createdAt: string
          features: Json | null
          grade:
            | "SSSSS"
            | "SSSS"
            | "SSS"
            | "SS"
            | "A"
            | "B"
            | "C"
            | "D"
            | "E"
            | "F"
            | "G"
            | "H"
            | "I"
            | "J"
            | "K"
            | "L"
            | "M"
            | "N"
            | "O"
            | "P"
            | "Q"
            | "R"
            | "S"
            | "T"
            | "U"
            | "V"
            | "W"
            | "X"
            | "Y"
            | "Z"
            | null
          id: number
          imageUrl: string | null
          isActive: boolean | null
          isAvailable: boolean | null
          msrp: number | null
          price: number
          productDesc: string
          productName: string
          quantity: number | null
          shortDesc: string | null
          size: string | null
          sku: string | null
          slug: string | null
          soldQuantity: number | null
          updatedAt: string
          weight: number | null
          weightUnit: string | null
        }
        Insert: {
          categoryId: number
          createdAt?: string
          features?: Json | null
          grade?:
            | "SSSSS"
            | "SSSS"
            | "SSS"
            | "SS"
            | "A"
            | "B"
            | "C"
            | "D"
            | "E"
            | "F"
            | "G"
            | "H"
            | "I"
            | "J"
            | "K"
            | "L"
            | "M"
            | "N"
            | "O"
            | "P"
            | "Q"
            | "R"
            | "S"
            | "T"
            | "U"
            | "V"
            | "W"
            | "X"
            | "Y"
            | "Z"
            | null
          id?: number
          imageUrl?: string | null
          isActive?: boolean | null
          isAvailable?: boolean | null
          msrp?: number | null
          price: number
          productDesc: string
          productName: string
          quantity?: number | null
          shortDesc?: string | null
          size?: string | null
          sku?: string | null
          slug?: string | null
          soldQuantity?: number | null
          updatedAt: string
          weight?: number | null
          weightUnit?: string | null
        }
        Update: {
          categoryId?: number
          createdAt?: string
          features?: Json | null
          grade?:
            | "SSSSS"
            | "SSSS"
            | "SSS"
            | "SS"
            | "A"
            | "B"
            | "C"
            | "D"
            | "E"
            | "F"
            | "G"
            | "H"
            | "I"
            | "J"
            | "K"
            | "L"
            | "M"
            | "N"
            | "O"
            | "P"
            | "Q"
            | "R"
            | "S"
            | "T"
            | "U"
            | "V"
            | "W"
            | "X"
            | "Y"
            | "Z"
            | null
          id?: number
          imageUrl?: string | null
          isActive?: boolean | null
          isAvailable?: boolean | null
          msrp?: number | null
          price?: number
          productDesc?: string
          productName?: string
          quantity?: number | null
          shortDesc?: string | null
          size?: string | null
          sku?: string | null
          slug?: string | null
          soldQuantity?: number | null
          updatedAt?: string
          weight?: number | null
          weightUnit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Product_categoryId_fkey"
            columns: ["categoryId"]
            referencedRelation: "Category"
            referencedColumns: ["id"]
          }
        ]
      }
      ProductImage: {
        Row: {
          createdAt: string
          id: number
          imageUrl: string
          productId: number
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id?: number
          imageUrl: string
          productId: number
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: number
          imageUrl?: string
          productId?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "ProductImage_productId_fkey"
            columns: ["productId"]
            referencedRelation: "Product"
            referencedColumns: ["id"]
          }
        ]
      }
      ProductInventory: {
        Row: {
          createdAt: string
          id: number
          productId: number
          quantity: number
          reStockLevel: number | null
          status:
            | "InStock"
            | "OutOfStock"
            | "Low"
            | "Pending"
            | "Ordered"
            | "Shipped"
            | "Arrived"
            | "Cancelled"
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id?: number
          productId: number
          quantity?: number
          reStockLevel?: number | null
          status:
            | "InStock"
            | "OutOfStock"
            | "Low"
            | "Pending"
            | "Ordered"
            | "Shipped"
            | "Arrived"
            | "Cancelled"
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: number
          productId?: number
          quantity?: number
          reStockLevel?: number | null
          status?:
            | "InStock"
            | "OutOfStock"
            | "Low"
            | "Pending"
            | "Ordered"
            | "Shipped"
            | "Arrived"
            | "Cancelled"
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "ProductInventory_productId_fkey"
            columns: ["productId"]
            referencedRelation: "Product"
            referencedColumns: ["id"]
          }
        ]
      }
      Promotion: {
        Row: {
          createdAt: string
          endDate: string
          id: number
          isActive: boolean
          promotionDesc: string
          promotionName: string
          promotionRate: number
          startDate: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          endDate: string
          id?: number
          isActive: boolean
          promotionDesc: string
          promotionName: string
          promotionRate: number
          startDate: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          endDate?: string
          id?: number
          isActive?: boolean
          promotionDesc?: string
          promotionName?: string
          promotionRate?: number
          startDate?: string
          updatedAt?: string
        }
        Relationships: []
      }
      PromotionCategory: {
        Row: {
          categoryId: number
          createdAt: string
          id: number
          promotionId: number
          updatedAt: string
        }
        Insert: {
          categoryId: number
          createdAt?: string
          id?: number
          promotionId: number
          updatedAt: string
        }
        Update: {
          categoryId?: number
          createdAt?: string
          id?: number
          promotionId?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "PromotionCategory_categoryId_fkey"
            columns: ["categoryId"]
            referencedRelation: "Category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "PromotionCategory_promotionId_fkey"
            columns: ["promotionId"]
            referencedRelation: "Promotion"
            referencedColumns: ["id"]
          }
        ]
      }
      Role: {
        Row: {
          createdAt: string
          id: number
          name: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id?: number
          name: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: number
          name?: string
          updatedAt?: string
        }
        Relationships: []
      }
      RolePermission: {
        Row: {
          createdAt: string
          id: number
          permissionId: number
          roleId: number
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id?: number
          permissionId: number
          roleId: number
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: number
          permissionId?: number
          roleId?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "RolePermission_permissionId_fkey"
            columns: ["permissionId"]
            referencedRelation: "Permission"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "RolePermission_roleId_fkey"
            columns: ["roleId"]
            referencedRelation: "Role"
            referencedColumns: ["id"]
          }
        ]
      }
      ShippingDetail: {
        Row: {
          createdAt: string
          estimatedArrival: string
          id: number
          orderId: string
          shippingAddressId: number
          shippingMethodId: number
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          estimatedArrival: string
          id: number
          orderId: string
          shippingAddressId: number
          shippingMethodId: number
          updatedAt: string
        }
        Update: {
          createdAt?: string
          estimatedArrival?: string
          id?: number
          orderId?: string
          shippingAddressId?: number
          shippingMethodId?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "ShippingDetail_orderId_fkey"
            columns: ["orderId"]
            referencedRelation: "Order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ShippingDetail_shippingAddressId_fkey"
            columns: ["shippingAddressId"]
            referencedRelation: "Address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ShippingDetail_shippingMethodId_fkey"
            columns: ["shippingMethodId"]
            referencedRelation: "ShippingMethod"
            referencedColumns: ["id"]
          }
        ]
      }
      ShippingMethod: {
        Row: {
          createdAt: string
          id: number
          name: string
          price: number
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: number
          name: string
          price: number
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: number
          name?: string
          price?: number
          updatedAt?: string
        }
        Relationships: []
      }
      SocialLink: {
        Row: {
          createdAt: string
          id: number
          socialProvider: string
          socialUrl: string
          updatedAt: string
          userProfileId: number
        }
        Insert: {
          createdAt?: string
          id?: number
          socialProvider: string
          socialUrl: string
          updatedAt: string
          userProfileId: number
        }
        Update: {
          createdAt?: string
          id?: number
          socialProvider?: string
          socialUrl?: string
          updatedAt?: string
          userProfileId?: number
        }
        Relationships: [
          {
            foreignKeyName: "SocialLink_userProfileId_fkey"
            columns: ["userProfileId"]
            referencedRelation: "UserProfile"
            referencedColumns: ["id"]
          }
        ]
      }
      User: {
        Row: {
          balance: number
          createdAt: string
          email: string
          id: number
          preference: Json | null
          updatedAt: string
        }
        Insert: {
          balance?: number
          createdAt?: string
          email: string
          id?: number
          preference?: Json | null
          updatedAt: string
        }
        Update: {
          balance?: number
          createdAt?: string
          email?: string
          id?: number
          preference?: Json | null
          updatedAt?: string
        }
        Relationships: []
      }
      UserAddress: {
        Row: {
          addressId: number
          createdAt: string
          id: number
          isDefault: boolean
          updatedAt: string
          userProfileId: number
        }
        Insert: {
          addressId: number
          createdAt?: string
          id?: number
          isDefault?: boolean
          updatedAt: string
          userProfileId: number
        }
        Update: {
          addressId?: number
          createdAt?: string
          id?: number
          isDefault?: boolean
          updatedAt?: string
          userProfileId?: number
        }
        Relationships: [
          {
            foreignKeyName: "UserAddress_addressId_fkey"
            columns: ["addressId"]
            referencedRelation: "Address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "UserAddress_userProfileId_fkey"
            columns: ["userProfileId"]
            referencedRelation: "UserProfile"
            referencedColumns: ["id"]
          }
        ]
      }
      UserProfile: {
        Row: {
          bio: string | null
          birthDate: string | null
          createdAt: string
          firstName: string | null
          gender: "MALE" | "FEMALE" | "NONBINARY" | null
          id: number
          lastName: string | null
          phone: string | null
          photo: string | null
          updatedAt: string
          userId: number
        }
        Insert: {
          bio?: string | null
          birthDate?: string | null
          createdAt?: string
          firstName?: string | null
          gender?: "MALE" | "FEMALE" | "NONBINARY" | null
          id?: number
          lastName?: string | null
          phone?: string | null
          photo?: string | null
          updatedAt: string
          userId: number
        }
        Update: {
          bio?: string | null
          birthDate?: string | null
          createdAt?: string
          firstName?: string | null
          gender?: "MALE" | "FEMALE" | "NONBINARY" | null
          id?: number
          lastName?: string | null
          phone?: string | null
          photo?: string | null
          updatedAt?: string
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "UserProfile_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      UserReview: {
        Row: {
          authorId: number
          createdAt: string
          id: number
          message: string
          productId: number
          rating: number
          title: string
          updatedAt: string
        }
        Insert: {
          authorId: number
          createdAt?: string
          id?: number
          message: string
          productId: number
          rating: number
          title: string
          updatedAt: string
        }
        Update: {
          authorId?: number
          createdAt?: string
          id?: number
          message?: string
          productId?: number
          rating?: number
          title?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "UserReview_authorId_fkey"
            columns: ["authorId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "UserReview_productId_fkey"
            columns: ["productId"]
            referencedRelation: "Product"
            referencedColumns: ["id"]
          }
        ]
      }
      UserRole: {
        Row: {
          createdAt: string
          id: number
          roleId: number
          updatedAt: string
          userId: number
        }
        Insert: {
          createdAt?: string
          id?: number
          roleId: number
          updatedAt: string
          userId: number
        }
        Update: {
          createdAt?: string
          id?: number
          roleId?: number
          updatedAt?: string
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "UserRole_roleId_fkey"
            columns: ["roleId"]
            referencedRelation: "Role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "UserRole_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      AccessType: "READ" | "WRITE" | "UPDATE" | "DELETE"
      Gender: "MALE" | "FEMALE" | "NONBINARY"
      Grade:
        | "SSSSS"
        | "SSSS"
        | "SSS"
        | "SS"
        | "A"
        | "B"
        | "C"
        | "D"
        | "E"
        | "F"
        | "G"
        | "H"
        | "I"
        | "J"
        | "K"
        | "L"
        | "M"
        | "N"
        | "O"
        | "P"
        | "Q"
        | "R"
        | "S"
        | "T"
        | "U"
        | "V"
        | "W"
        | "X"
        | "Y"
        | "Z"
      InventoryStatus:
        | "InStock"
        | "OutOfStock"
        | "Low"
        | "Pending"
        | "Ordered"
        | "Shipped"
        | "Arrived"
        | "Cancelled"
      OrderStatusType:
        | "Pending"
        | "Processing"
        | "Shipped"
        | "Delivered"
        | "Cancelled"
      PaymentType: "CASH" | "DEBIT" | "CREDIT" | "BITCOIN" | "PAYPAL" | "AFFIRM"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
