import logo from "./logo.svg";
// import "./App.css";

import FunctionComponent from "./components/DemoComponent/FunctionComponent";
import ClassComponent from "./components/DemoComponent/ClassComponent";
import Home from "./components/BaiTapLayout/Home";
import DataBinding from "./components/DataBinding/DataBinding";
import HandleEvent from "./components/HandleEvent/HandleEvent";
import RenderWithCondition from "./components/RenderWithCondition/RenderWithCondition";
import Layout from "./components/BaiTapLayout2/Layout";
import State from "./components/State/State";
import BaiTapXe from "./components/BaiTapXe/BaiTapXe";
import Styling from "./components/Styling/Styling";
import BaiTapStyling from "./components/BaiTapStyling/BaiTapStyling";
import RenderWithArray from "./components/RenderWithArray/RenderWithArray";
import BaiTapPhim from "./components/BaiTapPhim/BaiTapPhim";
import ParentProps from "./components/Props/ParentProps";
import BaiTapGiay from "./components/BaiTapGiay/BaiTapGiay";
import BaiTapDienThoai from "./components/BaiTapDienThoai/BaiTapDienThoai";
import DemoRedux from "./components/DemoRedux/Parent";
import BaiTapDienThoaiRedux from "./components/BaiTapDienThoaiRedux/BaiTapDienThoai";
import BaiTapTuVung from "./components/BaiTapTuVung/BaiTapTuVung";
import LifeCycle from "./components/LifeCycle/Parent";
import BaiTapDatGhe from "./components/BaiTapDatGhe/BaiTapDatGhe";
import BaiTapQuanLyNguoidung from "./components/BaiTapQuanLiNguoiDung/BaiTapQuanLyNguoiDung";

function App() {
  return (
    <div className="App">
      {/* <FunctionComponent></FunctionComponent>
      <FunctionComponent />
      <ClassComponent />
      <Home />
      <DataBinding />
      <HandleEvent />
      <RenderWithCondition />
      <Layout />
      <State />
      <BaiTapXe />
      <Styling />
      <BaiTapStyling />
      <RenderWithArray />
      <BaiTapPhim />
      <ParentProps />
      <BaiTapGiay />
      <BaiTapDienThoai />
      <DemoRedux /> */}
      {/* <BaiTapDienThoaiRedux /> */}
      {/* <BaiTapTuVung /> */}
      {/* <LifeCycle /> */}
      {/* <BaiTapDatGhe /> */}
      <BaiTapQuanLyNguoidung />
    </div>
  );
}

export default App;
