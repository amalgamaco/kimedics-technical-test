import {Box, Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {NAVIGATION_ITEMS, PRACTICES_PATH} from "./NavigationItems";
import * as React from "react";
import {styled} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import KimedicsLogo from '../../assets/kimedics_logo.svg'
import KimedicsSmallLogo from '../../assets/kimedics_small_logo.svg'
import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}),
);

const SideNavBar = ( { children } ) => {
	const location = useLocation();
	const [open, setOpen] = React.useState(true);

	useEffect(() => {
		if(location.pathname === PRACTICES_PATH){
			setOpen(false)
		}else{
			setOpen(true)
		}
	}, [location.pathname])

	const getColorForListItemIcon = (item)  => {
		if(open){
			return "secondary.main"
		}else{
			if(item.to === location.pathname){
				return "primary.selectedNavBarIcon"
			}
		}
		return "white"
	}

	return (
		<>
			<Drawer
				variant="permanent"
				open={open}
				PaperProps={{
					sx: {
						backgroundColor: "primary.main",
						color: "white"
					}
				}}
			>
				<DrawerHeader>
						<Box
							component="img"
							alt="Kimedics logo"
							sx={{
								width: '100%',
							}}
							src={open ? KimedicsLogo : KimedicsSmallLogo}
						/>
				</DrawerHeader>
				<Divider />
				<List>
					{NAVIGATION_ITEMS.map((item) => (
						<Box key={item.text}>
							<ListItem
								disablePadding sx={{ display: 'block' }}
							>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}
									component={Link}
									to={item.to}
								>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : 'auto',
											justifyContent: 'center',
											color: getColorForListItemIcon(item)
										}}
									>
										{item.icon}
									</ListItemIcon>
									<ListItemText
										primary={item.text.toUpperCase()}
										sx={{ opacity: open ? 1 : 0 }}
										primaryTypographyProps={{
											sx: { fontWeight: location.pathname === item.to ? "bold" : "normal" }
										}}
									/>
								</ListItemButton>
							</ListItem>
							{item.subItems && (
								<Collapse in={open} timeout="auto" unmountOnExit>
									<List component="div" disablePadding sx={{ paddingLeft: 8 }}>
										{item.subItems.map((subItem) => (
											<ListItem key={subItem.text} disablePadding>
												<ListItemButton component={Link} to={subItem.to}>
													<ListItemText
														primary={subItem.text}
														primaryTypographyProps={{
															sx: { fontWeight: location.pathname === subItem.to ? "bold" : "normal" }
														}}
													/>
												</ListItemButton>
											</ListItem>
										))}
									</List>
								</Collapse>
							)}
						</Box>
					))}
				</List>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				{children}
			</Box>
		</>
	)
}

export default SideNavBar;
