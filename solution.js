
let notifications = [
	{message: 'Lorem', read: true},
	{message: 'Ipsum', read: true},
	{message: 'Dolor', read: true},
	{message: 'Sit', read: false},
	{message: 'Amet', read: true}
];

let allRead = true;

const isRead = (notification) => {
   return notification.read === true;
};

allRead = notifications.every(isRead);
