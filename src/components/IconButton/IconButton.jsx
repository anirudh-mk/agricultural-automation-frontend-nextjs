import React from "react";
import "./IconButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function IconButton({ onClick, icon, text }) {
    return (
        <div className="icon-button" onClick={onClick}>
            <FontAwesomeIcon icon={icon} size="lg" style={{ height: 18 }} />
            <p>{text}</p>
        </div>
    );
}

export default IconButton;
