const initialState = {
    width: 400,
    height: 250,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black'
}

export default function (state = initialState, actions){
    switch(actions.type) {
        case 'UPDATE_CSS':
            return {
                ...state,
                ...actions.css
            }


        default:
            return {
                ...state
            }
    }
}