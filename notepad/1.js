let data = {
    "username" : "park",
    "worked" : "123"
}
for(key in data){
    console.log(key, data[key]);
    window.localStorage.setItem(key , data[key]);
}