import { Post } from './Post';

export function Posts({ posts, cb }) {
    return (
        <div>
            {posts.map((post) => <Post key={post.id} name={post.name} cb={cb} />)}
        </div>
    )
}