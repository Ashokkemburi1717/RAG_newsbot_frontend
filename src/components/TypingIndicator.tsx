import React from 'react';
import { Bot } from 'lucide-react';
import '../styles/TypingIndicator.scss';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="typing-indicator">
      <div className="typing-indicator__icon">
        <Bot size={16} />
      </div>
      
      <div className="typing-indicator__content">
        <div className="typing-indicator__bubble">
          <div className="typing-indicator__dots">
            <div className="dot" />
            <div className="dot delay-1" />
            <div className="dot delay-2" />
          </div>
        </div>
        
        <div className="typing-indicator__text">
          <span>AI is typing...</span>
        </div>
      </div>
    </div>
  );
};
