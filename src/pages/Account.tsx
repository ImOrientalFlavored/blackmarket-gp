import Box from '@mui/material/Box/Box';
// import { fetchCart } from '../store/cart';
// import { fetchUser } from '../store/user';
import BackLink from '~components/ui/BackLink';

    export default function Account(){
        
        return (
            <Box minHeight={'85vh'} margin={"2.5%"}>
                <Box component={"nav"}>
                    <BackLink to='..' />
                </Box>
                    <h2>Profile</h2>
                
            </Box>
        )
    }