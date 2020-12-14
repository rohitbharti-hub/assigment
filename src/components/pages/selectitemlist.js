import React from 'react'
import { connect } from 'react-redux'

class SelectCheckbox extends React.Component {
    componentWillMount() {
        var StateObj = [
            {
                states: "India",
                citys: [
                    { name: "Delhi", checked: true },
                    { name: "Mumbai", checked: false },
                    { name: "Chennai", checked: true }
                ]
            },
            {
                states: "USA",
                citys: [
                    { name: "New York", checked: true },
                    { name: "Los Angeles", checked: false },
                    { name: "Chicago", checked: true }
                ]
            }
        ]
        this.props.changeName(StateObj)
    }
    changeCheckedItem = (index, index2) => {
        var temp_obj = this.props.isChecked;
        temp_obj[index].citys[index2].checked = !this.props.isChecked[index].citys[index2].checked;
        this.props.changeName(undefined)
        this.props.changeName(temp_obj)
    }

    render() {
        console.log("this.props.isChecked")
        console.log(this.props.isChecked)
        return (
            <div className="item">
                {this.props.isChecked ? this.props.isChecked.map((list, index) =>
                    <div>
                        <h2 className="city__title">{list.states}</h2>
                        <ul className="city__list">
                            {list.citys.map((list2, index2) =>
                                <li><input type="checkbox" checked={list2.checked} name={list2.name} onChange={() => this.changeCheckedItem(index, index2)} /> {list2.name}</li>
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
    console.log("CHANGE_NAME")
    return {

        changeName: (isChecked) => { dispatch({ type: 'CHANGE_NAME', payload: isChecked }) }
    }
}

//connect use to connect store which have argument import & update
export default connect(mapStateToProps, mapDispatchToProps)(SelectCheckbox)

