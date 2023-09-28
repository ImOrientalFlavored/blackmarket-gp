
type RegisterUserData = {
    email: string,
    username: string,
    password: string
}

export default async function registerUser({email, username, password}: RegisterUserData){
    //const {email, username, password} = registerData;
    try{
        const user = await fetch('http://localhost:3000/api/v1/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data:{
                    username,
                    email,
                    password,
                }
            })})
            return user.json()
    }catch(error){
        console.log(error);
    }
}