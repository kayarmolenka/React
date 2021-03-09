import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';

const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel">
            <SearchPanel />
            <PostStatusFilter />
            </div>
            <PostList />
            <PostAddForm />
        </div>
    )
}

export default App;

