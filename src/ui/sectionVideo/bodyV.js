import React , {Component} from 'react';
import {NavLink} 		   from 'react-router-dom'
import podgruz 			   from "./ajaxVideo";
import BlocksVideo 		   from "./blocks_10";
// import Videoapp  from './videoPOTOCK.js';
import './styleBody.css';
export default class BodyVideo extends Component{
	constructor(props){
		super(props)
		
		this.ObnState = this.ObnState.bind(this)
		this.state = this.props.state
		this.massAjax = this.props.massAjax
		this.usstr = this.usstr.bind(this)
		this.vidoPlayList = this.vidoPlayList.bind(this)
	}
	vidoPlayList(){
		let newMassAjax = this.massAjax.map((el , i)=>{
			return(
				<BlocksVideo key={i} nameKanal={el.nameKanal} nameVideo={el.nameVideo} urlImageVideo={el.imgUrl} />	
			)
		})
		return newMassAjax
	}

	
	usstr(e){
		let index     = e.target.id;
		let	keyTrue   = 0;
		let keyFalse = 0;
		let   toggl;
		    if (this.state.ClassNameStrel[index][0]) {
		    	toggl = false
			} else if (this.state.ClassNameStrel[index][0] === false){
		    	toggl = true
			}
			for (const key in this.state.ClassNameStrel) {
				if (this.state.ClassNameStrel[key][0] === true) {
				keyTrue+=1
				}
				if (this.state.ClassNameStrel[key][0] === false) {
					keyFalse+=1
				}
				// debugger
				if (keyFalse === 9 ) {
					this.state.ClassNameStrel[index][0] = true
					for (const keys in this.state.ClassNameStrel[index][2]) {
						this.state.ClassNameStrel[index][2][keys] = true
					}
					toggl = true
					keyTrue = 0
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
				 if (this.state.ClassNameStrel[index][0] === false) {
					 this.state.ClassNameStrel[index][2][keyTo] = false
					 
				 }else if (this.state.ClassNameStrel[index][0] === true){
					 this.state.ClassNameStrel[index][2][keyTo] = true
				 }
			 }
		}
		this.funSwapMath(e.target.id);
		this.ObnState(this.state.ClassNameStrel, this.state.ClassNameStrel);
		e.stopPropagation();
	}

	ObnState(newState,prevState){
		this.setState(prevState = newState)
	}
	funSwapMath(s){
		if (this.state.ClassNameStrel[s][0]){
			
			for (const key in this.state.ClassNameStrel) {
				if (this.state.ClassNameStrel[s][3] == this.state.ClassNameStrel[key][3]) {
					this.state.ClassNameStrel[s][4].deFTop = this.state.ClassNameStrel[s][4].Top
					
				}
				if (this.state.ClassNameStrel[key] != this.state.ClassNameStrel[s] ) {
					if (this.state.ClassNameStrel[s][3] !== this.state.ClassNameStrel[key][3]) {
						// if (this.state.ClassNameStrel[s][3] >= this.state.ClassNameStrel[key][3]) {
						// 	this.state.ClassNameStrel[key][4].deFTop = this.state.ClassNameStrel[key][4].Top
						// }
						
						//сброс в низ для правого края
						if (key == '_2') {
							this.state.ClassNameStrel[key][4].deFTop = (podgruz()[0] - 59)
						} else if (key == '_4') {
							this.state.ClassNameStrel[key][4].deFTop = (podgruz()[0] - 59)
						} else if (key == '_6') {
							this.state.ClassNameStrel[key][4].deFTop = (podgruz()[0] - 59)
						} else if (key == '_8') {
							this.state.ClassNameStrel[key][4].deFTop = (podgruz()[0] - 59)
						} else if (key == '_10') {
							this.state.ClassNameStrel[key][4].deFTop = (podgruz()[0] - 59)
						} else {
							this.state.ClassNameStrel[key][4].deFTop = (podgruz()[0])
						}
						if (this.state.ClassNameStrel[s][3] > 2) {
							this.state.ClassNameStrel['_3'][4].deFTop = '30px'
							this.state.ClassNameStrel['_4'][4].deFTop = '-27px'
						}
						if (this.state.ClassNameStrel[s][3] > 3) {
							this.state.ClassNameStrel['_5'][4].deFTop = '30px'
							this.state.ClassNameStrel['_6'][4].deFTop = '-27px'
						}
						if (this.state.ClassNameStrel[s][3] > 3) {
							this.state.ClassNameStrel['_7'][4].deFTop = '30px'
							this.state.ClassNameStrel['_8'][4].deFTop = '-27px'
						}
						if (this.state.ClassNameStrel[s][3] > 3) {
							this.state.ClassNameStrel['_9'][4].deFTop = '30px'
							this.state.ClassNameStrel['_10'][4].deFTop = '-27px'
						}
						
				}
					
			   }
			}		
		}else{
			for (const key in this.state.ClassNameStrel) {
				if (this.state.ClassNameStrel[key] !== this.state.ClassNameStrel[s]) {
					if (key == '_2') {
						this.state.ClassNameStrel[key][4].deFTop = '-28px'
					}else if(key == '_4'){
						this.state.ClassNameStrel[key][4].deFTop = '-28px'
					} else if (key == '_6') {
						this.state.ClassNameStrel[key][4].deFTop = '-28px'
					} else if (key == '_8') {
						this.state.ClassNameStrel[key][4].deFTop = '-28px'
					} else if (key == '_10') {
						this.state.ClassNameStrel[key][4].deFTop = '-28px'
					}else{
						this.state.ClassNameStrel[key][4].deFTop = '30px'
					}		
				}
			}
		}
	}
	render(){
		return(
			<section className="sec__body">
				<div className="sec__body__spis_one">
				
					<div className='sec__body__spis_one___rec' style={{  }} >
						<div className="sec__body__spis_one___rec_icon_1"></div>
						<NavLink to='/'>Рекомендации</NavLink>
						<div id="_1" className={this.state.ClassNameStrel._1[0] ? "sec__body__spis_one___rec_us active__icon" : "sec__body__spis_one___rec_us "}
							onClick={this.usstr}></div>

						<div className={this.state.ClassNameStrel._1[2].recomend ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._1[1] }}>
							{this.vidoPlayList()}
						</div>
					</div>


					<div className="sec__body__spis_one___tra" style={{  }}>
						<div className="sec__body__spis_one___rec_icon_2"></div>
						<NavLink to='/'>Трансляции</NavLink>
						<div id="_2"
							className={this.state.ClassNameStrel._2[0] ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
							onClick={this.usstr}
						></div>

						<div className={this.state.ClassNameStrel._2[2].translation ? "video__block__open_right" : "video__block__close"} style={{ height: this.state.ClassNameStrel._2[1] }}>
							{this.vidoPlayList()}
						</div>
					</div>

				<div className="sec__body__spis_one___sech" style={{  top: this.state.ClassNameStrel._3[4].deFTop  }}>
						<div className="sec__body__spis_one___rec_icon_3"></div>
						<NavLink to='/'>Найти канал</NavLink>
						<div id="_3" className={this.state.ClassNameStrel._3[0] ? "sec__body__spis_one___rec_us  active__icon active_str_n" : "sec__body__spis_one___rec_us pasiv_us_strel"}
							onClick={this.usstr}>
						</div>

						<div className={this.state.ClassNameStrel._3[2].serch_kanal ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._3[1] }}>
							{}
						</div>
					</div>

			<div className="sec__body__spis_one___podpis" style={{  top: this.state.ClassNameStrel._4[4].deFTop  }}>
						<div className="sec__body__spis_one___rec_icon_4"></div>
						<NavLink to='/'>Подписки</NavLink>
						<div id="_4" className={this.state.ClassNameStrel._4[0] ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
							onClick={this.usstr}></div>
						<div className={this.state.ClassNameStrel._4[2].podpis ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._4[1] }}>
							{}
						</div>
					</div>

						<div className="sec__body__spis_one___sech" style={{  top: this.state.ClassNameStrel._5[4].deFTop }}>
						<div className="sec__body__spis_one___rec_icon_5"></div>
						<NavLink to='/'>Создать плейлист</NavLink>
						<div id="_5" className={this.state.ClassNameStrel._5[0] ? "sec__body__spis_one___rec_us  active__icon active_str_n" : "sec__body__spis_one___rec_us pasiv_us_strel"}
							onClick={this.usstr}></div>
						<div className={this.state.ClassNameStrel._5[2].create_pl ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._5[1] }}>
							{}
						</div>
					</div>

