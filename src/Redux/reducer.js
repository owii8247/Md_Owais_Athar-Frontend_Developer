import * as types from "./actionTypes"
const initialState = {
    capsules: [],
    isLoading: false,
    isError: false,
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        default:
            return state
        case types.GET_CAPSULES_REQUEST:
            return { ...state, isLoading: true, isError: false }
        case types.GET_CAPSULES_SUCCESS:
            return { ...state, capsules: payload, isLoading: false, isError: false }
        case types.GET_CAPSULES_FAILURE:
            return { ...state, capsules: [], isLoading: false, isError: true }
    }

}