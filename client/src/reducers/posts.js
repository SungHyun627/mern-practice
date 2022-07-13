import {
  FETCH_ALL,
  FETCH_BY_SEARCH,
  CREATE,
  UPDATE,
  DELETE,
  START_LOADING,
  END_LOADING,
} from '../constants/actionTypes';

<<<<<<< HEAD
const posts = (state = { posts: [] }, action) => {
=======
export default (state = { isLoading: true, posts: [] }, action) => {
>>>>>>> feat/loading
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload.data };
    case CREATE:
<<<<<<< HEAD
      return { ...state, posts: [...state.posts, action.payload] };
=======
      return { ...state, posts: action.payload };
>>>>>>> feat/loading
    default:
      return state;
  }
};
