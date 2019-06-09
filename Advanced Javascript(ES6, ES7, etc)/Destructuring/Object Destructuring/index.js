const settings = {
    notifications: {
        //follow: true,
        alerts: true,
        unfollow: false
    },
    color:{
        theme: "dark"
    }
};

const {
    notifications: {follow=false},
    color
} = settings;

console.log(color);
console.log(follow);

// Go inside settings and then Go to Emails, and then find isEmpty
// If there is no isEmpty in emails, then isEmpty is false. 
// But if there is no emails, emails is empty object
const { emails: { isEmpty = true } = {} } = settings;
console.log(isEmpty);
