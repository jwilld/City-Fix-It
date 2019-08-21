import React, {Component} from 'react'
import './form-change.css'


class FormChange extends Component{
    render(){
        const info = this.props
        console.log(info)
        console.log(this)
        return(
            <div>
                <div className='change-container'>
                    <h1>
                        Edit a Form
                    </h1>
                </div>
            </div>
        )
    }
}
export default FormChange