import client from "../../../lib/client";
import { Cart, Login, Order, User, UserProfile, UserRole } from "@prisma/client";

const createNewUser = async (user: Partial<User>, login: Partial<Login>) => {
    const { email } = user;
    const { username, password } = login;

    if (!email) throw new Error('Invalid email');
    if (!(username && password)) throw new Error('Invalid login credentials');
    const isNewUser = await client.user.findUnique({
        where:{
            email
        }
    })
    if(isNewUser) throw new Error('Email is already used')
    
    const profile = {} as UserProfile;
    const orders = [] as Order[];
    const cart = {} as Cart;

    const userFields = {
      data: {
        email,
        cart: { create: cart },
        orders: { create: orders },
        profile: { create: profile },
        ...(username && password ? { login: { create: { username, password } } } : {}),
      },
    };
    
    try {
        const newUser = await client.user.create(userFields);
        console.log(newUser);
        return newUser
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(`Error creating new user: ${error.message}`);
          console.error(error);
          console.trace(error);
        }
      }
  }

export default createNewUser;
