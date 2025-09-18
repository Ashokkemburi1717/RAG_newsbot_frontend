import { Message, ChatResponse } from '../types/chat';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class ChatService {
  private sessionId: string;

  constructor() {
    this.sessionId = this.generateSessionId();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  async sendMessage(message: string): Promise<ChatResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          sessionId: this.sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error sending message:', error);
      // Fallback response for demo purposes
      return {
        message: "I'm currently experiencing connectivity issues. Please ensure the backend server is running and try again.",
        sessionId: this.sessionId,
      };
    }
  }

  async getChatHistory(): Promise<Message[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/chat/history/${this.sessionId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.messages || [];
    } catch (error) {
      console.error('Error fetching chat history:', error);
      return [];
    }
  }

  async clearSession(): Promise<void> {
    try {
      await fetch(`${API_BASE_URL}/chat/clear/${this.sessionId}`, {
        method: 'DELETE',
      });
      
      // Generate new session ID after clearing
      this.sessionId = this.generateSessionId();
    } catch (error) {
      console.error('Error clearing session:', error);
      // Still generate new session ID for fresh start
      this.sessionId = this.generateSessionId();
    }
  }

  getCurrentSessionId(): string {
    return this.sessionId;
  }
}

export const chatService = new ChatService();