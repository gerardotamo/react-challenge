import React from 'react'
import Comment from "../../interface/comment";
import { Avatar, Grid } from '@mui/material'
import { CardC } from './styled'
interface Props {
    comment: Comment,
    imageurl: string,
}

const CardComment = ({ comment, imageurl }: Props) => {
    return (
        <CardC>
            <Grid container>
                <Grid item xs={2} >
                    <Avatar
                        alt="Remy Sharp"
                        src={imageurl}
                        sx={{ width: 60, height: 60, boxShadow: "5px 5px 8px gray" }}
                    />
                </Grid>
                <Grid item xs={10} style={{ textAlign: 'left', }}>
                    <Grid container>
                        <Grid item xs={6} style={{}}>
                            <h5>{comment.name}</h5>
                        </Grid>
                        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
                            <h5>{comment.email}</h5>
                        </Grid>
                    </Grid>
                    <h6 style={{ marginTop: '-7px' }}>{comment.body}</h6>
                </Grid>
            </Grid>
        </CardC>
    )
}

export default CardComment;