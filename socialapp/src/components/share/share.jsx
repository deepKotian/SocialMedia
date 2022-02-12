import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/images/1.jpg" alt="" className="shareImage" />
                    <input type="text" placeholder="What's Up" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon className="shareIcon"/>
                            <span className="shareOptionText">Add Post</span>
                        </div>
                        <div className="shareOption">
                            <LabelIcon className="shareIcon"/>
                            <span className="shareOptionText">Label</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon className="shareIcon"/>
                            <span className="shareOptionText">Emoji</span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon classnName="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                    </div>
                    <button className="shareButton">
                        Share
                    </button>
                </div>
            </div>
            
        </div>
    )
}
