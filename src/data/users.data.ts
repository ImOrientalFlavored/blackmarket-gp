import { User } from "@prisma/client";
import current from "../utils/date/date";

const users: Partial<User>[]=[ 
    {
        id: 0,
        email: "AdmiralOlgflom@hyperion.empire",
        createdAt: current,
        updatedAt: undefined,
        preference: {},
    },
    {
        id: 1,
        email: "Optimus@autobot.cyb",
        createdAt: current,
        updatedAt: undefined,
        preference: {},
    },
    {
        id: 2,
        email: "LordMega@decepticon.cyb",
        createdAt: current,
        preference: {},
    },
    {
        id: 3,
        email: "Joki@asgard.marv",
        updatedAt: undefined,
        preference: {},
    },
    {
        id: 4,
        email: "SpaceLord@marvel.gg",
        createdAt: current,
        updatedAt: undefined,
        preference: {},
    },
    {
        email: "Zuk.Clieblerd@tinker.gob",
        preference: {},
    },
    {
        email: "100kWanderer@Stormlight.edu",
        preference: {},
    },
    {
        email: "MoonSheepMatriarch@Solymus.sec",
        preference: {},
    },
    {
        email: "EastBlackTurtle@blue.sea",
        preference: {},
    },
    {
        email: "BellessCinder@Mythion.dom",
        preference: {},
    },
]

export default users;