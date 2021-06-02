import React from "react";

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel">
            <input
                type="text"
                placeholder="О чём вы думаете сейчас?"
                className="form-control"
            />
            <button
                type="submit"
                className="btn"
                onClick={() => onAdd('Hello')}>
                Добавить</button>
        </div>
    )
}

export default PostAddForm;