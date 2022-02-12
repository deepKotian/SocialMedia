import "./leftbar.css"
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import { Users } from "../../dummyData";
import Friend from "../Friend/Friend";

export default function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <FeedIcon className="leftbarIcon"/>
                        <span className="leftbarListItemText">Feed</span>
                    </li>
                    <li className="leftbarListItem">
                        <ChatIcon className="leftbarIcon"/>
                        <span className="leftbarListItemText">Chat</span>
                    </li>
                    <li className="leftbarListItem">
                        <GroupIcon className="leftbarIcon"/>
                        <span className="leftbarListItemText">Group</span>
                    </li>
                    <li className="leftbarListItem">
                        <MissedVideoCallIcon className="leftbarIcon"/>
                        <span className="leftbarListItemText">Video</span>
                    </li>
                    <li className="leftbarListItem">
                        <BookmarkIcon className="leftbarIcon"/>
                        <span className="leftbarListItemText">Bookmark</span>
                    </li>
                    
                    <li className="leftbarListItem">
                        <WorkIcon className="leftbarIcon"/>
                        <span className="leftbarListItemText">Jobs</span>
                    </li>
                    <li className="leftbarListItem">
                        <EventIcon className="leftbarIcon"/>
                        <span className="leftbarListItemText">Events</span>
                    </li>
                </ul>
                <button className="leftbarButton">Show More</button>
                <hr className="leftbarHr"/>
                <ul className="leftbarFriendList">
                        {Users.map((u) => (
                           <Friend key={u.id} friend={u} />
                        ))}
                </ul>

            </div>
        </div>
    )
}
