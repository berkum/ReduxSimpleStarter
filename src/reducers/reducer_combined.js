export default function (state = null, action) {
    console.log("reducer_combined-action type ", action.type);
    switch (action.type) {
        case 'USER_SELECTED':
            console.log("USER_SELECTED " + action.payload);
            return action.payload;

        case 'BOOK_SELECTED':
            console.log("BOOK_SELECTED " + action.payload);
            return action.payload;

	}

	return state;
}