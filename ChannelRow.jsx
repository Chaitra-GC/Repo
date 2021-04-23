 import {Avatar} from '@material-ui/core'
 import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
 const ChannelRow = ({channel , image , subs , noOfVideos, description, verified})=>{
     return <div> 
         <div className="channel_row">
             <Avatar className = "channelRow_logo" src = "https://i.redd.it/4hs81srve4s41.jpg" alt = {channel} />
            <div className="channelRow_text">
                <h4>{channel} {verified && <VerifiedUserIcon/>}</h4>
                <p> {subs} subscribers. {noOfVideos} videos </p>
                <p> {description}</p>
                <button className="channelRow_button">SUBSCRIBE</button>
            </div>
            
         </div>

     </div>
 }

 export default ChannelRow;