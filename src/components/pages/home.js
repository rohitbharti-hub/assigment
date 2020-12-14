import React from 'react'
import Selectlistitem from './selectitemlist'
import Selectlistitemwrapper from './selectlistitemwrapper'

function home() {
    return (
        <div className="home__container">
            <div className="big__circle"></div>
            <div className="small__circle"></div>
            <div className="medium__circle"></div>
            

            <div className="wrapper">
                <Selectlistitem />

                <Selectlistitemwrapper />
            </div>

        </div>
    )
}

export default home
