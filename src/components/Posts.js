import { Post } from './Post';

export function Posts({ posts, deletePost }) {
    return (
        <div>
            {posts.map((post) => <Post
                key={post.id}
                name={post.name}
                id={post.id}
                deletePost={deletePost}
            />)}
        </div>
    )
}