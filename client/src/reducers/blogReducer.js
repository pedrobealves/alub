import {
  ADD_BLOG_POST,
  GET_BLOG_POSTS,
  GET_BLOG_POST,
  DELETE_BLOG_POST,
  GET_USER_BLOG_POST,
  POST_LOADING
} from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_BLOG_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case GET_BLOG_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case GET_USER_BLOG_POST:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case ADD_BLOG_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case DELETE_BLOG_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    default:
      return state;
  }
}
