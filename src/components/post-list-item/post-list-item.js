const PostListItem = ({label, important = false}) => {

    let classNames = 'app-list-item';
    if(important) {
        classNames += ' important';
    }

    return (
        <div className={classNames}>
            <span className="app-list-item-label">
                {label}
            </span>
            <div>
                <button 
                    type="button"
                    className="btn-star">
                    <i className="fa fa-star"></i>
                </button>
                <button 
                    type="button" 
                    className="btn-trash">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
}

export default PostListItem;