import React from 'react'
import { Grid, Box, Link } from "@mui/material";
import User from '../../interface/user';

interface Props {
    underline: boolean,
    user: User | undefined
}

const Dashboard = ({ underline, user }: Props) => {
    return (
        <Grid item xs={2.5} style={{
            background: "#2D4440",
            color: '#C1B59F',
            height: '100vh'
        }}>
            <Box sx={{}} >
                <Grid container style={{
                    flex: 1, height: '80vh',
                    minHeight: '120px', flexDirection: 'column'
                }}>
                    <Link href="/" underline={underline ? "always" : 'hover'} color="inherit">
                        <h3>
                            My posts
                        </h3>
                    </Link>
                    <Link href="/allposts" underline={underline ? "hover" : 'always'} color="inherit">
                        <h3>All posts</h3>
                    </Link>
                </Grid>
                <Grid container style={{
                    flex: 1, height: '20vh',
                    minHeight: "120px",
                    justifyContent: 'center',

                }}
                >
                    <div>
                        {user && <h3>
                            Logged in as: {user.username}
                        </h3>}
                        <h2 >
                            <a href="/login" onClick={() => {
                                localStorage.removeItem('user')
                            }} style={{ textDecoration: 'none', color: '#c69433' }}>LOGOUT</a>
                        </h2>
                    </div>
                </Grid>
            </Box>
        </Grid>
    )
}

export default Dashboard