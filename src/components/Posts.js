import { Post } from './Post';

export function Posts({ posts }) {
    return (
        <div>
            {posts.map((post) => <Post key={post.id} name={post.name} />)}
        </div>
    )
}