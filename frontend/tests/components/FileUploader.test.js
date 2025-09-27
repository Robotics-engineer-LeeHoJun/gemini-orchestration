import React from 'react';
import { render, screen } from '@testing-library/react';
import FileUploader from '../../src/components/FileUploader';

describe('FileUploader', () => {
  it('should handle file selection', () => {
    render(<FileUploader />);
    const inputElement = screen.getByLabelText(/upload file/i);
    expect(inputElement).toBeInTheDocument();
  });
});
