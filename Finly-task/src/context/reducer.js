import { SAMPLE_ACTION_TYPE } from './actionTypes'
const reducer = (state, action) => {
    //const { } = state;
    const { type, context } = action
    switch (type) {

        case SAMPLE_ACTION_TYPE: {

            return {
                ...state,
                sample_type:context.data
            }
        }
        default: {
            return state
        }
    }

}
export default reducer