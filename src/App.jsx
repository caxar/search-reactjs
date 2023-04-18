import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

// AIzaSyBt_GzbkDdhpLh4tvjOaA1v-P9YsEQLR34
// 91e139fe59cc84689

function App() {
    return (
        <AppContext>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/:query/:startIndex" element={<SearchResult />}/>
                </Routes>
             </BrowserRouter>
        </AppContext>
    );
}

export default App;
