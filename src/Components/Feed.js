import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Post from './Post';

const Feed = () => {
    const Url = 'https://jsonplaceholder.typicode.com/posts';
    const [data , setData] = useState([]);
    useEffect(()=> {
        fetch(Url)
        .then(res => res.json())
        .then(data => setData(data))
    }, [])


    return (
        <Box flex={4} p={2}>
            {
                data.map((post) => <Post data={post} />)
            }
        </Box>
    );
};

export default Feed;