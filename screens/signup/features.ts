export const createUser = async (firstname?:string ,lastname?:string, profileId?:string | null) => {
try {
 const res =  await fetch(`https://purring-kind-hippodraco.glitch.me/createuser/8`,{
        method:"post",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            _type:"people",
            firstname:firstname,
            lastname:lastname,
            profileId:profileId,
            
        })
    }).then((res) => res.json()).then((res) => console.log(res))
} catch (error) {
    
}
}