import React from 'react'
import { List } from './styled'
import CardComment from '../card/CardComment'
import Comment from '../../interface/comment';
import Photos from '../../interface/photos';

interface Props {
    comments: Comment[],
    photos: Photos[]
}

const ListComment = ({ comments, photos }: Props) => {
    return (
        <List>
            {
                comments.map((comment: Comment, index: number) => {
                    return (
                        <CardComment key={comment.id} comment={comment} imageurl={photos[index].url}
                        />
                    )
                })
            }
        </List>
    )
}

export default ListComment;
