const PostListItem = (props) => {
    return (
        <li className="app-list-item">
            <span className="app-list-item-label">
                {props.label}
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
        </li>
    )
}

export default PostListItem;