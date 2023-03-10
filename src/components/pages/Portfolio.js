import React from 'react';

function Portfolio(){
    return (
        <div>
            <h2> My Work</h2>
            <div class = 'card'>
                <a href= "https://sephadeus.github.io/DAAM-App/homepage.html">
                    <h3>Dinner and a Movie App</h3>
                </a>
            </div>
            <div class = 'card'>
                <a href = "https://af-pwa-text-editor.herokuapp.com/">
                    <h3>Progressive Web Application: Text Editor</h3>
                </a>
            </div>
            <div class = 'card'>
                <a href = "https://github.com/anafede/NoSQL-Social-Network-API">
                    <h3>API Work using NoSQL (github repo)</h3>
                </a>
            </div>
        </div>
    )
}
export default Portfolio;