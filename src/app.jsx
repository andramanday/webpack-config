import React from 'react';
import './styles/index.scss';
import Recipes from './components/recipes'
import ImgProfile from './images/profile-img.png';

const App = () => {
    return(
        <>
        <img src={ImgProfile} width="50%"/>
        <div className="hero">  
                <Recipes/>
        </div>
        </>
    )
}
export default App;