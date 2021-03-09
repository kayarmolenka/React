const PostAddForm = () => {
    return (
        <form className="bottom-panel">
            <input
                type="text"
                placeholder="О чём вы думаете сейчас?"
                className="form-control"
            />
            <button
                type="submit"
                className="btn">
                Добавить</button>
        </form>
    )
}

export default PostAddForm;