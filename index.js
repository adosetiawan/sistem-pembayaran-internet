//1 variabel user ditambah tanggal lahir ,alamat, gender ,no_hp
//2 User Authnya bisa mengecek email atau no_hp dan passsword
//3 Handle ditambahkan jika emali atau no_hp tidak ada tampil user belum terdaftar
//4 jika password yang salah bisa mengeluarkan pesan password salah
//5 jika waktu buat user bisa ditambahkan handle id email harus uniq

const users = [
  {
    id: 12,
    email: "adoraziq@gmail.com",
    user_name: "ado",
    password: "ado123",
    birth_day: "14-07-1999",
    address: "Tasikmalaya",
    gender: "male",
    telp: "085320058821",
  },
];

const userAuth = (email, password) => {
  let message = null;
  if(email==null||email==''){
   return console.log('Email atau nomor hp tidak boleh kosong');
  }
  if(password==null||password==''){
    return console.log('Password tidak boleh kosong');
   }
  const cekEmailhp = users.find(
    (user) => user.email == email || user.telp == email
  );
  if (cekEmailhp) {
    const user = users.find((user) => user.password == password);
    if (!user) {
      message = `Password Salah `;
    } else {
      message = `Login berhasil selamat datang ${user.user_name}`;
    }
  } else {
    message = `Email atau nomor hp tidak terdaftar`;
  }
  console.log(message);
};

const createUser = (user) => {
  const fIndId = users.find((cekUsers) => cekUsers.id == user.id);
  if (!fIndId) {
  const fIEmail = users.find((cekUsers) => cekUsers.email == user.email);
    if(!fIEmail){
        if(users.push(user)){
            console.log("User berhasil ditambahkan");
        }else{
            console.log("User gagal ditambahkan");
        }
    }else{
        console.log("Email Harus Uniq");
    }
  } else {
    console.log("Id Harus Uniq");
  }
};

userAuth("085320058821", "ado123");

const dataUser = {
  id: "2",
  email: "dimaspraditya@gmail.com",
  password: "dimas123",
  user_name: "dimas",
  birth_day: "18-09-2001",
  address: "Kebumen",
  gender: "gender",
  telp: "091762132131212",
};
createUser(dataUser);
console.log(users);
