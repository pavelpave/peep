import React, { Component } from 'react';
import './styleHeder.css';

class Heder extends React.Component{
	hederV = () => {
 		return (
 				<section>
 					<div className="polosa__heder">
 						<a href="#"><div className='header__logo'></div></a>
 						<nav>
							<ul className="nav__menu__ul">
								<li>
									<a href="#">Главная</a>
									<div className="li_capl"></div>
								</li>
								<li>
									<a href="#">Сообщения</a>
									<div className="li_capl"></div>
								</li>
								<li>
									<a href="#">Трансляции</a>
									<div className="li_capl"></div>
								</li>
								<li>
									<a href="#">Анонимка</a>
									<div className="li_capl"></div>
								</li>
							</ul>
						</nav>
						<div className="heder__block__akk">
							<p className="heder__block__name"><a href="#">Анастасия</a></p>
							<div className="heder__block__img">
								<div className="block__img"></div>
							</div>
						</div>
					</div>
				</section>
 			)
 	}
render(){
	return(
		this.hederV()
	)
}
 
}


export default Heder