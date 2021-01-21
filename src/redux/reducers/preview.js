const initialState = {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black'
}

export default function (state = initialState, actions){
    switch(actions.type) {
        case 'UPDATE_BORDER':
            return {
                ...state,
                borderWidth: actions.borderWidth,
                borderStyle: actions.borderStyle,
                borderColor: actions.borderColor
            }


        default:
            return {
                ...state
            }
    }
}