import React , {Component} from 'react'

export default class RightShopPole extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="block_footer_shoop">
                <p>
                    Магазин стикеров
                </p>
                <ul>
                    <a href="#"><li>
                        
                    </li></a>
                    <a href="#"><li>
                        
                    </li></a>
                    <a href="#"><li>
                        
                    </li></a>
                 
                </ul>
                <button className="block_shoop_prev"></button>
                <button className="block_shoop_next"></button>
            </div>
        )
    }
}