import {ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED} from "../types";

const initialState = {
    allPosts: [],
    bookedPosts: [],
    loading: true
};

export const postReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                allPosts: action.payload,
                bookedPosts: action.payload.filter(p => p.booked),
                loading: false
            }

        case TOGGLE_BOOKED: {
            const allPosts = state.allPosts.map( p => {
                if (p.id === action.id) {
                    p.booked = !p.booked;
                }
                return p;
            });

            return {
                ...state,
                allPosts,
                bookedPosts: allPosts.filter(p => p.booked)
            }
        }

        case REMOVE_POST: {
            const allPosts = state.allPosts.filter(p => p.id!== action.id)

            return {
                ...state,
                allPosts,
                bookedPosts: allPosts.filter(p => p.booked)
            }
        }
        case ADD_POST: {
            return {
                ...state,
                allPosts: [action.payload, ...state.allPosts ]
            }
        }
        default: return state;
    }
}
