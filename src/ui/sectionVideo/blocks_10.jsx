import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
// import i from '../sectionVideo/img/qwdq.png'
import s from "./styleBlockVideo.css";

class BlocksVideo extends Component{
	constructor(props){
		super(props)
		// this.funImg = this.funImg.bind(this)
		this.test = this.test.bind(this)
		this.urlImageVideo = this.props.urlImageVideo
		this.nameVideo = this.props.nameVideo
		this.nameKanal = this.props.nameKanal
	}
	test(){
		let asd = require(`${this.urlImageVideo}`)
		return asd
	}
	render(){
	
		return(
			
			<div className="block_wrap_video">
				<NavLink to={'/videoStart/'+this.nameVideo}><div className='block__img__previo__video' style={{ background: `url(${this.test()})` , backgroundSize:'cover'}}></div></NavLink>
				<div className='block__text__name_NameK'>
					<p className='block__text__name__video'><NavLink to={'/videoStart/'+this.nameVideo}>{this.nameVideo}</NavLink></p>
					<p className='block__text__name__kanal'><NavLink to={'/videoStart/'+this.nameVideo}>{this.nameKanal}</NavLink></p>
				</div>
			</div>
		)
	}
}

export default BlocksVideo