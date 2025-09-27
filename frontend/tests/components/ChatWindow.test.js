import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatWindow from '../../src/components/ChatWindow';

describe('ChatWindow', () => {
  it('should render messages', () => {
    const messages = [{ sender: 'user', content: 'Hello' }];
    render(<ChatWindow messages={messages} />);
    const messageElement = screen.getByText(/Hello/i);
    expect(messageElement).toBeInTheDocument();
  });
});
