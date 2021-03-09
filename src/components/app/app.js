import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';

const App = () => {

    const data = [
        {label: 'I want to know English very well', important: true, id: 'qqq'},
        {label: 'I want to speak English without mistakes', important: false, id: 'www'},
        {label: 'I want to know React very well', important: false, id: 'eee'}
    ]; 

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel">
            <SearchPanel />
            <PostStatusFilter />
            </div>
            <PostList  posts={data}/>
            <PostAddForm />
        </div>
    )
}

export default App;

