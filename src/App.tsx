import { useRef, useEffect } from 'react';
import { ChatHeader } from './components/ChatHeader';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { TypingIndicator } from './components/TypingIndicator';
import { EmptyState } from './components/EmptyState';
import { useChat } from './hooks/useChat';
import './App.scss';

function App() {
  const { messages, isLoading, sessionId, sendMessage, clearSession } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = (message: string) => {
    sendMessage(message);
  };

  const handleSampleQuery = (query: string) => {
    sendMessage(query);
  };

  return (
    <div className="app">
      <ChatHeader
        sessionId={sessionId}
        messageCount={messages.length}
        onClearSession={clearSession}
        isLoading={isLoading}
      />

      <div className="app__body">
        <div className="app__messages">
          {messages.length === 0 ? (
            <EmptyState onSampleQuery={handleSampleQuery} />
          ) : (
            <div className="messages-container">
              {messages.map((message, index) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  isLatest={index === messages.length - 1}
                />
              ))}

              {isLoading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
}

export default App;
