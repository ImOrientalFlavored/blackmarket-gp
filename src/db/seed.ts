import prisma from '../lib/client';
import { Prisma } from '@prisma/client';
//import { Login, User } from '@prisma/client';
//import createNewUser from '../back_api/v1/services/createNewUser';
//import { Role } from '@prisma/client';
//import users from '../data/users.data';
//import logins from '../data/logins.data';
//import roles from 'data/roles.data';
//import permissions from 'data/permissions.data';
//import categories from 'data/categories.data';
import products from 'data/products.data';
//import grantPremiumRoleTo from 'back_api/v1/services/grantPremiumAccess';
//const seedUserData = users.map((user, index) => [user, logins[index]]); 


async function main() {

    const createdProducts = await Promise.all(products.map(async (product) => {
        const {
          productName,
          productDesc,
          shortDesc,
          price,
          msrp,
          grade,
          quantity,
          soldQuantity,
          slug,
          size,
          weight,
          weightUnit,
          isActive,
          isAvailable,
          sku,
          imageUrl,
          features,
        } = product as Prisma.ProductCreateInput;
        const createdProduct = await prisma.product.create({
            data: {
              productName,
              productDesc,
              shortDesc,
              price,
              msrp,
              grade,
              quantity,
              soldQuantity,
              slug,
              size,
              weight,
              weightUnit,
              isActive,
              isAvailable,
              sku,
              imageUrl,
              features,
                category: {
                    connect: {
                        id: product.categoryId
                    }
                }
            }
        });
        return createdProduct;
      }));
      console.log(createdProducts);
    // const createdCategories = await Promise.all(categories.map(async (category) =>{
    //   const { categoryName, categoryDesc, slug} = category as Prisma.CategoryCreateInput; 
    //     const createdCategory = await prisma.category.create({
    //         data: {
    //             id:category.id,
    //             categoryName,
    //             categoryDesc,
    //             slug,
    //             parentCategoryId: category.parentCategoryId,
    //         }
    //     });
    //     return createdCategory;
    // }));
    // console.log(createdCategories);
    // const createdPermissions = await Promise.all(permissions.map(async (permission) =>{ 
    //   const {resource, accessType} = permission as Prisma.PermissionCreateInput;
    //   try {
    //       const createdPermission =  await prisma.permission.create({
    //         data:{resource,accessType}
    //       });
    //       console.log(createdPermission);
    //       return createdPermission;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }));
      
    // console.log(createdPermissions);
    
  // const createdUsers = await Promise.all(seedUserData.map(async (data) => {
  //   const [user, login] = data as [Partial<User>, Partial<Login>];
  //   try {
  //       const query = await createNewUser(user, login);
  //       console.log(query);
  //       return query
  //   } catch (error) {
  //       console.error(error)      
  //   }
  // }));
  // console.log(createdUsers);

    // const oversizedHammer = await prisma.category.create({
  //   data: {
  //     categoryName: "Hammer",
  //     categoryDesc: "Collection of hammers",
  //   },
  // });

  // const giganticHammer = await prisma.product.create({
  //   data: {
  //     productName: "Gigantic Hammer",
  //     productDesc: "An impractically large hammer",
  //     shortDesc: "Massive hammer",
  //     grade: "X",
  //     price: 2500.00,
  //     msrp: 2700.00,
  //     size: "10 meters",
  //     weight: 250.00,
  //     weightUnit: "kg",
  //     features: {color: "silver",
  //                material: "Unobtainium",
  //                rating:{
  //                 average:3.8,
  //                 count:4295
  //                }
  //               },
  //     imageUrl: "http://example.com/gigantic-hammer.jpg",
  //     slug: "gigantic-hammer",
  //     categoryId: oversizedHammer.id,
  //   },
  // });
  
  // await prisma.productInventory.create({
  //   data: {
  //     quantity: 5,
  //     status: "InStock",
  //     productId: giganticHammer.id,
  //   },
  // });

  // await prisma.productImage.create({
  //   data: {
  //     imageUrl: "http://example.com/gigantic-hammer-detail.jpg",
  //     productId: giganticHammer.id,
  //   },
  // });
  //< Partial<User> >< Partial<Login> >
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
