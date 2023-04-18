import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
    const { query } = useParams(); // достаем из url запрос 
    const [searchQuery, setSearchQuery] = React.useState(query || '');
    const navigate = useNavigate();

    const searchQueryHandler = (e) => {
        if(e.key === 'Enter' && searchQuery.length > 0) {
            navigate(`/${searchQuery}/${1}`) // если сделали запрос тогда navigate перенаправляет на страницу поиск
            // и в URL вности запрос и страницу на старнице App через Route показываем страницу SearchResult
        }
    }

    return (
        <div className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0
        focus-within:shadow-c focus-within:border-0 dark:bg-[#303134] dark:border-none dark:shadow-[0_1px_6px_0_#171717]">
            <AiOutlineSearch size={18} className="dark:text-[#9aa0a6]"/>
            <input type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                className="grow outline-0 text-black/[0.90] dark:bg-[#303134] dark:text-[#ffffff]" 
                placeholder="Введите поисковой запрос или URL"/>
                <div className="flex items-center gap-3">
                    {searchQuery ? <IoMdClose onClick={() => setSearchQuery('')} className="cursor-pointer text-xl dark:text-[#9aa0a6]"/> : ''}
                    <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="micro-recorder" />
                    <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="photo-find" />
             </div>
        </div>
    );
};

export default SearchInput;
