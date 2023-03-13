import { Stack, Box } from "@mui/system"
import Posts from "../posts/Posts"
import Rightbar from '../rightbar/Rightbar';

const Main = () => {
  return (
    <Stack direction={'row'} spacing={1} mt={3}>
        <Box flex={3}>
          <Posts />
        </Box>

        <Box flex={1} sx={{sx:'none',md:'block'}}>
        <Rightbar />
        </Box>
    </Stack>
  )
}

export default Main