import React from 'react';
import "./Header.css";
// functional component
function Header() {
    return (
        <div className="header">
            
            {/* Youtube logo*/}
            <div className="header__logo">
            <h1>Logo</h1>
            </div>
            {/* Search box */}
            <div className="header__search">
            <input type="text"/>
            <button>Search</button>
            </div>

            {/* Right side logos*/}
            <div className="header__rightlogos">
            <h1>Right logos</h1>
            </div>
        </div>
    )
}

export default Header;
