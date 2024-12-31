// import React, { useState, useEffect, useRef } from 'react';
// import './chatpage.css';
// import { Link } from 'react-router-dom';
// import ChatItem from './components/chatItem';
// import IconButton from '@mui/material/IconButton';
// import { IoMdSend } from 'react-icons/io';
// import { sendChatRequest } from './helpers/api-communicator';
// import Markdown from 'react-markdown';
// import model  from '../../backend/config/gemini';


// const ChatPage = () => {
//   const [chats, setChats] = useState([]);
//   const [question, setquestion] = useState("")
//   const [answer, setanswer] = useState("")
//   const [input, setInput] = useState('');
//   const [chat_messages, setchat_messages] = useState([])
//   const [currentChat, setCurrentChat] = useState([]);
//   const [isResizing, setIsResizing] = useState(false);
//   const [editName, setEditName] = useState(false);  // Để kiểm tra xem người dùng có đang chỉnh sửa tên không
//   const [newChatName, setNewChatName] = useState('');  // Lưu tên mới khi người dùng đổi
//   const chatListRef = useRef(null);
//   const chatLayoutRef = useRef(null);
//   const addmess = async  (text) => {
//     setquestion(text)
//     const result = await model.generateContent(text);
//     const response = await result.response.text();
//     setanswer(response)
//     console.log(response)
//   }
//   // const aiChat = model.startChat({
//   //   history: [
//   //     data?.history.map(({ role, parts }) => ({
//   //       role,
//   //       parts: [{ text: parts[0].text }],
//   //     })),
//   //   ],
//   //   generationConfig: {
//   //     // maxOutputTokens: 100,
//   //   },
//   // });
//   const handleSubmit = async (e) => { 
//     e.preventDefault();

//     const text = e.target.text.value;
//     if (!text) return;

//     addmess(text);
//   }

//   // const handleSubmit = async () => {
//   //   if (!input.trim()) return;

//   //   const userMessage = { role: "user", content: input };
//   //   setCurrentChat((prev) => [...prev, userMessage]);
//   //   console.log("User message:", userMessage.content);
//   //   // Clear input field
//   //   setInput('');

//   //   try {
//   //     // Make the API call to OpenAI
//   //     const response = await sendChatRequest(userMessage.content);

//   //     // Extract assistant's reply from the response
//   //     const assistantMessage = { role: "assistant", content: response.choices[0].message.content };

//   //     setCurrentChat((prev) => [...prev, assistantMessage]);
//   //   } catch (error) {
//   //     console.error("Error fetching response from OpenAI:", error);
//   //     const errorMessage = { role: "assistant", content: "Something went wrong. Please try again later." };
//   //     setCurrentChat((prev) => [...prev, errorMessage]);
//   //   }
//   // };

//   // // Hàm xử lý khi bắt đầu kéo chuột
//   // const handleMouseDown = (e) => {
//   //   e.preventDefault(); // Ngăn không cho browser xử lý mặc định
//   //   setIsResizing(true);
//   //   document.addEventListener('mousemove', handleMouseMove);
//   //   document.addEventListener('mouseup', handleMouseUp);
//   // };

//   // // Hàm xử lý khi kéo chuột
//   // const handleMouseMove = (e) => {
//   //   if (!isResizing) return;
//   //   const newWidth = e.clientX - chatLayoutRef.current.getBoundingClientRect().left;

//   //   // Giới hạn độ rộng của lịch sử chat
//   //   if (newWidth > 100 && newWidth < window.innerWidth - 100) {
//   //     chatListRef.current.style.width = `${newWidth}px`; // Cập nhật độ rộng của phần lịch sử chat
//   //   }
//   // };

//   // // Hàm xử lý khi thả chuột
//   // const handleMouseUp = () => {
//   //   setIsResizing(false);
//   //   document.removeEventListener('mousemove', handleMouseMove);
//   //   document.removeEventListener('mouseup', handleMouseUp);
//   // };

//   // // Hàm gửi tin nhắn
//   // const  sendMessage = async () => {
//   //   if (input.trim() === '') return;
//   //   const userMessage = { text: input, sender: 'user' };
//   //   //const response = await sendChatRequest(userMessage.text);

