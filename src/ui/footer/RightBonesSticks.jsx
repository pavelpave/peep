import React ,{Component} from 'react'
// import "./img/5761ba6c7938615555c037d1.png"
export default class RightBonesSticks extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="block_bonus_sticks">
                <ul>
                    <li><a href="#" id="Google_bonus_stick"></a></li>
                   <li> <a href="#" id="Instagram_bonus_stick"></a></li>
                   <li> <a href="#" id="twiter_bonus_stick"></a></li>
                    <li><a href="#" id="linktdin_bonus_stick"></a></li>
                   <li> <a href="#" id="vk_bonus_stick"></a></li>
                </ul> 
                <p>
                    Подписывайтесь 
                    <br/>чтоб получить 
                    <br/>уникальный набор 
                    <br/>стикеров
                </p>
            </div>
        )
    }
}