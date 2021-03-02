import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="text-center py-16 px-4 font-medium text-red-500">{message}</div>
);

export default ErrorMessage;
