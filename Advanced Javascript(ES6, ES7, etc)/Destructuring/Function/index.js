function saveSettings({ follow, Alert, color = 'blue' }) {
	console.log(color);
}

function saveSetting({ notifications, color: { theme } }) {
	console.log(color);
}

saveSettings({
	follow: true,
	Alert: true,
	marketing: true
});

saveSetting({
	notifications: {
		follow: true,
		Alert: true,
		marketing: true
	},
	color: {
		theme: 'blue'
	}
});
