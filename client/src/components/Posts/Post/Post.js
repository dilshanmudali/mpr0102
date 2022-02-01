import React from 'react'
import useStyles from './styles'
import {Card, CardAction, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAl'
import DeleteIcon from '@material-ui/icons/DeleteIcon'
import MoreHorizIcon from '@material-ui/icons/MoreHorizIcon'

const Post = ({post}) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button></Button>
            </div>
        </Card>
    )
}

export default Post
