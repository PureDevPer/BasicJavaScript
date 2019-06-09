const follow = checkFollow();
const alert = checkAlert();

const settings = {
	notifications: {
		// follow = follow
		follow,
		// alert = alert
		// It works only when variables have the same names
		alert
	}
};
