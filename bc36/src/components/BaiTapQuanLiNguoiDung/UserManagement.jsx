import React, { Component } from 'react'
import {connect} from 'react-redux'

class UserManagement extends Component {

    renderContent = () =>{
        return this.props.userList.map((element, idx) =>{
            return (
                // những thg có idx 0,2,4,6 chia hết cho 2 thì lấy bglight
                <tr key={ element.id} className={idx % 2 === 0 ?'bg-light' : undefined } >
                <td>{idx+1}</td>
                <td>{element.userName}</td>
                <td>{element.fullName}</td>
                <td>{element.email}</td>
                <td>{element.phoneNumber}</td>
                <td>{element.type}</td>
                <td>
                  <button className="btn btn-info mr-2">EDIT</button>
                  <button className="btn btn-danger">DELETE</button>
                </td>
              </tr>
            )
        })
    }


  render() {
    return (
        <div className="card p-0 mt-3">
        <div className="card-header font-weight-bold">USER MANAGEMENT</div>
        <div className="row mt-4 px-3 ">
          <div className="col-4">
            <div className="form-group mb-0">
              <input
                type="text"
                placeholder="Search by full name..."
                className="form-control"
              />
            </div>
          </div>
          <div className="col-3 ml-auto">
            <div className="form-group mb-0">
              <select className="form-control">
                <option>All</option>
                <option>Client</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Username</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.renderContent()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
    }
}


export default connect (mapStateToProps)(UserManagement)
