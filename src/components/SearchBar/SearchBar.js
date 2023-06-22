import {Box, TextField} from "@mui/material";
import {Search} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const SearchBar = ({onInput}) => {

	return (
		<TextField
			id="search-bar"
			onInput={e => onInput(e.target.value)}
			label={
				<Box sx={{display: 'flex'}}>
					<Search sx={{ color: "primary.main", marginRight: "4px" }} />
					<Typography>
						Search
					</Typography>
				</Box>
			}
			variant="outlined"
			size="small"
		/>
	)
}

export default SearchBar
