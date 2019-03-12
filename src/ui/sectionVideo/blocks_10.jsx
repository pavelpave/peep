import React, { Component } from 'react';
import i from '../sectionVideo/img/qwdq.png'
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
		//`url(${this.funImg().then().catch(() => { console.log('0') })})`
		return(
			
			<div className="block_wrap_video">
				<a href="#"><div className='block__img__previo__video' style={{ background: `url(${this.test()})` , backgroundSize:'cover'}}></div></a>
				<div className='block__text__name_NameK'>
					<p className='block__text__name__video'><a href='#'>{this.nameVideo}</a></p>
					<p className='block__text__name__kanal'><a href='#'>{this.nameKanal}</a></p>
				</div>
			</div>
		)
	}
}

export default BlocksVideo