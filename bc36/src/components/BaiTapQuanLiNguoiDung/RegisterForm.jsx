import React, { Component } from "react";
import { connect } from "react-redux";

class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.formRef = React.createRef(); // cách khai báo 1 ref trong react
    }


  state = {
    values: {
      userName: "",
      fullName: "",
      passWord: "",
      phoneNumber: "",
      email: "",
      type: "Client",
    },
    errors: {
      userName: "",
      fullName: "",
      passWord: "",
      phoneNumber: "",
      email: "",
      type: "",
    },
  };

  //obj literals
  // phải đặt name trong input để lấy đc giá trị từng ô input khác nhau
  // giữ giá trị state cũ ở cấp ngoài cùng
  // đối với cấp state thứ 2 trở lên cần phải sử dụng spread operator
  //values: {
  //  [name]: value,}

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // dùng để ko bị load lại trang web khi sử dụng onsubmit

    // chặn ko cho lưu nếu có lõi của form
    const isValid =  event.target.checkValidity();
    if(!isValid){
        return;
    }

    this.props.dispatch({
      type: "ADD_USER",
      payload: this.state.values,
    });
  };

  handleBlur = (event) => {
    let message = "";
    const { validationMessage, name, validity, title, minLength, maxLength } = event.target;
    const { valueMissing, tooShort, tooLong } = validity;
    if (valueMissing) {
      message = `${title} is required`;
    }

    if (tooShort || tooLong) {
      message = `${title} from ${minLength}-${maxLength} characters `;
    }

    // console.log(validationMessage);
    // validation xem o input nào bỏ trống thì thêm đoạn text ko đc bỏ trống vào trong error
    this.setState({
      errors: {
        ...this.state.errors,
        [name]: message, // sử dụng mess mình tự custom
      },
    });
  };

  render() {
    return (
      <div className="card p-0">
        <div className="card-header bg-warning text-white font-weight-bold">
          REGISTER FORM
        </div>
        <div className="card-body">
          <form ref={this.formRef}  noValidate onSubmit={(event) => this.handleSubmit(event)}>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    title="Username"
                    required
                    minLength={2}
                    maxLength={10}
                    type="text"
                    className="form-control"
                    name="userName"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <span className="text-danger">
                    {this.state.errors.userName}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    title="Full name"
                    required
                    type="text"
                    className="form-control"
                    name="fullName"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <span className="text-danger">
                    {this.state.errors.fullName}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    title="Password"
                    required
                    type="text"
                    className="form-control"
                    name="passWord"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <span className="text-danger">
                    {this.state.errors.passWord}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    title="Phone Number"
                    required
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <span className="text-danger">
                    {this.state.errors.phoneNumber}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    title="Email"
                    required
                    // pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <span className="text-danger">{this.state.errors.email}</span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Type</label>
                  <select
                    title="Type"
                    required
                    className="form-control"
                    name="type"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  >
                    <option>Client</option>
                    <option>Admin</option>
                  </select>
                  <span className="text-danger">{this.state.errors.type}</span>
                </div>
              </div>
            </div>

            <div className="card-footer text-muted">
              <button disabled={!this.formRef.current?.checkValidity()} className="btn btn-warning mr-2">SAVE</button>
              <button type="reset" className="btn btn-outline-dark">
                RESET
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(RegisterForm);
