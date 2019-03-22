import React, { Component } from 'react';
import { BrowserRouter ,Route , NavLink } from 'react-router-dom'
// import s from './footer.css'

class TopInfoPole extends  Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="block_info_pole_top_users">
                    <a href="#one">
                        <div className="block_info_create_stick" id="one">
                        <p>
                             Наши лучшие
                              <br/>
                              художники
                              <br/>
                              стикеров
                        </p>
                        </div>

                    </a>
                    <a href="#two">
                        <div className="block_info_top_rolick" id="two">
                        <p>
                             Самые
                              <br/>
                              популярные
                              <br/>
                              ролики
                        </p>
                        </div>
                        
                    </a>
            </div>
        )
    }
}
export default TopInfoPole