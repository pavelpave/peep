import React, { Component } from 'react';

class Videoapp extends Component{
	constructor(props){
		super(props)
		this.classNicon = this.props.classNicon

	}
	iconRotate = function(props) {
				if(this.classNicon == "sec__body__spis_one___rec_us"){
			return("sec__body__spis_one___rec_us active__icon") 
		}
		else if(this.classNicon == ""){
			return("sec__body__spis_one___rec_us")
		}
	}

}
export default Videoapp