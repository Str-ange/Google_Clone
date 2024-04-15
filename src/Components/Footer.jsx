import React from "react";

function Footer() {
  return (
    <footer className="position-fixed bottom-0 w-100">
      <div className="country">India</div>
      <div className="footer-options d-flex justify-content-evenly justify-content-xl-between flex-wrap">
        <div className="d-flex justify-content-evenly justify-content-xl-around flex-wrap">
          <a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">
            About
          </a>
          <a href="https://www.google.co.in/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
            Advertising
          </a>
          <a href="https://www.google.co.in/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">
            Business
          </a>
          <a href="https://google.com/search/howsearchworks/?fg=1">
            How Search works
          </a>
        </div>
        <div className="d-flex justify-content-evenly justify-content-xl-around flex-wrap">
          <a href="https://policies.google.com/privacy?hl=en-IN&fg=1">
            Privacy
          </a>
          <a href="https://policies.google.com/terms?hl=en-IN&fg=1">Terms</a>
          <a href="">Settings</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
