import React , {Component} from 'react';
import podgruz from "./ajaxVideo";
// import Videoapp  from './videoPOTOCK.js';
import './styleBody.css';
export default class BodyVideo extends Component{
	constructor(props){
		super(props)
		this.state = {
			ClassNameStrel : {
				_1: [true, podgruz()[0]],
				_2:[false,0],
				_3:[false,0],
				_4:[false,0],
				_5:[false,0],
				_6:[false,0],
				_7:[false,0],
				_8:[false,0],
				_9:[false,0],
				_10:[false,0]
			},
			ClassNameBlockVideo :{
				recomend:true
			}
		}
		this.usstr = this.usstr.bind(this)
	}

	usstr(e){
		let spis_id_srel = ['_1','_2','_3','_4','_5','_6','_7','_8','_9','_10'],
			index        = e.target.id,
			keyTrue      = 0,
		    toggl;
		    if (this.state.ClassNameStrel[e.target.id][0]) {
		    	toggl = false
			} else if (this.state.ClassNameStrel[e.target.id][0] == false){
		    	toggl = true
			}
			for (const key in this.state.ClassNameStrel[0]) {
				if (this.state.ClassNameStrel[key][0] == true) {
				keyTrue+=1
				}
				if (keyTrue >= 1){
				this.state.ClassNameStrel[key][0] = false
				}
				
			 }
		this.state.ClassNameStrel[index][0] = toggl
		//video block
			if (index == '_1') {
				if ( this.state.ClassNameStrel['_1'][0] == false) {
					this.state.ClassNameBlockVideo.recomend = false
				} else if (this.state.ClassNameStrel[index][0] == true){
					this.state.ClassNameBlockVideo.recomend = true	
				}
				
			 }
			if (this.state.ClassNameStrel['_1'][0] == false) {
				this.state.ClassNameBlockVideo.recomend = false
			 }
			 
		console.log(this.state.ClassNameBlockVideo.recomend)
		console.log(this.state.ClassNameStrel)

		this.setState(function (prevState, props) {
				return { ClassNameStrel: this.state.ClassNameStrel,
					ClassNameBlockVideo: this.state.ClassNameBlockVideo
				}
		});
		e.stopPropagation()
	}

	render(){
		return(
			<section className="sec__body">
				<div className="sec__body__spis_one">

					<div className="sec__body__spis_one___rec"  >
						<div className="sec__body__spis_one___rec_icon_1"></div>
						<a href="#">Рекомендации</a>
						<div id="_1" className={this.state.ClassNameStrel._1[0] == true ? "sec__body__spis_one___rec_us active__icon" :"sec__body__spis_one___rec_us "} 
						             onClick={this.usstr}></div> 

						<div className={this.state.ClassNameBlockVideo.recomend ? "video__block__open" : "video__block__close"} style={{height:this.state.ClassNameStrel._1[1]}}>

						</div>
					</div>

					<div className="sec__body__spis_one___tra">
						<div className="sec__body__spis_one___rec_icon_2"></div>
						<a href="#">Трансляции</a>
						<div id="_2" 
							className={this.state.ClassNameStrel._2[0]  ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
									onClick={this.usstr} 
							 ></div>
					</div>

					<div className="sec__body__spis_one___sech">
						<div className="sec__body__spis_one___rec_icon_3"></div>
						<a href="#">Найти канал</a>
						<div id="_3" className={this.state.ClassNameStrel._3[0]  ? "sec__body__spis_one___rec_us nejdan active__icon active_str_n" : "sec__body__spis_one___rec_us pasiv_us_strel"}
							onClick={this.usstr}>
							</div>
					</div>

					<div className="sec__body__spis_one___podpis" >
						<div className="sec__body__spis_one___rec_icon_4"></div>
						<a href="#">Подписки</a>
						<div id="_4" className={this.state.ClassNameStrel._4[0]  ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
							onClick={this.usstr}></div>
					</div>

					<div className="sec__body__spis_one___sech" >
						<div className="sec__body__spis_one___rec_icon_5"></div>
						<a href="#">Создать плейлист</a>
						<div id="_5" className={this.state.ClassNameStrel._5[0]  ? "sec__body__spis_one___rec_us nejdan active__icon active_str_n" : "sec__body__spis_one___rec_us pasiv_us_strel"}
							onClick={this.usstr}></div>
					</div>

					<div className="sec__body__spis_one___podpis">
						<div className="sec__body__spis_one___rec_icon_6"></div>
						<a href="#">Видео друзей</a>
						<div id="_6" className={this.state.ClassNameStrel._6[0]  ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
							onClick={this.usstr}></div>
					</div>

					<div className="sec__body__spis_one___sech">
						<div className="sec__body__spis_one___rec_icon_7"></div>
						<a href="#">Посмотреть позже</a>
						<div id="_7" className={this.state.ClassNameStrel._7[0]  ? "sec__body__spis_one___rec_us nejdan active__icon active_str_n" : "sec__body__spis_one___rec_us pasiv_us_strel"}
							onClick={this.usstr}></div>
					</div>

					<div className="sec__body__spis_one___podpis">
						<div className="sec__body__spis_one___rec_icon_8"></div>
						<a href="#">История</a>
						<div id="_8" className={this.state.ClassNameStrel._8[0]  ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
							onClick={this.usstr}></div>
					</div>

					<div className="sec__body__spis_one___sech">
						<div className="sec__body__spis_one___rec_icon_9"></div>
						<a href="#">Избранные</a>
						<div id="_9" className={this.state.ClassNameStrel._9[0]  ? "sec__body__spis_one___rec_us nejdan active__icon active_str_n" : "sec__body__spis_one___rec_us pasiv_us_strel"}
							onClick={this.usstr}></div>
					</div>

					<div className="sec__body__spis_one___podpis">
						<div className="sec__body__spis_one___rec_icon_10"></div>
						<a href="#">Свои записи</a>
						<div id="_10" className={this.state.ClassNameStrel._10[0]  ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
							onClick={this.usstr}></div>
					</div>
				</div>
			</section>
			)
	}
}