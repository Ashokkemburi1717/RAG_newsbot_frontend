import React from 'react';
import '../styles/ChatMessage.scss';

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatMessageProps {
  message: Message;
  isLatest: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isLatest }) => {
  return (
    <div
      className={`chat-message ${
        message.role === "user" ? "chat-message--user" : "chat-message--assistant"
      } ${isLatest ? "chat-message--latest" : ""}`}
    >
      <div className="chat-message__bubble">{message.content}</div>
    </div>
  );
};
