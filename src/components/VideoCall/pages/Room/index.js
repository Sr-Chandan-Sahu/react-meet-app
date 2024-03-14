import React from "react";
import {useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
const RoomPage = () => {
  const {roomId} =useParams();
  const myMeeting= async(element)=>{
  const appID=1772593123
  const serverSecret="e84e6d016c15cb4e6edb54fa8cafa341";
  const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomId,
    Date.now().toString(),'Chandan',)
  const zp=ZegoUIKitPrebuilt.create(kitToken)
  zp.joinRoom({
    container:element,scenario:{
        mode:ZegoUIKitPrebuilt.VideoConference
    }
  })
  }
    return ( 
        <div className="room-page">
          <div ref={myMeeting}/>
        </div>
     );
}
 
export default RoomPage;