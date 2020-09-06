import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
    return (
        <Link to={props.to} style={{ textDecoration: "none", color: "white" }}>
            {props.children}
        </Link>
    )
}