import React from "react";

function Header() {
  return (
    <header className="header">
      <img src="img/logo.png" alt="Nexter Logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seenon-text">As seen on</div>
      <div className="header__seenon-logos">
        <img src="img/logo-bbc.png" alt="BBC logo" />
        <img src="img/logo-forbes.png" alt="Forbes logo" />
        <img src="img/logo-techcrunch.png" alt="Techcrunch logo" />
        <img src="img/logo-bi.png" alt="Business Insider logo" />
      </div>
    </header>
  );
}

export default Header;
