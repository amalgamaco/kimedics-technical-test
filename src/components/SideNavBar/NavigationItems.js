import {
	CalendarTodayOutlined, ChatBubbleOutline,
	ContactsOutlined,
	DashboardOutlined,
	LocationOnOutlined, MoreTimeOutlined, PaidOutlined, QuestionMarkOutlined, RedeemOutlined, SettingsOutlined
} from "@mui/icons-material";


export const PRACTICES_PATH = "/practices"
export const NAVIGATION_ITEMS = [
	{
		text: "Dashboard",
		icon: <DashboardOutlined/>,
		to: "/"
	},
	{
		text: "Providers",
		icon: <ContactsOutlined/>,
		to: "/providers/dashboard",
		subItems: [
			{
				text: "Dashboard",
				to: "/providers/dashboard"
			},
			{
				text: "Providers",
				to: "/providers/providers"
			},
			{
				text: "My Tasks",
				to: "/providers/myTasks"
			},
			{
				text: "All Tasks",
				to: "/providers/allTasks"
			},
			{
				text: "Roster",
				to: "/providers/roster"
			},
			{
				text: "Privileges",
				to: "/providers/privileges"
			},
			{
				text: "Credentialing",
				to: "/providers/credentialing"
			},
			{
				text: "State Laws",
				to: "/providers/stateLaws"
			}
		]
	},
	{
		text: "Practices",
		icon: <LocationOnOutlined/>,
		to: PRACTICES_PATH
	},
	{
		text: "Jobs",
		icon: <RedeemOutlined/>,
		to: "/jobs"
	},
	{
		text: "Schedules",
		icon: <CalendarTodayOutlined/>,
		to: "/schedules"
	},
	{
		text: "Time & invoices",
		icon: <MoreTimeOutlined/>,
		to: "/timeAndInvoices"
	},
	{
		text: "Time & pay",
		icon: <PaidOutlined/>,
		to: "/timeAndPay"
	},
	{
		text: "Messages",
		icon: <ChatBubbleOutline/>,
		to: "/messages"
	},
	{
		text: "Help",
		icon: <QuestionMarkOutlined/>,
		to: "/help"
	},
	{
		text: "Settings",
		icon: <SettingsOutlined/>,
		to: "/settings"
	}
]