//   //     // Extract assistant's reply from the response
//   //    //const assistantMessage = { text: response.choices[0].message.content || "sorry", sender: "assistant",  };
//   //   const assistantMessage = { text: 'Assistant response...', sender: 'assistant' };
//   //   const updatedChat = [...currentChat, userMessage, assistantMessage];
    
//   //   setCurrentChat(updatedChat);
//   //   setChats((prevChats) => {
//   //     const updatedChats = [...prevChats, { name: 'Chat ' + (prevChats.length + 1), messages: updatedChat }];

//   //     localStorage.setItem('chatHistory', JSON.stringify(updatedChats));
//   //     return updatedChats;
//   //   });
//   //   setInput('');
//   // };
//   // const sendMessage = async () => {
//   //   if (input.trim() === '') return;
  
//   //   // User message
//   //   const userMessage = { text: input, sender: 'user' };
    
//   //   // Update current chat with user's message
//   //   setCurrentChat((prev) => [...prev, userMessage]);
//   //   setInput(''); // Clear input field
  
//   //   try {
//   //     // Call the API to get the assistant's response
//   //     const response = await sendChatRequest(userMessage.text);
  
//   //     // Extract the assistant's message from the API response
//   //     const assistantMessage = {
//   //       text: response?.choices[0]?.message?.content || "Sorry, I couldn't process that.",
//   //       sender: 'assistant',
//   //     };
  
//   //     // Update the current chat with the assistant's response
//   //     setCurrentChat((prev) => [...prev, assistantMessage]);
  
//   //     // Update the chat history and store it in localStorage
//   //     setChats((prevChats) => {
//   //       const updatedChats = [
//   //         ...prevChats,
//   //         { name: 'Chat ' + (prevChats.length + 1), messages: [...prevChats.messages, assistantMessage] },
//   //       ];
  
//   //       localStorage.setItem('chatHistory', JSON.stringify(updatedChats));
//   //       return updatedChats;
//   //     });
//   //   } catch (error) {
//   //     console.error("Error fetching assistant response:", error);
      
//   //     // Handle error gracefully with a fallback message
//   //     const errorMessage = { text: "Something went wrong. Please try again later.", sender: 'assistant' };
//   //     setCurrentChat((prev) => [...prev, errorMessage]);
//   //   }
//   // };
//   // Hàm xoá một đoạn chat
//   const deleteChat = (index) => {
//     const updatedChats = chats.filter((_, i) => i !== index);
//     setChats(updatedChats);
//     localStorage.setItem('chatHistory', JSON.stringify(updatedChats));
//   };

//   // Hàm đổi tên đoạn chat
//   // const handleEditName = (index) => {
//   //   setNewChatName(chats[index].name);  // Lấy tên hiện tại của chat
//   //   setEditName(index);  // Đánh dấu chat nào đang chỉnh sửa tên
//   // };

//   // // Hàm lưu tên mới cho đoạn chat
//   // const saveChatName = (index) => {
//   //   const updatedChats = [...chats];
//   //   updatedChats[index].name = newChatName;  // Cập nhật tên mới cho chat
//   //   setChats(updatedChats);
//   //   localStorage.setItem('chatHistory', JSON.stringify(updatedChats));
//   //   setEditName(false);  // Đóng input chỉnh sửa tên
//   // };

//   // // Hàm hủy chỉnh sửa tên
//   // const cancelEditName = () => {
//   //   setEditName(false);
//   //   setNewChatName('');
//   // };
  
//   // const formRef = useRef(null);
//   // useEffect(() => {
//   //   // const storedChats = JSON.parse(localStorage.getItem('chatHistory')) || [];
//   //   // setChats(storedChats);
    
//   //     endRef.current.scrollIntoView({ behavior: "smooth" });
    

//   // }, [question, answer]);
//   const endRef = useRef(null);
//   useEffect(() => {
//     endRef.current.scrollIntoView({ behavior: "smooth" });
//   }, []);
//   return (
//     <div className="chat-page">
//       {/* <header className="chat-header">Only Chat</header> */}
//       <div className='wrapper'>
//         <div className='chat'>
//           <div className='message'>text from ai</div>
//           <div className='message user'>text from user</div>
//           <div className='message'>text from ai</div>
//           <div className='message user'>text from user</div><div className='message'>text from ai</div>
          
