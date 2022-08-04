import Post from "../../interface/post";
import Photos from "../../interface/photos";
import { Avatar, Grid } from '@mui/material'
import {
    useNavigate, Route
} from "react-router-dom";
import { CardPost } from './styled'
interface Props {
    posts: Post[],
    photos: Photos[],
    post: Post,
    imageurl: string,
}

const Cardcomponent = ({ post, imageurl }: Props) => {

    const navigate = useNavigate();

    return (

        <CardPost onClick={() => {
            localStorage.setItem('post', JSON.stringify(post));
            navigate("/" + post.id, { replace: true });
        }} >
            <Grid container sx={{
                justifyContent: 'center',
            }}>
                <Grid item xs={2} style={{}}>
                    <Avatar
                        alt="Remy Sharp"
                        src={imageurl}
                        sx={{ width: 60, height: 60, boxShadow: "5px 5px 8px gray" }}
                    />
                </Grid>
                <Grid item xs={10} sx={{ textAlign: 'left', }}>
                    <h5>{post.title}</h5>
                    <h6>{post.body}</h6>
                </Grid>
            </Grid>
        </CardPost>

    )
}

export default Cardcomponent;