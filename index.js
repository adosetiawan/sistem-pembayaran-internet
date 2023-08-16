const users = [
    {
        id:1,
        email:'adoraziq@gmail.com',
        user_name:'ado',
        password:'ado123'
    }
]

const userAuth = (email,password)=>{
    const user = users.find(user=>{
        if(user.email == email && user.password == password){
            return user;
        }
    });
    
    let message = null;
        
    if(!user){
        message = `Login gagal silahkan cek email dan passwordnya`;
    }else{
        message = `Login berhasil selamat datang ${user.user_name}`;
    }
    console.log(message);
}

userAuth('adoraziq@gmail.com','ado123');