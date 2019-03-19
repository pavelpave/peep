import React, { Component } from 'react';

function podgruz(props) {
    // let  kol_vo = this.props.sum
    let kol_vo = 9,
        size_block

    if (kol_vo != undefined) {
        size_block = 250 * Math.floor(kol_vo / 3) + 30
    }
    return ([size_block,true])
}
export default podgruz