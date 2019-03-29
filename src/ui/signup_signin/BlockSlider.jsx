import React from 'react'


export default function BlockSlider(props){


    return(
        <div className="block_slider" >
        <div className="one_slide block_slid_hover" >
            <div className="one_card_out Out_clas"><p>Общяйся и будь <br />
                                                    вкурсе всего <br/>
                                                    самого интересного
            </p></div>
        </div>
        <div className="two_slide block_slid_hover" >
             <div className="two_card_out Out_clas">
                <h3 className='two_block_h3'>Создавай интересные стикеры <br/>
                                             и стань лучшим <br />
                                             среди наших  авторов
                                              </h3>
                <div className='block_two_image'></div>
                <ul className="two_block_slid_ul">
                    <li><a href="#"><img src={props.agiff} alt="ссылка на автора"/></a></li>
                    <li><a href="#"><img src={props.agiff} alt="ссылка на автора"/></a></li>
                    <li><a href="#"><img src={props.agiff} alt="ссылка на автора"/></a></li>
                    <li><a href="#"><img src={props.agiff} alt="ссылка на автора"/></a></li>
                    <li><a href="#"><img src={props.agiff} alt="ссылка на автора"/></a></li>
                   
                </ul>
             </div>
        </div>
        <div className="three_slide block_slid_hover" >
            <div >

            </div>
        </div>
        <div className="foor_slide block_slid_hover" >
            
        </div>
        <div className="six_slide block_slid_hover" >
            <div className='six_card_out'>

            </div>
        </div>
        <div className="seven_slide block_slid_hover" >

        </div>
</div>
    )
}