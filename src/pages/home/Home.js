import React from 'react'
import classes from './Home.module.scss';

const Home = () => {
    return (
        <div className={`${classes.container} ${classes['flex-direction']}`} id='home'>
            <div className={classes.container__image}>
                <img className='home' src={require('../../assets/images/home_img.png')} alt="" />
            </div>
            <div className={classes.container__infos}>
                <h2>Fanka Decor</h2>
                <img className={classes.container__infos__logo} src={require('../../assets/images/fanka_decor_logo.png')} alt="" />
                <div className={classes.container__infos__social}>
                    <img src={require('../../assets/images/facebook.png')} alt="" />
                    <img src={require('../../assets/images/instagram.png')} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home