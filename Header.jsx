import react, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'
const Header = ()=>{

    const [inputSearch , setInputSearch] = useState("");

    return (
        <div className= 'header'> 
         <div className="header_left">
                <MenuIcon />
                <Link to = "/">     
                  <img className = 'header_logo' src = 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt = "YouTube logo"/>
                </Link>
 
            </div>
            <div className="header_input">
            <input  type= "text" placeholder = "Search" value = {inputSearch} onChange = {e=> setInputSearch(e.target.value)}/>
            <Link to = {`/search/${inputSearch}`}>
            <SearchIcon className = 'header_input_button'/>
            </Link>
            </div>
        <div className="header_icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationIcon />
        <Avatar />
        
        </div>
    </div>
    )
}
export default Header;