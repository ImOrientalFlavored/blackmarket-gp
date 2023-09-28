import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box } from '@mui/material';
import { 
    Link, 
//    useNavigate 
} from 'react-router-dom';

type BackLinkProps = {
    to?: string,
    label?: string,
    sx?: object,
}

export default function BackLink({...props}: BackLinkProps){
    //const navigate = useNavigate();


    return(
        <Box sx={{...props.sx}}>
            <Link to={`${props.to ? props.to : '..'}`}>
                <ArrowRightAltIcon sx={{rotate:"180deg"}} />Back to {props.label? props.label : 'last page'}
            </Link>
        </Box>
    )
}