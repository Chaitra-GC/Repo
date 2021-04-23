import Avatar from '@material-ui/core/Avatar'

const VideoCard = ({image, title, channel, views, timestamp, channelImage})=>{
    return (
        <div className = "videocard">
        <img className = "videoCard_thumbnail" src= {image} alt="Thumbnail" />
        <div className="videoCard_info">
            <Avatar className = "videoCard_avatar"
            alt = {channel}
            src = {channelImage }
            />
            <div className= "video_text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views} . {timestamp}</p>
            </div>
        </div>
        </div>
    )
}
export default VideoCard;