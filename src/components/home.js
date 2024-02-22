import React from "react";
import "./css/home.css";
import "./css/img.css";
import Audi from "./img/audi1.jpg";
import Benz from "./img/benz.jpg";
import BMW from "./img/bmw.png";

import Navbar from './navbar';

// import { UserOutlined } from '@ant-design/icons';
// import { Input } from 'antd';

function home() {
  return (
    <>
    <Navbar />
    <div>
      <div className="morphing">
        <div className="word">Welcome</div>
        <div className="word">To</div>
        <div className="word">My</div>
        <div className="word">Website</div>
      </div>
      <div className="img-p">
          <a href="https://www.audi.co.th/sea/web/th.html">
            <img className="img-i" alt="Audi" src={Audi} />
          </a>
        <a href="https://www.mercedes-benz.co.th/en/passengercars.html">
          <img className="img-i" alt="Benz" src={Benz} />
        </a>
        <a href="https://www.bmw.co.th/en/home.html">
          <img className="img-i" alt="BMW" src={BMW} />
        </a>
      </div>
      </div>
      </>
  );
}
export default home;
