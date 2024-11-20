import { NAME_DISPLAY, VOLUME_ADJUST, BANK_TOGGLE, POWER_TOGGLE } from "../ActionTypes/actionTypes";

const displayNames = (name) => {
    return {
        type: NAME_DISPLAY,
        payload: name
    };
}

const adjustVolume = (volume) => {
    return {
        type: VOLUME_ADJUST,
        payload: volume
    };
}

const toggleBank = () => {
    return {
        type: BANK_TOGGLE
    };
}

const togglePower = () => {
    return {
        type: POWER_TOGGLE
    };
}

export { displayNames, adjustVolume, toggleBank, togglePower };