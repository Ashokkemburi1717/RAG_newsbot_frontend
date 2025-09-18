export interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
    sessionId: string;
  }
  
  export interface ChatSession {
    id: string;
    messages: Message[];
    createdAt: Date;
    lastActivity: Date;
  }
  
  export interface ChatResponse {
    message: string;
    sessionId: string;
    sources?: string[];
    confidence?: number;
  }