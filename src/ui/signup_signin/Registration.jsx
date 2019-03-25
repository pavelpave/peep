import React  from 'react'
import Capcha from './capcha'
export default function Registration (props){
    return(
       
        
            <form className="form_block_registrations">
                <div className="inp_log_wrapp">
                     <input className="input_login" type="text"/>
                </div>
                <div className="inp_pass_wrapp">
                   <input className="input_pass" type="password" />
                </div>
                <Capcha />
                <button className="but_registr">Зарегистрироватся</button>
            </form>
        
    )
}