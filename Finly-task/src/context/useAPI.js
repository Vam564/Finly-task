import {useReducer } from 'react';
import {SAMPLE_ACTION_TYPE} from './actionTypes'
import reducer from './reducer';

const useAPI = () => {
    const INITIAL_STATE = {
       sample_type : "Hey New React App"
    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    
    const handleSampleType = (data) => {
        dispatch({ type: SAMPLE_ACTION_TYPE, context: { data } })
    }

    return {
        state,
        handleSampleType
    }
}

export default useAPI
