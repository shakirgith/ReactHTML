import React from "react";

function Footer() {
  return (
    <>
      <footer style={{ backgroundImage: "url(assets/images/footer-bg.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                Copyright © 2022 DigiMedia Co., Ltd. All Rights Reserved.
                <br />
                Design:{" "}
                <a href="#" target="_parent" title="free css templates">
                  TemplateMo
                </a>
                <br />
                Distributed By:{" "}
                <a href="#" target="_blank" title="free css templates">
                  ThemeWagon
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
