import React from "react";
import AppsPopUp from "./AppsPopUp";

function Header() {
  return (
    <div className="hd-main">
      <div className="hd-row d-flex justify-content-end align-items-center">
        <div className="hd-col">
          <div className="hd-item">
            <a href="https://mail.google.com/mail/&obgl" className="">
              Gmail
            </a>
          </div>
          <div className="hd-item">
            <a
              href="https://www.google.co.in/imghp?hl=en&ogbl"
              className="hd-item-link"
            >
              Images
            </a>
          </div>
        </div>
        <div className="hd-col">
          <div className="hd-item apps-btn">
            <img
              src="https://ssl.gstatic.com/gb/images/bar/al-icon.png"
              alt=""
              height="24"
              width="24"
              role="button"
              className=""
            />
          </div>
          <AppsPopUp />
          <div className="hd-item">
            <a
              href="https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.co.in/&ec=GAZAmgQ"
              className="sign-btn"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
