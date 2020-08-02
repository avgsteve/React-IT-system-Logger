import React from 'react';


const Preloader_progressBar = () => {

    //The preloader is an animated line used to let user know there's something being currently loaded and NNED TO WAIT
    //ref:  https://materializecss.com/preloader.html

    return (
        <div className="progress blue lighten-4">
            <div className="indeterminate"></div>
        </div>
    );
};


export default Preloader_progressBar;
