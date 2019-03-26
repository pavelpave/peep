import React  from 'react'
function SignIn (props){
    console.log('123')
    function obrSIGNIN (){
      return false
    }
    return(
     
          <form className="vhod" onSubmit={obrSIGNIN}>
              <div className="inp_log_wrapp">
                     <input className="input_login_in" type="text" required/>
                </div>
                <div className="inp_pass_wrapp">
                   <input className="input_pass_in" type="password" required />
                </div>
                <div className="wrap_autoIn">
                    <input type="checkbox" class="checkbox" id="checkbox" />
                    <label for="checkbox">Автоматически входить  в систему</label>
                </div>
              <button className="sign_in">Войти</button>
          </form>
        
    )
}
export default SignIn