import React, { useState, useEffect, useRef } from 'react';
import './chatpage.css';
import { Link } from 'react-router-dom';

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const [input, setInput] = useState('');
  const [currentChat, setCurrentChat] = useState([]);
  const [isResizing, setIsResizing] = useState(false);
  const [editName, setEditName] = useState(false);  // Để kiểm tra xem người dùng có đang chỉnh sửa tên không
  const [newChatName, setNewChatName] = useState('');  // Lưu tên mới khi người dùng đổi
  const chatListRef = useRef(null);
  const chatLayoutRef = useRef(null);

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

  return (
    <div className="chat-container">
      <header className="chat-header">ChatGPT</header>
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
      </footer>
    </div>
  );
};

export default ChatPage;
