import React from 'react';
import '../styles/EmptyState.scss';

interface EmptyStateProps {
  onSampleQuery: (query: string) => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onSampleQuery }) => {
  const sampleQueries = [
    "What are today’s top headlines?",
    "Summarize sports news",
    "Latest technology updates",
    "Political news today",
    "Entertainment highlights"
  ];

  return (
    <div className="empty-state animate-fade-in">
      <div className="empty-state__card">
        <h2 className="empty-state__title">Welcome to NewsBot</h2>
        <p className="empty-state__subtitle">
          Ask me about the latest news or try one of the sample queries below:
        </p>

        <div className="empty-state__queries">
          {sampleQueries.map((query, index) => (
            <button
              key={index}
              className="empty-state__query-btn"
              onClick={() => onSampleQuery(query)}
            >
              {query}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
