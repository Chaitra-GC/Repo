const VideoRow = ({view ,subs,description,timestamp,channel,title,image})=>{
    return <div className = "videoRow"> 
    <img src = {image} alt = "thumbnail" />
    <div className="videoRow_text">
        <h2>{title}</h2>
        <p className = "videoRow_headline">{channel} . <span className="videoRow_subs">{subs}</span> Subscribers  {view} views . {timestamp}</p>
        <p className = "videoRow_description">{description}</p>
    </div>
    </div>
}

export default VideoRow;