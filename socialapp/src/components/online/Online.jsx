import "./online.css"

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
        <div className="rightImgContainer">
            <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarProfileName">{user.userName}</span>
        </li>
    )
}
