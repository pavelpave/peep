import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './styleHeder.css';

class Heder extends React.Component{

render(){
	return(
		<section className='heder_page'>
			<div className="polosa__heder">
				<NavLink to='/'><div className='header__logo'></div></NavLink>
				<nav>
					<ul className="nav__menu__ul">
						<li>
							<NavLink to='/home'>Главная</NavLink>
							<div className="li_capl"></div>
						</li>
						<li>
							<NavLink to='/messeng'>Сообщения</NavLink>
							<div className="li_capl"></div>
						</li>
						<li>
							<NavLink to='/playing'>Трансляции</NavLink>
							<div className="li_capl"></div>
						</li>
						<li>
							<NavLink to='/anonim'>Анонимка</NavLink>
							<div className="li_capl"></div>
						</li>
					</ul>
				</nav>
				<div className="heder__block__akk">
					<p className="heder__block__name"><NavLink to='/'>Анастасия</NavLink></p>
					<div className="heder__block__img">
						<div className="block__img"></div>
					</div>
				</div>
			</div>
		</section>
	)
}
 
}


export default Heder