import PostListItem from '../post-list-item/post-list-item';

const PostList = () => {
    return (
        <ul className="app-list">
            <PostListItem label="I want to know English very well"/>
            <PostListItem label="I want to speak English without mistakes"/>
            <PostListItem label="I want to know React very well"/>
        </ul>
    )
}

export default PostList;