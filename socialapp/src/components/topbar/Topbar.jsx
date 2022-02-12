import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">SocialLogo</span>
            </div>
                
            <div className="topbarCenter">
                <div className="searchBar">
                <SearchIcon className="searchIcon" />
                <input placeholder="Search" className="searchinput" />
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarLink">
                    <span className="links">Home</span>
                    <span className="links">Timeline</span>
                </div>

                <div className="topbarIcons">
                    <div className="topbarIconsItem">
                    <PersonIcon/>
                    <span className="IconBadge">1</span>
                    </div>
                    <div className="topbarIconsItem">
                    <ChatBubbleIcon/>
                    <span className="IconBadge">2</span>
                    </div>
                    <div className="topbarIconsItem">
                    <NotificationsIcon/>
                    <span className="IconBadge">3</span>
                    </div>
            
                </div>
                <img src="/assets/images/1.jpg" alt="" className="topbarImage"/>
            </div>
        </div>
    )
}
