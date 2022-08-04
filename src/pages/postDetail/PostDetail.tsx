import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { Grid, Box, CardMedia, Avatar } from "@mui/material";
import { Content, PersonalInfo, PostDetailStyled, UserDetail, UserInfo } from './styled'
import Dashboard from '../../components/dashboard/Dashboard';
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
    const auxPost: Post = JSON.parse(localStorage.getItem('post') || '{}');
    const auxPhotos = JSON.parse(localStorage.getItem('photos') || '{}');

    const [loading, setLoading] = useState(false)
    const [helpError, setHelpError] = useState(false)

    return (
        <Box sx={{ display: 'block' }}>
            <Grid container style={{}} >
                <Dashboard user={user} underline={true} />
                <Grid item xs={0.3} />
                <Grid item xs={9.2} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container>
                            <div>
                                <Content>
                                    <div style={{ color: "#C1B5A0", marginBottom: "10px" }}>
                                        {auxPost.title}
                                    </div>
                                    <Grid container >
                                        <Grid item xs={8} style={{ textAlign: 'left', color: '#C1B5A0' }}>

                                            <PostDetailStyled>

                                                <CardMedia
                                                    component="img"
                                                    height="100"
                                                    image="https://picsum.photos/550/120?random=2"
                                                    alt="random"
                                                />
                                                <div style={{ margin: "15px" }}>{auxPost.body}</div>
                                            </PostDetailStyled>
                                        </Grid>
                                        <Grid xs={0.5} />
                                        <Grid item xs={3.5} style={{ textAlign: 'left' }}>
                                            {
                                                user &&
                                                <UserDetail>
                                                    <UserInfo>
                                                        <Avatar
                                                            alt="Remy Sharp"
                                                            src={"https://i.pravatar.cc/600"}
                                                            sx={{ width: 60, height: 60, boxShadow: "5px 5px 8px gray", marginBottom: "8px" }}
                                                        />
                                                        <div>{user.name}</div>
                                                        <div>{user.username}</div>
                                                        <div>{user.email}</div>
                                                    </UserInfo>
                                                    <PersonalInfo>
                                                        <div>{user.phone}</div>
                                                        <div>{user.email}</div>
                                                        <div>{user.address.street}</div>
                                                    </PersonalInfo>
                                                </UserDetail>
                                            }
                                        </Grid>
                                    </Grid>
                                </Content>
                                <div>
                                    {
                                        loading ?
                                            <h3>
                                                LOADING...
                                            </h3>
                                            :
                                            helpError ?
                                                <h3 style={{ color: 'red' }}>
                                                    THERE WAS AN ERROR LOADING THE DATA
                                                </h3>
                                                :
                                                comments && auxPhotos !== null &&
                                                null
                                    }
                                </div>
                            </div>
                        </Grid>
                    </Box>
                </Grid >
            </Grid >
        </Box >
    )
}

export default PostDetail;