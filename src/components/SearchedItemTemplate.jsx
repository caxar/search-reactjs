const SearchedItemTemplate = ({data}) => {

    function createMarkup(data) { // преобразования html сниппеты в Html 
        return {__html: data};
      }

    return (
        <div className="flex flex-col py-3 max-w-[700px]">
            <div className="group cursor-pointer" onClick={() => window.open(data.link)}>
                <div className="flex flex-col truncate text-[#202124]">
                    <span className="text-base">{data.displayLink}</span>
                    {/* <span className="text-sm">{data.formattedUrl}</span> */}
                </div>
                <div className="group-hover:underline text-xl text-[#1a0dab] pt-2">
                    {data.title}
                </div>
                <div className="text-lg text-[#3d5156] leading-6 pt-1" dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)} />
            </div>
        </div>
    );
};

export default SearchedItemTemplate;
