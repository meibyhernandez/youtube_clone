import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";

const Navbar = () => (
    <Stack direction="row"
        alignItems="center"
        p={2}
        sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>

        <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
            <img src={logo} alt="logo" height={45}></img>
        </Link>

    </Stack>
)

export default Navbar