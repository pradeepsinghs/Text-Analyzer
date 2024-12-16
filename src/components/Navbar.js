import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand">Text Utility</a>
                    <div className={`form-check form-switch text-${props.mode === "light"? "dark" : "light"}`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onClick={props.toggleBtn}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode === "light"? "dark" : "light"} Mode`}</label>
                    </div>
                </div>
            </nav>
        </div>
    )
}
