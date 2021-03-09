import PostListItem from '../post-list-item/post-list-item';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem {...item} />
            </li>
        )
    })
    return (
        <ul className="app-list">
            {elements}
        </ul>
    )
}

export default PostList;