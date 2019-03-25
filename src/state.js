import podgruz from "./ui/sectionVideo/ajaxVideo";

let state = {
    ClassNameStrel: {
        //     0        1               2                 3                   4fix
        _1: [true, podgruz()[0], { recomend: true }, 1, { deFTop: '30px', Top: '30px' }],
        _2: [false, podgruz()[0], { translation: false }, 1, { deFTop: '735px', Top: '-27px' }],
        _3: [false, podgruz()[0], { serch_kanal: false }, 2, { deFTop: '795px', Top: '30px' }],
        _4: [false, podgruz()[0], { podpis: false }, 2, { deFTop: '735px', Top: '-27px' }],
        _5: [false, podgruz()[0], { create_pl: false }, 3, { deFTop: '795px', Top: '30px' }],
        _6: [false, podgruz()[0], { video_frend: false }, 3, { deFTop: '735px', Top: '-27px' }],
        _7: [false, podgruz()[0], { pozje: false }, 4, { deFTop: '795px', Top: '30px' }],
        _8: [false, podgruz()[0], { history: false }, 4, { deFTop: '735px', Top: '-27px' }],
        _9: [false, podgruz()[0], { izbran: false }, 5, { deFTop: '795px', Top: '30px' }],
        _10: [false, podgruz()[0], { my_post: false }, 5, { deFTop: '735px', Top: '-27px' }]
    },
    regForm:{
        vibor:true
    }
}
export default state