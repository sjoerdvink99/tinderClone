import React from "react";
import "./Chats.css";
import Chat from "./Chat";

export default function Chats() {
  return (
    <div className='chats'>
      <Chat
        name='Bernard Arnault'
        message='Yo Whattup'
        timestamp='40 seconds ago'
        profilePic='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bernard_Arnault_%283%29_-_2017_%28cropped%29.jpg/1200px-Bernard_Arnault_%283%29_-_2017_%28cropped%29.jpg'
      />
      <Chat
        name='Zhong Shanshan'
        message='How are you doing?'
        timestamp='1 day ago'
        profilePic='https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/12/31/bfa6d454-4b10-11eb-9c55-93e83087d811_image_hires_161544.jpeg?itok=wawQpWcy&v=1609402551'
      />
      <Chat
        name='Warren Buffett'
        message='Look at this investment'
        timestamp='7 weeks ago'
        profilePic='https://images.barrons.com/im-305052?width=620&size=1.5005861664712778'
      />
      <Chat
        name='Larry Page'
        message='Looks great'
        timestamp='2 months ago'
        profilePic='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76bcaaa7ea43100043c836%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D227%26cropX2%3D2022%26cropY1%3D22%26cropY2%3D1817'
      />
    </div>
  );
}
