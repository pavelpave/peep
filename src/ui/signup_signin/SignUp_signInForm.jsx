import React , {Component} from 'react'
import Registration from './Registration'
import './sininup.css'
class SignInSignUpForm extends Component {
    constructor(porps){
        super(porps)
    }
    render(){
        return(
            <div className="sec__body_sinin">
                <div className="body__wrap_sininup"  id="Block_id_linck">
                    <Registration  />
                </div>
            </div>
        )
    }
}
export default SignInSignUpForm