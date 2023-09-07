import client from "../../../lib/client";
import { Login, User } from "@prisma/client";

const createNewUser = async (user: Partial<User>, login: Partial<Login>) => {
    const { email } = user;
    const { username, hashedPassword } = login;

    if (!email) throw new Error('Invalid email');
    if (!(username && hashedPassword)) throw new Error('Invalid login credentials');
    const isNewUser = await client.user.findUnique({
        where:{
            email
        }
    })
    if(isNewUser) throw new Error('Email is already used')
    
    const userFields = {
      data: {
        email,
        cart: { create: {} },
        ...(username && hashedPassword ? { login: { create: { username, hashedPassword } } } : {}),
      },
    };
    
    try {
        const newUser = await client.user.create(userFields);
        console.log(newUser);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(`Error creating new user: ${error.message}`);
          console.error(error);
          console.trace(error);
        }
      }
  }

export default createNewUser;
