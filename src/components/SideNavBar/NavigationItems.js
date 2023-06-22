import {
	CalendarTodayOutlined, ChatBubbleOutline,
	Contacts,
	ContactsOutlined,
	DashboardOutlined,
	LocationOnOutlined, MoreTimeOutlined, PaidOutlined, QuestionMarkOutlined, RedeemOutlined, SettingsOutlined
} from "@mui/icons-material";

export const NAVIGATION_ITEMS = [
	{
		text: "Dashboard",
		icon: <DashboardOutlined/>
	},
	{
		text: "Providers",
		icon: <ContactsOutlined/>
	},
	{
		text: "Practices",
		icon: <LocationOnOutlined/>
	},
	{
		text: "Jobs",
		icon: <RedeemOutlined/>
	},
	{
		text: "Schedules",
		icon: <CalendarTodayOutlined/>
	},
	{
		text: "Time & invoices",
		icon: <MoreTimeOutlined/>
	},
	{
		text: "Time & pay",
		icon: <PaidOutlined/>
	},
	{
		text: "Messages",
		icon: <ChatBubbleOutline/>
	},
	{
		text: "Help",
		icon: <QuestionMarkOutlined/>
	},
	{
		text: "Settings",
		icon: <SettingsOutlined/>
	}
]
