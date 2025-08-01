import './Posts.css'
import { useParams } from 'react-router'

const Post = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>Post {id}</h1>
        </div>
    )
}

export default Post