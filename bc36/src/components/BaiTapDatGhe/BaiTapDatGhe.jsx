import React, { Component } from "react";
import chairList from "../../data/danhSachGhe.json";
import Chair from "./Chair";

import "./style.scss";
import ThongTinDat from "./ThongTinDat";

export default class BaiTapDatGhe extends Component {
  renderContent = () => {
    return chairList.map((ele) => {
      return (
        <div key={ele.hang}>
          <div className="seat">{ele.hang}</div>
          {ele.danhSachGhe.map((chair, idx) => {
            return (
              <Chair
                key={chair.soGhe}
                hang={ele.hang}
                name={idx + 1}
                dangChon={chair.dangChon}
                daDat={chair.daDat}
              />
            );
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1 className="header">Rạp Chiếu Phim Cyber</h1>
        <div className="row">
          <div className="col-8">{this.renderContent()}</div>
          <ThongTinDat className="col-4" />
        </div>
      </div>
    );
  }
}