//           <div ref= {endRef}></div>
//           {question && <div className="message user">{question}</div>}
//           {answer && (
//             <div className="message">
//               <Markdown>{answer}
//                 </Markdown>
//             </div>
//             )}
//             <form className="newForm" onSubmit={handleSubmit} >
              
//               <input id="file" type="file" multiple={false} hidden />
//               <input type="text" name="text" placeholder="Ask anything..." />
//               <button>
//                 <img src="/arrow.png" alt="" />
//               </button>
//             </form>
//         </div>
//       </div>
//       {/* <button className="new-chat-button" onClick={() => setCurrentChat([])}>New Chat</button> */}

//       {/* <div className="chat-layout" ref={chatLayoutRef}> */}
//         {/* <div className="chat-list"> */}
//           {/* {chats.map((chat, index) => (
//             <div key={index} className="chat-preview">
//               {editName === index ? (
//                 <div className="rename-container">
//                   <input
//                     type="text"
//                     value={newChatName}
//                     onChange={(e) => setNewChatName(e.target.value)}
//                   />
//                   <button onClick={() => saveChatName(index)}>Save</button>
//                   <button className="cancel" onClick={cancelEditName}>Cancel</button>
//                 </div>
//               ) : (
//                 <div>
//                   <button onClick={() => setCurrentChat(chat.messages)}>{chat.name}</button>
//                   <button className="delete-button" onClick={() => deleteChat(index)}>Delete</button>
//                   <button onClick={() => handleEditName(index)}>Rename</button>
//                 </div>
//               )}
//             </div>
//           ))} */}
//         {/* </div> */}

          
//         {/* <div className="resize-handle" onMouseDown={handleMouseDown}></div> */}

//         {/* <div className="chat-box"> */}
//           {/* {currentChat.map((message, index) => (
//             <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : 'assistant-message'}`}>
//               {message.text}
//               <ChatItem content= {message.content} role={message.role} key = {idx} />  */}

//             {/* </div> */}
//             {/* {chat_messages.map((chat, idx) => (
//               <ChatItem content= {chat.content} role={chat.role} key = {idx} /> 
//             ) )} */}
//         {/* </div> */}
//       {/* </div> */}
//       {/* <IconButton onClick={handleSubmit} sx={{ color: "white", mx: 1 }}>
//             <IoMdSend />
//           </IconButton> */}
//       {/* <footer className="chat-input-container">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="chat-input"
//           placeholder="Type your message..."
//         />
//         <button className="send-button" onClick={sendMessage}>Send</button>
//       </footer> */}
      
//     </div>
//   );
// };

// export default ChatPage;
















