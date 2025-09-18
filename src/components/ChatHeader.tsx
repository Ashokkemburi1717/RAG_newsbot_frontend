import React from 'react';
import { RefreshCw, MessageSquare, Zap } from 'lucide-react';
import '../styles/ChatHeader.scss';

interface ChatHeaderProps {
  sessionId: string;
  messageCount: number;
  onClearSession: () => void;
  isLoading?: boolean;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  sessionId, 
  messageCount,
  onClearSession,
  isLoading = false
}) => {
  return (
    <div className="chat-header">
      <div className="chat-header__top">
        <div className="chat-header__left">
          <div className="chat-header__icon">
            <MessageSquare size={20} className="icon" />
          </div>
          <div>
            <h1 className="chat-header__title">News Assistant</h1>
            <div className="chat-header__status">
              <div className="chat-header__online">
                <div className="chat-header__dot"></div>
                <span>Online</span>
              </div>
              <span className="chat-header__separator">•</span>
              <span>{messageCount} messages</span>
            </div>
          </div>
        </div>

        <div className="chat-header__right">
          <div className="chat-header__badge">
            <Zap size={14} className="zap" />
            <span>RAG Powered</span>
          </div>
          
          <button
            onClick={onClearSession}
            disabled={isLoading}
            className={`chat-header__button ${isLoading ? 'loading' : ''}`}
          >
            <RefreshCw size={14} className={isLoading ? 'spin' : ''} />
            <span className="label">New Chat</span>
          </button>
        </div>
      </div>
      
      <div className="chat-header__session">
        <span>Session: {sessionId.substring(sessionId.length - 8)}</span>
      </div>
    </div>
  );
};
