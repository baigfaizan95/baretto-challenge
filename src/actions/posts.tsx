import { API } from '../utils';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_REJECTED = 'FETCH_POSTS_REJECTED';
export const FETCH_POSTS_FULFILLED = 'FETCH_POSTS_FULFILLED';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_PENDING = 'FETCH_POST_PENDING';
export const FETCH_POST_REJECTED = 'FETCH_POST_REJECTED';
export const FETCH_POST_FULFILLED = 'FETCH_POST_FULFILLED';

export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS';
export const FETCH_POST_COMMENTS_PENDING = 'FETCH_POST_COMMENTS_PENDING';
export const FETCH_POST_COMMENTS_REJECTED = 'FETCH_POST_COMMENTS_REJECTED';
export const FETCH_POST_COMMENTS_FULFILLED = 'FETCH_POST_COMMENTS_FULFILLED';

export const CLEAR_POST = 'CLEAR_POST';

export const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: API.getRequest('https://jsonplaceholder.typicode.com/posts')
});

export const fetchPost = (id: number) => ({
  type: FETCH_POST,
  payload: API.getRequest(`https://jsonplaceholder.typicode.com/posts/${id}`)
});

export const fetchComments = (id: number) => ({
  type: FETCH_POST_COMMENTS,
  payload: API.getRequest(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  )
});

export const clearPost = () => ({
  type: CLEAR_POST
});
