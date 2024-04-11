import { useState } from "react";

export default function Header() {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <>
            <header className='@container'>
                <div className='text-center bg-blue-300 text-sm text-white'><span>Page is still under construction 🛠️</span></div>
                <div className='flex flex-row items-center p-3 justify-between lg:justify-center lg:space-x-40'>
                    <button id='menuBtn' onClick={toggleClass}>
                        <i className='block lg:hidden fa fa-bars' aria-hidden='true'></i>
                    </button>
                    <i className='fa fa-search' aria-hidden='true'></i>
                    <img className='w-[120px] h-[40px]' src='https://dummyimage.com/120x40/000/fff' alt='brand' loading="lazy" />
                    <i className='fa fa-shopping-bag' aria-hidden='true'></i>
                </div>
                <div className='hidden lg:block p-3'>
                    <ul className='@container header-nav flex flex-row justify-center space-x-12'>
                        <li>HOME</li>
                        <li>COMICS</li>
                        <li>TCG</li>
                        <li>GOODS</li>
                        <li>NEWS</li>
                        <li>SALE</li>
                        <li>ABOUT</li>
                    </ul>
                </div>

                <div id='sideMenu' className={`${isActive ? null: 'sideMenuShow'} ${'block lg:hidden'}`}>
                    <aside className='absolute flex flex-col z-20 py-[5rem] h-screen w-3/4 bg-white min-h-screen'>
                        <div className='flex-1'>
                            <ul>
                                <a><li className='side-item'>HOME</li></a>
                                <a><li className='side-item'>COMICS</li></a>
                                <a><li className='side-item'>TCG</li></a>
                                <a><li className='side-item'>GOODS</li></a>
                                <a><li className='side-item'>NEWS</li></a>
                                <a><li className='side-item'>SALE</li></a>
                                <a><li className='side-item'>ABOUT</li></a>
                            </ul>
                        </div>
                        <div className='flex items-end space-x-2 bg-slate-200 w-auto h-28 p-4'>
                            <a className='social-icon inline-flex justify-center items-center'><i className='fa fa-twitter'></i></a>
                            <a className='social-icon inline-flex justify-center items-center'><i className='fa fa-facebook'></i></a>
                            <a className='social-icon inline-flex justify-center items-center'><i className='fa fa-instagram'></i></a>
                        </div>
                    </aside>
                </div>
            </header>

        </>
    );
}
