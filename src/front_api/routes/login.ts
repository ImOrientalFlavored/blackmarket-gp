type LoginData = {
    username: string,
    password: string
}

export default async function loginUser({username, password}: LoginData){
    //const {email, username, password} = registerData;
    try{
        const user = await fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data:{
                    username,
                    password,
                }
            })})
            return user.json()
    }catch(error){
        console.log(error);
    }
}