import React, { useState, useEffect, useRef } from 'react';
import './chatpage.css';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import model  from '../../backend/config/gemini';

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const [input, setInput] = useState('');
  const [currentChat, setCurrentChat] = useState([]);
  const [isResizing, setIsResizing] = useState(false);
  const [editName, setEditName] = useState(false);  // Để kiểm tra xem người dùng có đang chỉnh sửa tên không
  const [newChatName, setNewChatName] = useState('');  // Lưu tên mới khi người dùng đổi
  const chatListRef = useRef(null);
  const chatLayoutRef = useRef(null);
  const [question, setquestion] = useState("")
  const [answer, setanswer] = useState("")
  // Hàm xử lý khi bắt đầu kéo chuột
  const handleMouseDown = (e) => {
    e.preventDefault(); // Ngăn không cho browser xử lý mặc định
    setIsResizing(true);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Hàm xử lý khi kéo chuột
  const handleMouseMove = (e) => {
    if (!isResizing) return;
    const newWidth = e.clientX - chatLayoutRef.current.getBoundingClientRect().left;

    // Giới hạn độ rộng của lịch sử chat
    if (newWidth > 100 && newWidth < window.innerWidth - 100) {
      chatListRef.current.style.width = `${newWidth}px`; // Cập nhật độ rộng của phần lịch sử chat
    }
  };

  // Hàm xử lý khi thả chuột
  const handleMouseUp = () => {
    setIsResizing(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // Hàm gửi tin nhắn
  const sendMessage = () => {
    if (input.trim() === '') return;
    const userMessage = { text: input, sender: 'user' };
    const assistantMessage = { text: 'Assistant response...', sender: 'assistant' };
    const updatedChat = [...currentChat, userMessage, assistantMessage];
    setCurrentChat(updatedChat);
    setChats((prevChats) => {
      const updatedChats = [...prevChats, { name: 'Chat ' + (prevChats.length + 1), messages: updatedChat }];
      localStorage.setItem('chatHistory', JSON.stringify(updatedChats));
      return updatedChats;
    });
    setInput('');
  };

  // Hàm xoá một đoạn chat
  const deleteChat = (index) => {
    const updatedChats = chats.filter((_, i) => i !== index);
    setChats(updatedChats);
    localStorage.setItem('chatHistory', JSON.stringify(updatedChats));
  };

  // Hàm đổi tên đoạn chat
  const handleEditName = (index) => {
    setNewChatName(chats[index].name);  // Lấy tên hiện tại của chat
    setEditName(index);  // Đánh dấu chat nào đang chỉnh sửa tên
  };

  // Hàm lưu tên mới cho đoạn chat
  const saveChatName = (index) => {
    const updatedChats = [...chats];
    updatedChats[index].name = newChatName;  // Cập nhật tên mới cho chat
    setChats(updatedChats);
    localStorage.setItem('chatHistory', JSON.stringify(updatedChats));
    setEditName(false);  // Đóng input chỉnh sửa tên
  };

  // Hàm hủy chỉnh sửa tên
  const cancelEditName = () => {
    setEditName(false);
    setNewChatName('');
  };

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem('chatHistory')) || [];
    setChats(storedChats);
  }, []);

  const addmess = async  (text) => {
    setquestion(text)
    const result = await model.generateContent(text);
    const response = await result.response.text();
    setanswer(response)
    console.log(response)
  }
const handleSubmit = async (e) => { 
    e.preventDefault();

    const text = e.target.text.value;
    if (!text) return;

    addmess(text);
  }


  return (
    <div className="chat-container">
      <header className="chat-header">Only Chat</header>
      <button className="new-chat-button" onClick={() => setCurrentChat([])}>New Chat</button>

      <div className="chat-layout" ref={chatLayoutRef}>
        <div className="chat-list">
          {chats.map((chat, index) => (
            <div key={index} className="chat-preview">
              {editName === index ? (
                <div className="rename-container">
                  <input
                    type="text"
                    value={newChatName}
                    onChange={(e) => setNewChatName(e.target.value)}
                  />
                  <button onClick={() => saveChatName(index)}>Save</button>
                  <button className="cancel" onClick={cancelEditName}>Cancel</button>
                </div>
              ) : (
                <div>
                  <button onClick={() => setCurrentChat(chat.messages)}>{chat.name}</button>
                  <button className="delete-button" onClick={() => deleteChat(index)}>Delete</button>
                  <button onClick={() => handleEditName(index)}>Rename</button>
                </div>
              )}
            </div>
          ))}
        </div>


        <div className="resize-handle" onMouseDown={handleMouseDown}></div>

        <div className="chat-box">
          {currentChat.map((message, index) => (
            <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : 'assistant-message'}`}>
              {message.text}
            </div>
          ))}
              {question && <div className="message user">{question}</div>}
          {answer && (
            <div className="message">
              <Markdown>{answer}
                </Markdown>
            </div>
            )}
        

        </div>
      </div>

      <footer className="chat-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chat-input"
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={sendMessage}>Send</button>
        <form className="newForm" onSubmit={handleSubmit} >
              
              <input id="file" type="file" multiple={false} hidden />
              <input type="text" name="text" placeholder="Ask anything..." />
              <button>
                <img src="/arrow.png" alt="" />
              </button>
            </form>

      </footer>
    </div>
  );
};

export default ChatPage;