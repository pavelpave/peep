import React , {Component} from 'react';
import podgruz from "./ajaxVideo";
// import Videoapp  from './videoPOTOCK.js';
import './styleBody.css';
export default class BodyVideo extends Component{
	constructor(props){
		super(props)
		this.state = {
			ClassNameStrel : {
				_1: [true, podgruz()[0] , {recomend:true}],
				_2: [false, 0, {translation:false}],
				_3: [false, 0, {serch_kanal:false}],
				_4: [false, 0, {podpis:false}],
				_5: [false, 0, {create_pl:false}],
				_6: [false, 0, {video_frend:false}],
				_7: [false, 0, {pozje:false}],
				_8: [false, 0, {history:false}],
				_9: [false, 0, {izbran:false}],
				_10: [false, 0, {my_post: false}]
			}
		}
		this.usstr = this.usstr.bind(this)
	}
	grid__video__system(){
		return 2
	}
	usstr(e){
		let index     = e.target.id,
			keyTrue   = 0,
		    toggl;
		    if (this.state.ClassNameStrel[index][0]) {
		    	toggl = false
			} else if (this.state.ClassNameStrel[index][0] == false){
		    	toggl = true
			}
			for (const key in this.state.ClassNameStrel) {
				if (this.state.ClassNameStrel[key][0] == true) {
				keyTrue+=1
				}
				if (keyTrue >= 1){
				this.state.ClassNameStrel[key][0] = false
					for (const keys in this.state.ClassNameStrel[key][2]) {
						this.state.ClassNameStrel[key][2][keys] = false
					}
				}
				
			 }
		this.state.ClassNameStrel[index][0] = toggl
		//video block
			
		for (const keyTo in this.state.ClassNameStrel[index][2]) {
			 if (index) {
				 if (this.state.ClassNameStrel[index][0] == false) {
					 this.state.ClassNameStrel[index][2][keyTo] = false
				 }else if (this.state.ClassNameStrel[index][0] == true){
					 this.state.ClassNameStrel[index][2][keyTo] = true
				 }
			 }
		}
		console.log(e)
		this.setState(function (prevState, props) {
				return { 
					ClassNameStrel: this.state.ClassNameStrel
				}
		});
		e.stopPropagation()
	}
	test(){
		console.log('sda')
	}
	funSwapMath(s){
		console.log(s);
		// for (const key in this.state.ClassNameStrel) {
		// 	if (s == this.state.ClassNameStrel[key][0]) {
		// 		console.log(this.state.ClassNameStrel[key][0]);
		// 		return podgruz()
		// 	}else{
		// 		return podgruz()
		// 	}
		// }
	}
	render(){
		return(
			<section className="sec__body">
				<div className="sec__body__spis_one">

					<div className='sec__body__spis_one___rec' style={{top:this.funSwapMath(this.state.ClassNameStrel._1[0])}} >
						<div className="sec__body__spis_one___rec_icon_1"></div>
						<a href="#">Рекомендации</a>
						<div id="_1" className={this.state.ClassNameStrel._1[0]  ? "sec__body__spis_one___rec_us active__icon" : "sec__body__spis_one___rec_us "}
							onClick={this.usstr}></div>

						<div className={this.state.ClassNameStrel._1[2].recomend ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._1[1] }}>
							{this.grid__video__system()}
						</div>
					</div>

					<div className="sec__body__spis_one___tra">
						<div className="sec__body__spis_one___rec_icon_2"></div>
						<a href="#">Трансляции</a>
						<div id="_2"
							className={this.state.ClassNameStrel._2[0] ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
							onClick={this.usstr}
						></div>

						<div className={this.state.ClassNameStrel._2[2].translation ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._2[1] }}>
							{this.grid__video__system()}
						</div>
					</div>

					<div className="sec__body__spis_one___sech">
						<div className="sec__body__spis_one___rec_icon_3"></div>
						<a href="#">Найти канал</a>
						<div id="_3" className={this.state.ClassNameStrel._3[0] ? "sec__body__spis_one___rec_us nejdan active__icon active_str_n" : "sec__body__spis_one___rec_us pasiv_us_strel"}
							onClick={this.usstr}>
						</div>

						<div className={this.state.ClassNameStrel._3[2].serch_kanal ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._3[1] }}>
							{this.grid__video__system()}
						</div>
					</div>

