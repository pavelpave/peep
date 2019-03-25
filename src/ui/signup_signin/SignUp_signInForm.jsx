import React , {Component} from 'react'
import Registration from './Registration'
import SignIn from './SignIn'
import './sininup.css'
class SignInSignUpForm extends Component {
    constructor(porps){
        super(porps)
        this.state = this.props.state
        this.click_loginSinIn = this.click_loginSinIn.bind(this)
    }
    click_loginSinIn(e){
        // debugger
        console.log(e.target.id)
        if(this.state.regForm.vibor){
            if(e.target.id === '1'){
            this.state.regForm.vibor = false
            this.setState({regForm: this.state.regForm})
            }
        }else{
            if(e.target.id === '0'){
           this.state.regForm.vibor = true
           this.setState({regForm: this.state.regForm})
            }
        }
    }
    render(){
        return(
            <div className="sec__body_sinin">
                <div className="body__wrap_sininup"  id="Block_id_linck">
                    <div className="block_registr_siunin">
                        <div className='fon_reg_block'></div>
                        <div className='sinIn_block_reg'>
                          <span id="1" className="login_in_block" onClick={this.click_loginSinIn}>Вход</span>
                          <span id="0" className="registration_block"onClick={this.click_loginSinIn}>Регистрация</span>
                            
                        </div>
                        {/* <Registration  /> */}
                        {this.state.regForm.vibor ? <Registration/> : <SignIn/>}
                    </div>
                </div>
            </div>
        )
    }
}
export default SignInSignUpForm