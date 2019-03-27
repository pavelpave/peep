import React , {Component} from 'react'
import Registration from './Registration'
import SignIn from './SignIn'
import './sininup.css'
// import i from './img/фон1.png'
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
                          <span id="1" className="login_in_block" onClick={this.click_loginSinIn} style={{color:this.state.regForm.vibor === false ? '#38569d':'rgb(146, 146, 146)'}}>Вход</span>
                          <span id="0" className="registration_block"onClick={this.click_loginSinIn} style={{color:this.state.regForm.vibor ? '#38569d':'rgb(146, 146, 146)'}}>Регистрация</span>
                            
                        </div>
                        {/* <Registration  /> */}
                        {this.state.regForm.vibor ? <Registration/> : <SignIn/>}
                    </div>
                    <div className="block_slider" >
                            <div className="one_slide block_slid_hover" >
                                <div className="one_card_out Out_clas"><p>Общяйся и будь <br />
                                                                        вкурсе всего <br/>
                                                                        самого интересного
                                </p></div>
                            </div>
                            <div className="two_slide block_slid_hover" >
                                 <div className="two_card_out Out_clas">
                                    <h3 className='two_block_h3'>Создавай интересные стикеры <br/>
                                                                 и стань лучшим <br />
                                                                 среди наших авторов
                                                                  </h3>
                                    <div className='block_two_image'></div>
                                 
                                 </div>
                            </div>
                            <div className="three_slide block_slid_hover" >

                            </div>
                            <div className="foor_slide block_slid_hover" >

                            </div>
                            <div className="six_slide block_slid_hover" >

                            </div>
                            <div className="seven_slide block_slid_hover" >

                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignInSignUpForm