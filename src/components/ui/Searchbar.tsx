import Box from "@mui/material/Box/Box";
import Divider from "@mui/material/Divider/Divider";
import IconButton from "@mui/material/IconButton/IconButton";
import InputBase from "@mui/material/InputBase/InputBase";
import Paper from "@mui/material/Paper/Paper";
import SearchIcon from '@mui/icons-material/Search';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { matchSorter } from "match-sorter";


export default function SearchBar(){
    const [searchParams, setSearchParams] = useState('');
    //const navigate = useNavigate();

    const handleClearSearch = () => {
        setSearchParams('');
    }

    const handleSearchQuery = async () => {
    //const posts = await fetchPosts();
    //const filteredPosts = matchSorter(posts.data.posts, searchParams, {keys:["title", "description"]})
    //navigate(`/search?posts=${JSON.stringify(filteredPosts)}`);
    }

    return (
    <Box 
        position={'relative'} 
        left={'5%'}
        width={"475px"}
        >
        <Paper
            component="form"
            sx={{ 
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            position:'relative',
            bgcolor:'#404040',
            color:'#d6d6d6',
            top:'20%',
            height:35,
            width: '100%',
            borderRadius:"20px" }}
            >
            <InputBase
            sx={{ ml: 1, flex: 1, color: '#d9d9d9'  }}
            placeholder="Search"
            value={searchParams}
            onChange={(e)=>setSearchParams(e.target.value)}
            inputProps={{ 'aria-label': 'search posts' }}
            />
            { searchParams.length > 0 ?
            (<IconButton type="button"
            sx={{ p: '10px', color: '#d9d9d9' }} 
            aria-label="clear"
            onClick={()=>handleClearSearch()}
            >
            <ClearSharpIcon />
            </IconButton>):(''
            )}
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton 
            type="button" 
            sx={{ p: '10px', color: '#d9d9d9'  }} 
            aria-label="search"
            onClick={async ()=> await handleSearchQuery()}
            >
            <SearchIcon />
            </IconButton>
        </Paper>
        </Box>
    )
}