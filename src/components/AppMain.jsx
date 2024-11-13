import PostsCards from './postsCards/postsCards'
import posts from '../database/posts'

export default function AppMain(){
    return(
        <main>
            <div className="container">
                {posts.map(post => <PostsCards key={post.id} data={post}/>)}
            </div>
        </main>
    )
}