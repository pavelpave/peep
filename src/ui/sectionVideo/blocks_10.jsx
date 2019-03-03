import React, { Component } from 'react';


class Blocks_inf extends Component {
    constructor(props){
        super(props)
		this.usstr = this.usstr.bind(this)
		this.test = this.props.test
        //обертка
        this.state = this.props.state
        this.clasN_osn_block = this.props.clasN_osn_block
        this.style_osn_block = this.props.style_osn_block
        //внутрений блок
        this.clasN_vnutr_block       = this.props.clasN_vnutr_block
        this.link_block              = this.props.link_block
        this.link_block_content      = this.props.link_block_content
        this.id_block_strel          = this.props.id_block_strel
        this.clasN_block_srelka      = this.props.clasN_block_srelka
        // this.usstr                   = this.props.usstr 
        this.clasN_block_content     = this.props.clasN_block_content
        this.style_block_content_top = this.props.style_block_content_top
        this.grid__video__system     = this.props.grid__video__system
    }
    usstr(e){
		console.log(e);

		let index     = e.target.id,
			keyTrue   = 0,
			toggl,
			prevState = this.state
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
		console.log(e.target.id)
		this.test(this.state.ClassNameStrel, prevState)
		// this.setState({ ClassNameStrel: this.state.ClassNameStrel})
		// this.setState(function (prevState, props) {
		// 		return { 
		// 			ClassNameStrel: this.state.ClassNameStrel
		// 		}
		// });
		// e.stopPropagation()
		
	}
    render(){
        return(
            <div className={this.clasN_osn_block} style={this.style_osn_block} >
                <div className={this.clasN_vnutr_block}></div>
                <a href={this.link_block}>{this.link_block_content}</a>
                <div id={this.id_block_strel} className={this.clasN_block_srelka}
                    onClick={this.usstr}></div>

                <div className={this.clasN_block_content} style={this.style_block_content_top}>
                    {this.grid__video__system()}
                </div>
            </div>
        )
    }
}

export default Blocks_inf