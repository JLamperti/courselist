import { actionTypes } from "../../actionTypes";

type actionType = {
    type: actionTypes;
    isLoadingData: boolean;
};
export const isLoadingDataReducer = (
    isLoadingData = true,
    action: actionType
): boolean => {
    switch (action.type) {
        case actionTypes.SET_LOADING_STATE: {
            return action.isLoadingData;
        }
        default: {
            return isLoadingData;
        }
    }
};
