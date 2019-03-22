import React , {Component} from "react"

export default class BottomSide extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="footer__bottom_side">
                <p>Все права защищены <a href="#">Лицензионное соглашение</a></p>
                <span className="aftor_sites"><a href="#">афтор проэкта <br/>Pavel Puhov</a></span>
            </div>
        )
    }
}