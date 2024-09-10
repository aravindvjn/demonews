import React from "react";

const Header = (props) => {
  const getPage=(event)=>{
props.setCurrentPage(event.target.id)
  }
  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="news-in">
              <p
                href="/"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none mx-5"
              >
                AV NEWS
              </p>
            </div>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 pt-3 header-short-cuts">
              <li>
                <p id="1" onClick={getPage} className="nav-link px-2">
                  Home
                </p>
              </li>
              <li>
                <p id="2" onClick={getPage} className="nav-link px-2">
                  Health
                </p>
              </li>
              <li>
                <p id="3" onClick={getPage} className="nav-link px-2">
                  Business
                </p>
              </li>
              <li>
                <p id="4" onClick={getPage} className="nav-link px-2">
                  Entertainment
                </p>
              </li>
              <li>
                <p id="5" onClick={getPage} className="nav-link px-2">
                  Sports
                </p>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
