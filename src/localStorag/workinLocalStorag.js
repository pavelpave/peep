function inlocalStorag (){
    let i = JSON.stringify( {"login":"log" , "pass":"123" , "urlImg" :"./img/jess-watters-559478-unsplash.jpg"})
    // localStorage.setItem("loginIn",i);

    let LoginInLocal = localStorage.getItem("loginIn")
    LoginInLocal = JSON.parse(LoginInLocal)
    // console.log(LoginInLocal)
         return (LoginInLocal)
}
export default inlocalStorag