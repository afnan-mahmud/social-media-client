import { Comment, Favorite, FavoriteBorder, Share, ShareOutlined, SmsOutlined } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Comments from './Comments';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Post = ({data}) => {
    const {title , body, id} = data;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const Url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    const [comment , setComment] = useState([]);

    useEffect(()=>{
        fetch(Url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])

    return (
            <Card sx={{margin:5}}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    title={title}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://material-ui.com/static/images/cards/paella.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {body}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
                    </IconButton>

                    <IconButton onClick={handleOpen} aria-label="comments">
                    <Checkbox icon={<SmsOutlined />} checkedIcon={<Comment sx={{color:'gray'}} />} />
                    </IconButton>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        {
                            comment.map(cm => <Comments comment={cm} />)
                        }
                        </Box>
                    </Modal>

                    <IconButton aria-label="share">
                    <Checkbox icon={<ShareOutlined />} checkedIcon={<Share sx={{color:'blue'}} />} />
                    </IconButton>
                </CardActions>
            </Card>
    );
};

export default Post;