import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import SearchBar from './components/search_bar';
import YT_API_KEY from './api_key/api_key';

const API_KEY = YT_API_KEY;

YTSearch({key: API_KEY, term: 'chris harris drives'}, function(data) {
    console.log(data);
});



const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
