import React, { useState } from 'react';
import { Send } from 'lucide-react';
import '../styles/ChatInput.scss';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form className="chat-input" onSubmit={handleSend}>
      <input
        type="text"
        className="chat-input__field"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        disabled={disabled}
      />
      <button
        type="submit"
        className="chat-input__button"
        disabled={!message.trim() || disabled}
      >
        <Send size={16} />
      </button>
    </form>
  );
};
