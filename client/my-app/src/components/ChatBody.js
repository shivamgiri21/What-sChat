import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBody = ({ messages ,socket}) => {
  const navigate = useNavigate();
  const [joined,setjoin] =useState('false');

//   console.log(messages);
  const handleLeaveChat = () => {
 
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  useEffect(() => {
    socket.on('UserJoined', (data) => console.log(data));
    
  }, []);

  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      {/*This shows messages sent from you*/}
      {/* <div className="message__container">
        <div className="message__chats">
          <p className="sender__name">You</p>
          <div className="message__sender">
            <p>Hello there</p>
          </div>
        </div> */}

        {/*This shows messages received by you*/}
        {/* <div className="message__chats">
          <p>Other</p>
          <div className="message__recipient">
            <p>Hey, I'm good, you?</p>
          </div>
        </div> */}
{/* <div> {joined.message} </div> */}
     <div className="message__container">
        {messages.map((message) =>
          message.name === localStorage.getItem('userName') ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}




        {/*This is triggered when a user is typing*/}
        {/* {/* <div className="message__status"> */}
          {/* <p>Someone is typing...</p>
        </div> */}
          </div> 
    </>
  );
};

export default ChatBody;

