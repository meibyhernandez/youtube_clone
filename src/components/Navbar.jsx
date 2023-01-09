import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
    <Stack direction="row"
        alignItems="center"
        p={2}
        sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>

        <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
            <img src={logo} alt="logo" height={45}></img>
        </Link>

        <SearchBar></SearchBar>
    </Stack>
)

export default Navbar