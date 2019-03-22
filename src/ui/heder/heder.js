import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import SignIn from './ProfileComponent'
import './styleHeder.css';

class Heder extends React.Component{
constructor(props){
	super(props)
	this.inlocalStorag = this.props.inlocalStorag
}

render(){
	return(
		<section className='heder_page'>
			<div className="polosa__heder">
				<NavLink to='/'><div className='header__logo'></div></NavLink>
				<nav>
					<ul className="nav__menu__ul">
						<li>
							<NavLink to='/home#'>Главная</NavLink>
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
				<SignIn  inlocalStorag={this.inlocalStorag}/>
			</div>
		</section>
	)
}
 
}


export default Heder