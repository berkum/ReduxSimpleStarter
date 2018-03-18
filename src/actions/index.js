export function selectUser(user) {
    console.log('A user has been selected(user):  ', user);
	return {
		type: 'USER_SELECTED', 
		payload: user
	};
}