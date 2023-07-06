import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

const Comments = ({comment}) => {
    const {name, body} = comment
    return (
        <List sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary={name}
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Comments- 
                    </Typography>
                    {body}
                    </React.Fragment>
                }
                />
            </ListItem>
        </List>
    );
};

export default Comments;