					<div className="sec__body__spis_one___podpis" >
						<div className="sec__body__spis_one___rec_icon_4"></div>
						<a href="#">Подписки</a>
						<div id="_4" className={this.state.ClassNameStrel._4[0] ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
							onClick={this.usstr}></div>
						<div className={this.state.ClassNameStrel._4[2].podpis ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._4[1] }}>
							{this.grid__video__system()}
						</div>
					</div>

					<div className="sec__body__spis_one___sech" >
						<div className="sec__body__spis_one___rec_icon_5"></div>
						<a href="#">Создать плейлист</a>
						<div id="_5" className={this.state.ClassNameStrel._5[0] ? "sec__body__spis_one___rec_us nejdan active__icon active_str_n" : "sec__body__spis_one___rec_us pasiv_us_strel"}
							onClick={this.usstr}></div>
						<div className={this.state.ClassNameStrel._5[2].create_pl ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._5[1] }}>
							{this.grid__video__system()}
						</div>
					</div>

					<div className="sec__body__spis_one___podpis">
						<div className="sec__body__spis_one___rec_icon_6"></div>
						<a href="#">Видео друзей</a>
						<div id="_6" className={this.state.ClassNameStrel._6[0] ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
							onClick={this.usstr}></div>
						<div className={this.state.ClassNameStrel._6[2].video_frend ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._6[1] }}>
							{this.grid__video__system()}
						</div>
					</div>

					<div className="sec__body__spis_one___sech">
						<div className="sec__body__spis_one___rec_icon_7"></div>
						<a href="#">Посмотреть позже</a>
						<div id="_7" className={this.state.ClassNameStrel._7[0] ? "sec__body__spis_one___rec_us nejdan active__icon active_str_n" : "sec__body__spis_one___rec_us pasiv_us_strel"}
							onClick={this.usstr}></div>
						<div className={this.state.ClassNameStrel._7[2].pozje ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._7[1] }}>
							{this.grid__video__system()}
						</div>
					</div>

					<div className="sec__body__spis_one___podpis">
						<div className="sec__body__spis_one___rec_icon_8"></div>
						<a href="#">История</a>
						<div id="_8" className={this.state.ClassNameStrel._8[0] ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
							onClick={this.usstr}></div>
						<div className={this.state.ClassNameStrel._8[2].history ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._8[1] }}>
							{this.grid__video__system()}
						</div>
					</div>

					<div className="sec__body__spis_one___sech">
						<div className="sec__body__spis_one___rec_icon_9"></div>
						<a href="#">Избранные</a>
						<div id="_9" className={this.state.ClassNameStrel._9[0] ? "sec__body__spis_one___rec_us nejdan active__icon active_str_n" : "sec__body__spis_one___rec_us pasiv_us_strel"}
							onClick={this.usstr}></div>
						<div className={this.state.ClassNameStrel._9[2].serch_kanal ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._9[1] }}>
							{this.grid__video__system()}
						</div>
					</div>

					<div className="sec__body__spis_one___podpis">
						<div className="sec__body__spis_one___rec_icon_10"></div>
						<a href="#">Свои записи</a>
						<div id="_10" className={this.state.ClassNameStrel._10[0] ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
							onClick={this.usstr}></div>
						<div className={this.state.ClassNameStrel._10[2].my_post ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._10[1] }}>
							{this.grid__video__system()}
						</div>
					</div>
				</div>
			</section>
			)
	}
}