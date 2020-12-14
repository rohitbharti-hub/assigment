import React, { useState, useEffect } from "react";

import { connect } from 'react-redux'

class SelectList extends React.Component {
    changeCheckedItem = (index, index2) => {
        var temp_obj = this.props.isChecked;
        temp_obj[index].citys[index2].checked = !this.props.isChecked[index].citys[index2].checked;
       
        this.props.changeName(undefined)
        this.props.changeName(temp_obj)
    }
    render() {
        return (
            <div className="item" style={{zIndex:999}}>
                {this.props.isChecked ? this.props.isChecked.map((list, index) =>
                    <div>
                        <h2 className="city__title">{list.states}</h2>
                        <ul className="city__list">
                            {list.citys.map((list2, index2) =>
                                list2.checked ?
                                    <li style={{display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"}}>{list2.name} 
                                    <button className="close" onClick={() => this.changeCheckedItem(index, index2)}>
                                        <svg  x="0px" y="0px" viewBox="0 0 512.001 512.001" >
                                       <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
                                           L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
                                           c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
                                           l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
                                           L284.286,256.002z"/></svg>
                                           </button>
                                           </li>
                                    : null
                            )}
                        </ul>
                    </div>
                ) : null}

            </div>
        )
    }
}


//import state
const mapStateToProps = (state) => {
    return {
        isChecked: state.isChecked
    }
}


//update state
const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (isChecked) => { dispatch({ type: 'CHANGE_NAME', payload: isChecked }) }
    }
}

//connect use to connect store which have argument import & update
export default connect(mapStateToProps, mapDispatchToProps)(SelectList)

