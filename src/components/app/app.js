import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'I want to know English very well', important: true, id: 'qqq'},
                {label: 'I want to speak English without mistakes', important: false, id: 'www'},
                {label: 'I want to know React very well', important: false, id: 'eee'}
            ] 
        };
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            data.splice(index, 1);
            return {
                data: data
            }
        });
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <div className="search-panel">
                <SearchPanel />
                <PostStatusFilter />
                </div>
                <PostList  
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
                <PostAddForm />
            </div>
        )
    }
}



