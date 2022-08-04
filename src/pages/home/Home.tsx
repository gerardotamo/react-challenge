import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import Dashboard from '../../components/dashboard/Dashboard';
import User from '../../interface/user';
import Post from '../../interface/post';
import Photos from '../../interface/photos';

interface Props {
  underline: boolean
}

const Home = ({ underline }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    console.log(user)
    if (user === null) {
      return navigate("/login", { replace: true });
    } else {
      setUser(JSON.parse(window.localStorage.getItem("user") || '{}'))
    }
    return () => { }
  }, [])

  const [user, setUser] = useState<User>()
  const [posts, setPosts] = useState<Post[]>();
  const [photos, setPhotos] = useState<Photos[]>();

  return (
    <Box sx={{ display: 'block' }}>
      <Grid container style={{}} sx={{}}>
        <Dashboard underline={underline} user={user} />
        <Grid item xs={0.3} />
        <Grid item xs={9.2} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        </Grid>
      </Grid>
    </Box>
  )
}

export default Home;