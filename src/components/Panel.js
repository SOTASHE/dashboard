import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './Panel.css'

function Panel(props) {
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className="panel">
            <div className="header">
                <h3>{props.title}</h3>
            </div>

            <button className="add-button">{props.btnText}</button>
            <div className="Container">
            </div>
        </div>

    )
}

export default Panel;