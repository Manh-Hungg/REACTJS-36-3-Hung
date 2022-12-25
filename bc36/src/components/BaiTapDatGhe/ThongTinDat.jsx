import React, { Component } from 'react'
import "./style.scss";
export default class ThongTinDat extends Component {

    renderTotal = () => {
        let totalMoney = 0;
       
    }




  render() {
    return (
      <div>
        <table class="table table-bordered">
        <thead>
            <th style={{ color:'yellow'}}>Số ghế</th>
            <th style={{ color:'yellow'}}>Giá</th>
            <th style={{ color:'yellow'}}>Hủy</th>
        </thead>
        <thead style={{ color:'yellow'}}>Tổng :  Vnd</thead>
        <tbody id="tblGhe"></tbody>
        </table>
      </div>
    )
  }
}
