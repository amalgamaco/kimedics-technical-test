import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";

const PracticesPage = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'green' }}>
				<Typography paragraph>
					Practices
				</Typography>
			</Box>
		</Box>
	)
}

export default PracticesPage
