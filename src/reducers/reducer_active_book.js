//state argument is not application satate
//olny this reducer is responsible for
export default function(state = null, action) {
// each time    state += 1;
switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
}
    return state;
}