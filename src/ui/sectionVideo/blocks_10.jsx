import React, { Component } from 'react';
import s from "./styleBlockVideo.css";

class BlocksVideo extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className="block_wrap_video">
				<a href="#"><div className='block__img__previo__video'></div></a>
				<div className='block__text__name_NameK'>
					<p className='block__text__name__video'><a href='#'>Название видео</a></p>
					<p className='block__text__name__kanal'><a href='#'>Название канала</a></p>
				</div>
			</div>
		)
	}
}

export default BlocksVideo