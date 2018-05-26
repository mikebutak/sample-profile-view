import React from 'react';
import classes from './Header.css';

const header = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-sm bg-light" id={classes.navH}>
            <ul className="nav navbar-nav" id={classes.absCenter}>
                <li className="nav-item">
                    <a className="navbar-brand" id={classes.Title}>People With Friends</a>
                </li>
            </ul>
                <button 
                    className="navbar-toggler ml-auto"
                    data-toggle="collapse" 
                    data-target="#navbarMenu"
                    id={classes.Userbtn}
                    >
                    <i class="fas fa-user"></i>
                </button>
                <div className="collapse navbar-collapse">
                <ul className="nav navb ar-nav ml-auto">
                    <li className="nav-item">
                        <button type="button" className="btn btn-dark">Random Person</button>
                    </li>
                </ul>
                </div>
        </nav>
    )
}


export default header;


        // <div>
        // <nav className="navbar navbar-dark bg-light">
        // <div className="container">
        //     <div className="row" id={classes.myRow}>
        //         <div className="col-3">
        //         </div>
        //         <div className="col-6">
        //             <a className="navbar-brand">People With Friends</a>
        //         </div>
        //         <div className="col-3 ml-auto">
        //             <button type="button" className="btn btn-dark">Random Person</button>
        //         </div>
        //     </div>
        // </div>
        // </nav>

        // <nav className="navbar navbar-dark bg-light">
        //             <a className="navbar-brand" id={classes.brand}>People With Friends</a>
        //             <button type="button" className="btn btn-dark">Random Person</button>
        // </nav>