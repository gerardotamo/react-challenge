import React from 'react'
import Post from '../../interface/post';
import Photos from '../../interface/photos';
import CardPost from '../card/CardPost'
import { List } from './styled'

interface Props {
    posts: Post[],
    photos: Photos[]
}

const ListPost = ({ posts, photos }: Props) => {

    return (
        <List>
            {
                posts.map((post: Post, index: number) => {
                    return (
                        <CardPost key={post.id} post={post} imageurl={photos[index].url}
                            posts={posts} photos={photos}
                        />
                    )
                })
            }
        </List>
    )
}

export default ListPost;
