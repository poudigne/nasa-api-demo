import ImageOfTheDay from "./nasa/ImageOfTheDay";
import Sidebar from './Sidebar'
import React from 'react';

const MainComponent = (props) => {

    return (
        <>
            <Sidebar />
            <div className="app">
                {props.children}
            </div>
        </>
    );

}
export default MainComponent;