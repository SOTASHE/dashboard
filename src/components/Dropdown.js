import React, { useState } from 'react';
import * as Fa from 'react-icons/fa';

function Dropdown() {
    const [showMenu, setshowMenu] = useState(false);

    const handleShowClick = () => {
        setshowMenu(!showMenu);
    }
    return (
        <div className="dropdown">
            <button type="button" class="button" onClick={handleShowClick}>
                ☰
  </button>
            {showMenu && (
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            )}
        </div>
    );
}
export default Dropdown;