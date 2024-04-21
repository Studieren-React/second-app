import './Post.css';

export function Post({ name, id, deletePost }) {
    return (
        <div className="Post">
            <h2 className="PostTitle">{name}</h2>
            <button onClick={() => deletePost(id)} className="PostButton">delete</button>
        </div>
    )
}