					<div className="sec__body__spis_one___podpis" style={{  top: this.state.ClassNameStrel._6[4].deFTop  }}>
						<div className="sec__body__spis_one___rec_icon_6"></div>
						<NavLink to='/'>Видео друзей</NavLink>
						<div id="_6" className={this.state.ClassNameStrel._6[0] ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
							onClick={this.usstr}></div>
						<div className={this.state.ClassNameStrel._6[2].video_frend ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._6[1] }}>
							{}
						</div>
					</div>

					<div className="sec__body__spis_one___sech" style={{  top: this.state.ClassNameStrel._7[4].deFTop }}>
						<div className="sec__body__spis_one___rec_icon_7"></div>
						<NavLink to='/'>Посмотреть позже</NavLink>
						<div id="_7" className={this.state.ClassNameStrel._7[0] ? "sec__body__spis_one___rec_us  active__icon active_str_n" : "sec__body__spis_one___rec_us pasiv_us_strel"}
							onClick={this.usstr}></div>
						<div className={this.state.ClassNameStrel._7[2].pozje ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._7[1] }}>
							{}
						</div>
					</div>

					<div className="sec__body__spis_one___podpis" style={{  top: this.state.ClassNameStrel._8[4].deFTop  }}>
						<div className="sec__body__spis_one___rec_icon_8"></div>
						<NavLink to='/'>История</NavLink>
						<div id="_8" className={this.state.ClassNameStrel._8[0] ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
							onClick={this.usstr}></div>
						<div className={this.state.ClassNameStrel._8[2].history ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._8[1] }}>
							{}
						</div>
					</div>

					<div className="sec__body__spis_one___sech" style={{  top: this.state.ClassNameStrel._9[4].deFTop  }}>
						<div className="sec__body__spis_one___rec_icon_9"></div>
						<NavLink to='/'>Избранные</NavLink>
						<div id="_9" className={this.state.ClassNameStrel._9[0] ? "sec__body__spis_one___rec_us  active__icon active_str_n" : "sec__body__spis_one___rec_us pasiv_us_strel"}
							onClick={this.usstr}></div>
						<div className={this.state.ClassNameStrel._9[2].izbran ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._9[1] }}>
							{}
						</div>
					</div>

					<div className="sec__body__spis_one___podpis" style={{  top: this.state.ClassNameStrel._10[4].deFTop  }}>
						<div className="sec__body__spis_one___rec_icon_10"></div>
						<NavLink to='/'>Свои записи</NavLink>
						<div id="_10" className={this.state.ClassNameStrel._10[0] ? "sec__body__spis_one___rec_us_l  active_icon_two" : "sec__body__spis_one___rec_us_l"}
							onClick={this.usstr}></div>
						<div className={this.state.ClassNameStrel._10[2].my_post ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._10[1] }}>
							{}
						</div>
					</div>
				</div>
			</section>
			)
	}
}