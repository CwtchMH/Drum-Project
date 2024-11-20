import { NAME_DISPLAY, VOLUME_ADJUST, POWER_TOGGLE, BANK_TOGGLE } from "../ActionTypes/actionTypes";

const initialState = {
    name: "",
    volume: 0.5,
    power: true,
    bank: true
};

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case NAME_DISPLAY:
            return {
                ...state,
                name: action.payload
            };
        case VOLUME_ADJUST:
            return {
                ...state,
                volume: action.payload
            };
        case POWER_TOGGLE:
            return {
                ...state,
                power: !state.power
            };
        case BANK_TOGGLE:
            return {
                ...state,
                bank: !state.bank
            };
        default:
            return state;
    }
};

export default Reducer;