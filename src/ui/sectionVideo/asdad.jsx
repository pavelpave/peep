{/* <div className='sec__body__spis_one___rec' style={{ top: this.funSwapMath(this.state.ClassNameStrel._1[0]) }} >
    <div className="sec__body__spis_one___rec_icon_1"></div>
    <a href="#">Рекомендации</a>
    <div id="_1" className={this.state.ClassNameStrel._1[0] ? "sec__body__spis_one___rec_us active__icon" : "sec__body__spis_one___rec_us "}
        onClick={this.usstr}></div>

    <div className={this.state.ClassNameStrel._1[2].recomend ? "video__block__open" : "video__block__close"} style={{ height: this.state.ClassNameStrel._1[1] }}>
        {this.grid__video__system()}
    </div>
</div>

/////////////////////////////////////////////////////
usstr(e){
    console.log(e);

    let index = e.target.id,
        keyTrue = 0,
        toggl;
    if (this.state.ClassNameStrel[index][0]) {
        toggl = false
    } else if (this.state.ClassNameStrel[index][0] == false) {
        toggl = true
    }
    for (const key in this.state.ClassNameStrel) {
        if (this.state.ClassNameStrel[key][0] == true) {
            keyTrue += 1
        }
        if (keyTrue >= 1) {
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
            } else if (this.state.ClassNameStrel[index][0] == true) {
                this.state.ClassNameStrel[index][2][keyTo] = true
            }
        }
    }
    console.log(e.target.id)
    this.setState(function (prevState, props) {
        return {
            ClassNameStrel: this.state.ClassNameStrel
        }
    });
    e.stopPropagation()
} */}