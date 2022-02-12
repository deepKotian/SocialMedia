import React from 'react'
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import "./profile.css"

export default function Profile() {

    
    return (
        <div>
             <>
                <Topbar/>
                <div className="profile">
                <Leftbar/>
                  <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCov">
                                    <img src="assets/images/ad.jpg" alt="" className="profileCover" />
                                    <img src="assets/images/1.jpg" alt="" className="profileImage" /> 
                            </div>
                            <div className="profileInfo">
                                    <h4 classname="profileInfoName">Deep Kotian</h4> 
                                    <span className="prodileInfoDesc">Hello World!!</span>
                            </div>   
                        </div>
                            <div className="profileRightBottom">
                                    <Feed/>
                                    <Rightbar profile/>
                            </div>
                        </div>    
                </div>
             </>
        </div>
    )
}

