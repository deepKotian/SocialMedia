import "./rightbar.css"
import CakeIcon from '@mui/icons-material/Cake';
import { Users } from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar({profile}) {

    const HomeRightBar = () => {
        return(
            <>
                <div className="rightbarContainer">
                    <CakeIcon className="birthdayIcon"/>
                    <span className="birthdayText">
                        <b>Xyz </b>and <b>2 other friends</b> have their birthday today
                    </span>
                </div>
                <img src="/assets/images/ad.jpg" alt="" className="rightbarAd" />
                <h3 className="onlineFriend">Online Friends</h3>
                    <ul className="rightbarFriendList">
                       {Users.map((u) => (
                           <Online key={u.id} user={u} />
                       ))}
                       
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return(
            <>
            
            <h4 className="rightBarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightBarInfoItem">
                    <span className="rightbarInfoKey">City: </span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightBarInfoItem">
                    <span className="rightbarInfoKey">From: </span>
                    <span className="rightbarInfoValue">Mumbai</span>
                </div>
            </div>
            <h4 className="rightBarTitle">User Friends</h4>
                <div className="rightBarFollowings">
                    <div className="rightBarFollowing">
                        <img src="assets/images/1.jpg" alt="" className="rightBarFollowingImage" />
                        <span className="rightBarFollowingName">Deep Kotian</span>
                    </div>
                </div>
                <div className="rightBarFollowng">
                    <div className="rightBarFollowing">
                        <img src="assets/images/2.jpg" alt="" className="rightBarFollowingImage" />
                        <span className="rightBarFollowingName">Deep Kotian</span>
                    </div>
                </div>
                <div className="rightBarFollowng">
                    <div className="rightBarFollowing">
                        <img src="assets/images/3.jpg" alt="" className="rightBarFollowingImage" />
                        <span className="rightBarFollowingName">Deep Kotian</span>
                    </div>
                </div>
                <div className="rightBarFollowng">
                    <div className="rightBarFollowing">
                        <img src="assets/images/4.jpg" alt="" className="rightBarFollowingImage" />
                        <span className="rightBarFollowingName">Deep Kotian</span>
                    </div>
                </div>
            
            

            </>
        )

    }

    return (
        <div className="rightbar">
           <div className="rightbarWrapper">
               {profile ?  <ProfileRightbar/> : <HomeRightBar/>}
           </div>
        </div>
    )
}
