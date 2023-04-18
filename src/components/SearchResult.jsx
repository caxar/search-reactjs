import React from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import Pagination from "./Pagination";
import { Context } from "../utils/ContextApi";

const SearchResult = () => {
    const [result, setResult] = React.useState()
    const { query, startIndex } = useParams() // Получаем содержимое URL запрос(query) и номер страницы(startIndex) для пагинации
    const { imageSearch } = React.useContext(Context) //Получаем стайт из контекста value

    React.useEffect(() => {
        fetchSearchResults()
    }, [query, startIndex, imageSearch]) //отслеживаем изменения 

    
    const fetchSearchResults = () => {
        let payload = {q: query, start: startIndex}
        if(imageSearch) {
            payload.searchType = 'image'
        }
        fetchDataFromApi(payload)
            .then((res) => {
                console.log(res)
                setResult(res)
            })
    }

    // Если запрос существует тогда в result записываем выбранные параметры
    if(!result) return 
        const {items, queries, searchInformation} = result;


    return (
        <div className="flex flex-col min-h-[100vh]">
            <SearchResultHeader />
                <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
                    <div className="flex text-[16px] text-[#70757a] mb-3">
                        {`Результатов: примерно ${searchInformation.formattedTotalResults} (${searchInformation.formattedSearchTime} сек)`}
                    </div>
                    {
                        !imageSearch ? (<>
                            {items.map((item, index) => (
                                <SearchedItemTemplate key={index} data={item} />
                            ))}
                        </>) : (
                            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
                                {items.map((item, index) => (
                                    <SearchedImageItemTemplate key={index} data={item}/>
                                ))}
                            </div>
                        )
                    }
                    <Pagination queries={queries}/>
                </main>
                <Footer />
        </div>
    );
};

export default SearchResult;
