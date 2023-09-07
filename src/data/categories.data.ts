import { Category } from "@prisma/client";

const categories: Partial<Category>[]=[
    {
        id:1,
        categoryName:"Magical goods",
        categoryDesc: "magical goods of the multi-verse",
        slug:"/magical-goods",
    },   
    {
        id:2,
        categoryName: "Wearable",
        categoryDesc: "Wearable articles",
        slug: "/wearable-articles",
    },
    {
        id:3,
        categoryName: "Stationary",
        categoryDesc: "Stationary objects",
        slug: "/stationary-objects",
    },
    {
        id:4,
        categoryName: "Consumable",
        categoryDesc: "stock of consumables",
        slug: "/consumable-concoctions",
    },
    {
        id:5,
        categoryName: "Hammer",
        categoryDesc: "Collection of hammers",
        slug:"hammer-collection",
        parentCategoryId:35
    },
    {
        id:6,
        categoryName: "Vessels, Vehicles, Mechs, and Machinery",
        categoryDesc: "catalog of vehicles",
        slug: "/vessels-vehicles-mechs-and-machinery",
    },
    {
        id:7,
        categoryName: "Gears, Tools, and Equipment",
        categoryDesc: "gear, devices, tools, and equipment",
        slug: "/gear-devices-tools-and-equipment",
    },
    {
        id: 8,
        categoryName: "Dimensional Items",
        categoryDesc: "Items related to alternate dimensions",
        slug: "/dimensional-items"
    },
    {
        id: 9,
        categoryName: "Mystical Beasts",
        categoryDesc: "Beasts with mystical properties",
        slug: "/mystical-beasts",
        parentCategoryId:31
    },
    {
        id: 10,
        categoryName: "AI & Robotics",
        categoryDesc: "Artificial Intelligence and robotics",
        slug: "/ai-robotics"
    },
    {
        id: 11,
        categoryName: "Futuristic Weapons",
        categoryDesc: "Weapons from the future",
        slug: "/futuristic-weapons",
        parentCategoryId:33
    },
    {
        id: 12,
        categoryName: "Spells & Runes",
        categoryDesc: "Magical spells and runes",
        slug: "/spells-runes"
    },
    {
        id: 13,
        categoryName: "Alien Artifacts",
        categoryDesc: "Artifacts of alien origin",
        slug: "/alien-artifacts"
    },
    {
        id: 14,
        categoryName: "Time Travel Devices",
        categoryDesc: "Devices used for time travel",
        slug: "/time-travel-devices"
    },
    {
        id: 15,
        categoryName: "Planetary Resources",
        categoryDesc: "Resources found on other planets",
        slug: "/planetary-resources"
    },
    {
        id: 16,
        categoryName: "Supernatural Accessories",
        categoryDesc: "Accessories with supernatural properties",
        slug: "/supernatural-accessories"
    },
    {
        id: 17,
        categoryName: "Supernatural Items",
        categoryDesc: "Items with supernatural properties",
        slug: "/supernatural-items"
    },
    {
        id: 18,
        categoryName: "Supernatural Weapons",
        categoryDesc: "Weapons with supernatural properties",
        slug: "/supernatural-weapons"
    },
    {
        id: 19,
        categoryName: "Sacred Relics",
        categoryDesc: "Relics with sacred properties",
        slug: "/sacred-relics"
    },
    {
        id: 20,
        categoryName: "Mystical Plants",
        categoryDesc: "Plants with mystical properties",
        slug: "/mystical-plants"
    },
    {
        id: 21,
        categoryName: "Sci-fi Furniture",
        categoryDesc: "Furniture with a science fiction theme",
        slug: "/sci-fi-furniture",
        parentCategoryId:4
    },
    {
        id: 22,
        categoryName: "Cybernetics & Augmentations",
        categoryDesc: "Cybernetic enhancements and augmentations",
        slug: "/cybernetics-augmentations"
    },
    {
        id: 23,
        categoryName: "Quantum Devices",
        categoryDesc: "Devices that make use of quantum mechanics",
        slug: "/quantum-devices",
        parentCategoryId:37
    },
    {
        id: 24,
        categoryName: "Magic Artifacts",
        categoryDesc: "Artifacts with magical properties",
        slug: "/magic-artifacts",
        parentCategoryId:28
    },
    {
        id: 25,
        categoryName: "Technological Gadgets",
        categoryDesc: "Advanced technological devices",
        slug: "/technological-gadgets",
        parentCategoryId:5
    },
    {
        id: 26,
        categoryName: "Potions & Elixirs",
        categoryDesc: "Liquid substances with magical properties",
        slug: "/potions-elixirs",
        parentCategoryId:4
    },
    {
        id: 27,
        categoryName: "Spaceships",
        categoryDesc: "Vehicles that travel through space",
        slug: "/spaceships",
        parentCategoryId:6
    },
    {
        id: 28,
        categoryName: "Survival Gear",
        categoryDesc: "Gear used for survival in extreme conditions",
        slug: "/survival-gear",
        parentCategoryId: 7
    },
    {
        id: 29,
        categoryName: "Plants",
        categoryDesc: "herbs and exotic plants",
        slug: "/herbs-and-exotic-plants"
    },
    {
        id:30,
        categoryName: "Artifacts and Relics",
        categoryDesc: "Artifacts and relics of the universe",
        slug: "/other-items"
    },
    {
        id: 31,
        categoryName: "Animals and Creatures",
        categoryDesc: "Exotic creatures and animals of the multi-verse",
        slug: "/animals-and-creatures",
    },
    {
        id:32,
        categoryName: "Crafting Tools",
        categoryDesc: "Crafting",
        slug: "/crafting",
        parentCategoryId:7
    },
    {
        id:33,
        categoryName:"Weapon and Arms",
        categoryDesc: "Weapons of the multi-verse",
        slug:"/weapon-and-arms",
    },
    {
        id:34,
        categoryName: "Books, Scrolls, and Scripts",
        categoryDesc: "books, scrolls, and scripts",
        slug: "/books-scrolls-and-scripts",
    },
    {
        id:35,
        categoryName: "Melee",
        categoryDesc: "Close-range weapons",
        slug: "/melee-weapons",
        parentCategoryId:33,
    },
    {
        id:36,
        categoryName: "Range",
        categoryDesc: "projectile weapons",
        slug: "/ranged-weapons",
        parentCategoryId:33
    },
    {
        id:37,
        categoryName:"Tech and Devices",
        categoryDesc: "Technology and devices",
        slug: "/tech-and-devices",
    },
    {
        id:38,
        categoryName: "Pistol",
        categoryDesc: "Collection of pistols",
        slug:"/pistol-collection",
        parentCategoryId:36
    },
    {
        id: 39,
        categoryName: "Power Suits & Armor",
        categoryDesc: "Powerful suits and armors",
        slug: "/power-suits-armor",
        parentCategoryId:2
    },
]

export default categories