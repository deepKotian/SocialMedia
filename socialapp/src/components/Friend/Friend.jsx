import "./friend.css"

export default function Friend({friend}) {
    return (
        <div>
               <li className="leftbarFriend">
                        <img src={friend.profilePicture} alt="" className="leftbarFriendImg" />
                        <span className="leftbarFriendName">{friend.userName}</span>
                </li>
        </div>
    )
}
