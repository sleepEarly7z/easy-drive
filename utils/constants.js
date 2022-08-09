// const TIME_SLOTS = [
// 	'8 - 9',
// 	'9 - 10',
// 	'10 - 11',
// 	'11 - 12',
// 	'12 - 13',
// 	'13 - 14',
// 	'14 - 15',
// 	'15 - 16',
// 	'16 - 17',
// 	'17 - 18',
// 	'18 - 19',
// 	'19 - 20',
// 	'20 - 21',
// 	'21 - 22',
// 	'22 - 23',
// ];
const TIME_SLOTS = [
	'8am',
	'9am',
	'10am',
	'11am',
	'12noon',
	'1pm',
	'2pm',
	'3pm',
	'4pm',
	'5pm',
];

const WEEK_DAYS = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const DEFAULT_SORT_BY = 'rating';
const DEFAULT_SORT_DIR = 'desc';
const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 10;

module.exports = {
	TIME_SLOTS,
    WEEK_DAYS,
	DEFAULT_SORT_BY,
	DEFAULT_SORT_DIR,
	DEFAULT_OFFSET,
	DEFAULT_LIMIT,
};
