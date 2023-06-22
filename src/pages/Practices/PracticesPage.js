import Typography from "@mui/material/Typography";
import {Checkbox} from "@mui/material";
import { observer } from "mobx-react-lite";
import usePracticesPagePresenter from "../../presenters/PracticesPage/usePracticesPagePresenter";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SearchBar from "../../components/SearchBar/SearchBar";

const PracticesPage = () => {
	const presenter = usePracticesPagePresenter();

	return (
		presenter && (
			<>
				<SearchBar onInput={presenter.onInputSearch}/>
				<List>
					{presenter.loading && <p>Loading...</p>}
					{presenter.practices?.map((practice) => {
						return (
							<ListItem
								key={practice.id}
								secondaryAction={
									<Typography>
										{practice.totalBeds}
									</Typography>
								}
							>
								<ListItemButton role={undefined}>
									<ListItemIcon>
										<Checkbox
											edge="start"
											disableRipple
										/>
									</ListItemIcon>
									<ListItemText
										id={practice.id}
										primary={practice.name}
									/>
								</ListItemButton>
							</ListItem>
						)
					})}
				</List>
			</>
		)
	)
}

export default observer(PracticesPage)
