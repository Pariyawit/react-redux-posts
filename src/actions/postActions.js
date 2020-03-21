import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
  console.log('fetching');
  axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    const posts = res.data;
    dispatch({
      type: FETCH_POSTS,
      payload: posts
    });
  });
};

export const createPost = postData => dispatch => {
  console.log('action called');
  axios
    .post('/posts', postData)
    .then(res => {
      const post = res.data;
      console.log(post);
      dispatch({
        type: NEW_POST,
        payload: post
      });
    })
    .catch(err => console.log(err));
};
