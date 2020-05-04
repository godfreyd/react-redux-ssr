import React from 'react';

const HomePage = () => {
    
    return (
        <div className="center-align" style={{ marginTop: '200px'}}>
            <h3>Welcome</h3>
            <p>Check out these awesome features</p>
            <button className="waves-effect waves-light btn" onClick={() => console.log('Hi there!')}>Press me!</button>  

        </div>
    );
}

export default { component: HomePage };