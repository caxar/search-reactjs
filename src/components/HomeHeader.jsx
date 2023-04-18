import React from 'react'
import ProfileIcon from "./ProfileIcon";
import { TbGhost } from "react-icons/tb"
import { TbGhostFilled } from "react-icons/tb"
import { Context } from '../utils/ContextApi'

const HomeHeader = () => {
    const {darkMode, setDarkMode} = React.useContext(Context); //достаем из контекста useState

    const handleDarkMode = () => {
        setDarkMode(!darkMode) //меняем значения state false/true 
    }


    return (
        <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5 dark:bg-[#202124]">
            <div className="flex gap-4">
                    <span onClick={() => handleDarkMode()} className="cursor-pointer dark:text-[#fff]">
                        {darkMode ? <TbGhost size={25} /> : <TbGhostFilled size={25} /> }</span>
                    <span className="text-black/[0.90] line-height text-[15px] hover:underline cursor-pointer dark:text-[#fff]">Почта</span>
                    <span className="text-black/[0.90] line-height text-[15px] hover:underline cursor-pointer dark:text-[#fff]">Картинки</span>
            </div>
            <div>
                <ProfileIcon />
            </div>
        </header>
    );
};

export default HomeHeader;
