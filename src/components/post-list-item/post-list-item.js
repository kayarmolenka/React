import React from "react";

export default class PostListItem extends React.Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        let classNames = 'app-list-item';
        
        if(important) {
            classNames += ' important';
        }

        if(like) {
            classNames += ' like';
        }
        
        return (
            <div className={classNames}>
            <span
                className="app-list-item-label"
                onClick={onToggleLiked}>
                {label}
            </span>
            <div>
                <button 
                    type="button"
                    className="btn-star"
                    onClick={onToggleImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button 
                    type="button" 
                    className="btn-trash"
                    onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
        )
    }
}

