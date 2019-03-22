import React, { Component } from 'react';
import TopInfoPole from "./TopInfoPole"
import RightShopPole from "./RightShopPole"
import RightBonesSticks from "./RightBonesSticks"
import BottomSide from "./BottomSide"
import s from './footer.css'
class FooterComponent extends  Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='FOot'>
               <TopInfoPole  />
               <RightShopPole />
               <RightBonesSticks />
               <BottomSide />
            </div>
        )
    }
}
export default FooterComponent