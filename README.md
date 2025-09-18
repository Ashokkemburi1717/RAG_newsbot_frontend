# RAG-Powered News Chatbot - Frontend

This is the frontend application for the RAG-powered news chatbot assignment for Voosh. Built with React, TypeScript, and Tailwind CSS.

## Tech Stack Used

### Frontend
- **React 18** with TypeScript for type-safe development
- **SCSS** for utility-first styling
- **Lucide React** for consistent iconography
- **Vite** for fast development and optimized builds

### Key Features
- Modern, responsive chat interface
- Real-time message streaming simulation
- Session management with unique identifiers
- Message history persistence
- Clean session reset functionality
- Beautiful animations and micro-interactions
- Mobile-first responsive design

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <frontend-repo-url>
cd rag-chatbot-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update the `.env` file with your API configuration:
```env
VITE_API_URL=http://localhost:3000/api
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── ChatHeader.tsx   # Chat interface header
│   ├── ChatMessage.tsx  # Individual message component
│   ├── ChatInput.tsx    # Message input field
│   ├── TypingIndicator.tsx # Loading animation
│   └── EmptyState.tsx   # Welcome screen
├── hooks/               # Custom React hooks
│   └── useChat.ts       # Chat state management
├── services/            # API services
│   └── chatService.ts   # Chat API integration
├── types/               # TypeScript definitions
│   └── chat.ts          # Chat-related types
└── App.tsx             # Main application component
```

## Key Components

### ChatService
Handles all API communication including:
- Session management with unique identifiers
- Message sending and receiving
- Chat history retrieval
- Session clearing

### useChat Hook
Custom hook managing:
- Message state
- Loading states
- Session management
- API integration

### Chat Interface
- **ChatHeader**: Session info and controls
- **ChatMessage**: Individual message display
- **ChatInput**: Message composition
- **TypingIndicator**: Loading animation
- **EmptyState**: Welcome screen with sample queries

## API Integration

The frontend expects the following backend endpoints:

- `POST /api/chat` - Send message and get response
- `GET /api/chat/history/:sessionId` - Get session history
- `DELETE /api/chat/clear/:sessionId` - Clear session

## Design System

### Colors
- Primary: Blue (#3B82F6)
- Secondary: Slate (#64748B)
- Success: Green (#10B981)
- Warning: Amber (#F59E0B)
- Error: Red (#EF4444)

### Typography
- Font: Inter (system fallback)
- Body line height: 150%
- Header line height: 120%

### Spacing
- 8px base spacing system
- Consistent margins and padding
- Proper visual hierarchy

## Performance Optimizations

- Component memoization for chat messages
- Efficient re-rendering with React keys
- Optimized bundle size with Vite
- Responsive images and assets
- CSS animations for smooth UX

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the Voosh assignment and is for evaluation purposes.