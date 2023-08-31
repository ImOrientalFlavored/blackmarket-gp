import prisma from './client';

async function main() {
  const oversizedHammer = await prisma.category.create({
    data: {
      categoryName: "Hammer",
      categoryDesc: "Collection of hammers",
    },
  });

  const giganticHammer = await prisma.product.create({
    data: {
      productName: "Gigantic Hammer",
      productDesc: "An impractically large hammer",
      shortDesc: "Massive hammer",
      grade: "X",
      price: 2500.00,
      msrp: 2700.00,
      size: "10 meters",
      weight: 250.00,
      weightUnit: "kg",
      features: {color: "silver",
                 material: "Unobtainium",
                 rating:{
                  average:3.8,
                  count:4295
                 }
                },
      imageUrl: "http://example.com/gigantic-hammer.jpg",
      slug: "gigantic-hammer",
      categoryId: oversizedHammer.id,
    },
  });
  
  await prisma.productInventory.create({
    data: {
      quantity: 5,
      status: "inStock",
      productId: giganticHammer.id,
    },
  });

  await prisma.productImage.create({
    data: {
      imageUrl: "http://example.com/gigantic-hammer-detail.jpg",
      productId: giganticHammer.id,
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
