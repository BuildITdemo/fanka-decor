import React, { useEffect, useState, useLayoutEffect } from 'react'
import classes from './Header.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
// import { Link, useNavigate } from 'react-router-dom';
import { Link, } from 'react-scroll';

const Header = () => {
    // const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: null,
        height: null
    });

    useLayoutEffect(() => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }, [])
    
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if(size.width > 768) {
            setMenuOpen(false);
        }
    }, [size.width, size.height])

    const menuToggleHandler = () => {
        setMenuOpen(state => !state)
    }

    const ctaClickHandler = () => {
        console.log(size.width < 768);
        menuToggleHandler();
        // navigate('/fanka-decor/hivatalos');
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <h2 className={classes.header__content__logo}>FANKA DEKOR</h2>
                <nav 
                    className={`
                    ${classes.header__content__nav}
                    ${menuOpen && size.width < 768 ? classes.isMenu : ""}`
                }>
                    <ul>
                        {/* <li>
                            <Link to='/fanka-decor/tajekoztato' onClick={menuToggleHandler}>Tájékoztató</Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="infos"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                Tájékoztató
                            </Link>
                        </li>
                        {/* <li>
                            <Link to='/fanka-decor/arak' onClick={menuToggleHandler}>Árak</Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="prices"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                Árak
                            </Link>
                        </li>
                        {/* <li>
                            <Link to='/fanka-decor/szallitasi-informaciok' onClick={menuToggleHandler}>Szállítási információk</Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="delivery"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                Szállítás
                            </Link>
                        </li>
                        {/* <li>
                            <Link to='/fanka-decor/rolam' onClick={menuToggleHandler}>Rólam</Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="aboutme"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                Rólam
                            </Link>
                        </li>
                    </ul>
                    <button onClick={ctaClickHandler}>
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            Hivatalos
                        </Link>
                    </button>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler} /> : <AiOutlineClose onClick={menuToggleHandler} />}
                </div>
            </div>
        </header>
    )
}

export default Header