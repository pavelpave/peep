import React, { Component } from 'react';


class Blocks_inf extends Component {
    constructor(props){
        super(props)
        //обертка
        this.clasN_osn_block = this.props.clasN_osn_block
        this.style_osn_block = this.props.style_osn_block
        //внутрений блок
        this.clasN_vnutr_block       = this.props.clasN_vnutr_block
        this.link_block              = this.props.link_block
        this.link_block_content      = this.props.link_block_content
        this.id_block_strel          = this.props.id_block_strel
        this.clasN_block_srelka      = this.props.clasN_block_srelka
        this.usstr                   = this.props.usstr 
        this.clasN_block_content     = this.props.clasN_block_content
        this.style_block_content_top = this.props.style_block_content_top
        this.grid__video__system     = this.props.grid__video__system
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