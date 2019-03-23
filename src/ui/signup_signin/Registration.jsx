import React ,{Component} from 'react'
import Capcha from './capcha'
export default function Registration (props){
    return(
        <div className="block_registr_siunin">
         <div className='fon_reg_block'></div>
            <div className='sinIn_block_reg'>
           
                <span className="login_in_block">Вход</span>
                <span className="registration_block">Регистрация</span>
                
            </div>
            <form className="form_block_registrations">
                <div className="inp_log_wrapp">
                     <input className="input_login" type="text"/>
                </div>
                <div className="inp_pass_wrapp">
                   <input className="input_pass" type="password" />
                </div>
                <Capcha />

            </form>
        </div>
    )
}