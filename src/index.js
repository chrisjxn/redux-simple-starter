require('dotenv').config();
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import SearchBar from './components/search_bar';

const API_KEY = process.env.API_KEY



const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
