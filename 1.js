const user = {
    username: "hello",
    welcome: function (){
        console.log(`welcome ${this.username}`)
    }
}
console.log(user.username)
user.welcome()
//this is used to refer to the same object ..if it is nit applied it searches globally instead of inside the object