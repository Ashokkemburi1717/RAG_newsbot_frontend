import { useState, useEffect, useCallback } from 'react';
import { Message } from '../types/chat';
import { chatService } from '../services/chatService';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    setSessionId(chatService.getCurrentSessionId());
    loadChatHistory();
  }, []);

  const loadChatHistory = useCallback(async () => {
    try {
      const history = await chatService.getChatHistory();
      setMessages(history);
    } catch (error) {
      console.error('Failed to load chat history:', error);
    }
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: Message = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      content,
      role: 'user',
      timestamp: new Date(),
      sessionId: chatService.getCurrentSessionId(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await chatService.sendMessage(content);
      
      const assistantMessage: Message = {
        id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        content: response.message,
        role: 'assistant',
        timestamp: new Date(),
        sessionId: response.sessionId,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Failed to send message:', error);
      const errorMessage: Message = {
        id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        content: 'Sorry, I encountered an error while processing your request. Please try again.',
        role: 'assistant',
        timestamp: new Date(),
        sessionId: chatService.getCurrentSessionId(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearSession = useCallback(async () => {
    setIsLoading(true);
    try {
      await chatService.clearSession();
      setMessages([]);
      setSessionId(chatService.getCurrentSessionId());
    } catch (error) {
      console.error('Failed to clear session:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    messages,
    isLoading,
    sessionId,
    sendMessage,
    clearSession,
  };
};