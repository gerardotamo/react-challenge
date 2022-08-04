import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import Dashboard from '../../components/dashboard/Dashboard';
import ListPost from '../../components/listPosts/ListaPost';
import User from '../../interface/user';
import Post from '../../interface/post';
import Photos from '../../interface/photos';
import * as postService from '../../services/posts.service';
import { getPhotos } from '../../services/photos.service';

interface Props {
  underline: boolean
}


const Home = ({ underline }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | undefined>(localStorage.getItem('user') === null ?
    undefined : JSON.parse(localStorage.getItem("user") || "")
  );

  useEffect(() => {
    if (user === undefined) {
      return navigate("/login", { replace: true });
    } else {
      //setUser(JSON.parse(auxuser || '{}'))
    }
    return () => { }
  }, [])

  useEffect(() => {
    const getPostsForIdUser = async () => {
      setLoading(true)
      let data = undefined;
      if (user?.id !== undefined) {
        data = await postService.getPostsForUser((user.id).toString());
      }
      setLoading(false);
      if (data === undefined) {
        setHelpError(true);
        return;
      }
      localStorage.setItem('posts', JSON.stringify(data))
      setHelpError(false);
      setPosts(data);
    }
    const getPhotosForUsers = async () => {
      setLoading(true)
      const data = await getPhotos();
      setLoading(false);
      localStorage.setItem('photos', JSON.stringify(data))
      setPhotos(data);
    }
    getPostsForIdUser();
    getPhotosForUsers();
  }, [user])


  const [posts, setPosts] = useState<Post[]>();
  const [photos, setPhotos] = useState<Photos[]>();

  const [loading, setLoading] = useState<boolean>(false);
  const [helpError, setHelpError] = useState<boolean>(false);

  return (
    <Box sx={{ display: 'block' }}>
      <Grid container style={{}} sx={{}}>
        <Dashboard underline={underline} user={user} />
        <Grid item xs={0.3} />
        <Grid item xs={9.2} style={{}}>
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
                posts && photos &&
                <ListPost posts={posts} photos={photos} />
          }
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home;