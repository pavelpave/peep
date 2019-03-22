import React  from 'react';
import { NavLink } from 'react-router-dom'
function signIn(props){
    if (props.inlocalStorag() !== null){
        function rec(){
            let asd = require(`${props.inlocalStorag()['urlImg']}`)
            return asd
        }
        return(
            <div className="heder__block__akk">
					<p className="heder__block__name"><NavLink to='/'>{props.inlocalStorag()['login']}</NavLink></p>
					<div className="heder__block__img">
						<div className="block__img" style={{backgroundImage:`url(${rec()})`}}></div>
					</div>
				</div>
        )
    }else{
        return(
            <div className="Registratiom_Link">
                <p><NavLink to="/signInUp#Block_id_linck">Вход и регистрация</NavLink> </p>
            </div>
        )
    }
       
}
export default signIn