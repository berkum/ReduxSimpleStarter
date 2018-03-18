export default function (state = null, action) {
    console.log("action type ", action.type);
    switch (action.type) {
        case 'USER_SELECTED':
            console.log("USER_SELECTED " + action.payload);

			return action.payload;
	}

	return state;
}