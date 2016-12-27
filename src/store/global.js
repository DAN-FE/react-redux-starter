// ------------------------------------
// Constants
// ------------------------------------
export const GLOBAL_ERROR_CHANGE = 'GLOBAL_ERROR_CHANGE'
export const GLOBAL_LOADING_CHANGE = 'GLOBAL_LOADING_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function globalErrorAction(error) {
  return {
    type    : GLOBAL_ERROR_CHANGE,
    payload : error
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function globalLoadingAction(state) {
  return {
    type    : GLOBAL_LOADING_CHANGE,
    payload : state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initalState = {
    loading: false,
    error: null
}

export default function globalReducer(state = initalState, action) {
    switch (action.type) {
        case GLOBAL_ERROR_CHANGE:
            return { ...state, error: action.payload }
        case GLOBAL_LOADING_CHANGE:
            return { ...state, loading: action.payload }
        default:
            return state
    }
}
