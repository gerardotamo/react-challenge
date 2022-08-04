import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import User from '../../interface/user';
import Post from '../../interface/post';
import { getCommentsForPost } from '../../services/comments.service';
const PostDetail = () => {
    const postID = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState<User | undefined>(localStorage.getItem('user') === null ?
        undefined : JSON.parse(localStorage.getItem("user") || "")
    );
    useEffect(() => {
        if (user === undefined) {
            return navigate("/login", { replace: true });
        }
        return () => { }
    }, [])

    useEffect(() => {
        const getComments = async () => {
            setLoading(true)
            let resp = await getCommentsForPost(postID.postId?.toString())
            setLoading(false)
            if (resp === undefined) {
                setHelpError(true);
                return;
            }
            setComments(resp)
        }
        getComments();
    }, [])

    const [comments, setComments] = useState<Comment[]>();

    const [loading, setLoading] = useState(false)
    const [helpError, setHelpError] = useState(false)

    return (
        <div>PostDetail</div>
    )
}

export default PostDetail;