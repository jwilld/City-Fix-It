import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { user, admin } from '../actions/actions'
import './UserType.css'


class UserType extends Component {
    userClick = () => {
        this.props.dispatch(user())
    }
    adminClick = () => {
        this.props.dispatch(admin())
    }
    render() {
        console.log(this.props)
        return (
            <div className='user-type-grid'>
                <div onClick={this.adminClick}className='admin-button'>
                    <Link className='link-tag admin-button' to='/main'>
                    <span>Admin</span>
                    </Link>
                </div>
                <div onClick={this.userClick} className='user-button'>
                    <Link className='link-tag user-button' to='/main'>
                    <span>User</span>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      data: state
    };
  };
  export default connect(mapStateToProps)(UserType)