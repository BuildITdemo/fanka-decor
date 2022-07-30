import React from 'react'
import classes from './Home.module.scss';

const Home = () => {
    return (
        <div className={`${classes.container} ${classes['flex-direction']}`}>
            <div className={classes.container__image}>
                <h1>Home</h1>
            </div>
            <div className={classes.container__infos}>
                <p>Asd</p>
            </div>
        </div>
    )
}

export default Home