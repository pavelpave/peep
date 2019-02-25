import React, { Component } from 'react';
import './styleHeder.css';

class Heder extends React.Component{
	hederV = () => {
 		return (
 				<heder>
 					<div className="polosa__heder">
 						<a href="#"><div className='header__logo'></div></a>
 						<nav>
							<ul class="nav__menu__ul">
								<li>
									<a href="#">Главная</a>
									<div class="li_capl"></div>
								</li>
								<li>
									<a href="#">Сообщения</a>
									<div class="li_capl"></div>
								</li>
								<li>
									<a href="#">Трансляции</a>
									<div class="li_capl"></div>
								</li>
								<li>
									<a href="#">Анонимка</a>
									<div class="li_capl"></div>
								</li>
							</ul>
						</nav>
						<div class="heder__block__akk">
							<p class="heder__block__name"><a href="#">Анастасия</a></p>
							<div class="heder__block__img">
								<div class="block__img"></div>
							</div>
						</div>
					</div>
 				</heder>
 			)
 	}
render(){
	return(
		this.hederV()
	)
}
 
}


export default Heder