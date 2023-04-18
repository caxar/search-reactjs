import React from 'react'

import Logo from "../assets/google-logo.png";
import LogoWhite from '../assets/google-logo-white.png'
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import { Context } from '../utils/ContextApi'


const Home = () => {

    const { darkMode } = React.useContext(Context);

    return (
        <div className={`flex h-[100vh] flex-col ${darkMode ? 'dark' : ''}`}>
            <HomeHeader />
            <main className="grow flex justify-center dark:bg-[#202124]">
                <div className="w-full px-5 flex flex-col items-center mt-44">
                    {
                        darkMode ?<img className="w-[172px] md:w-[272px] mb-8" src={LogoWhite} alt="google logo" /> 
                        : <img className="w-[172px] md:w-[272px] mb-8" src={Logo} alt="google logo" />
                    }
                    {/* <img className="w-[172px] md:w-[272px] mb-8" src={LogoWhite} alt="google logo" /> */}
                        <SearchInput />
                        <div className="flex gap-2 text-[#3c4043] mt-8">
                            <button 
                             className="h-9 px-4 bg-[#f8f9fa] text-sm 
                                rounded-md border border-[#f8f9fa] hover:border-[#dadce0]
                                 hover:shadow-c dark:text-[#e8eaed] dark:bg-[#303134] dark:border-[#303134]">Поиск в Google</button>
                            <button className="h-9 px-4 bg-[#f8f9fa] text-sm 
                            rounded-md border border-[#f8f9fa] hover:border-[#dadce0]
                             hover:shadow-c dark:text-[#e8eaed] dark:bg-[#303134] dark:border-[#303134]">Мне повезёт!</button>
                        </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;
