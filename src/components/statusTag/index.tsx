import React from 'react';
import './style.scss';

interface StatusTagProps {
  status: 'Available' | 'Not Available';
}

const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  return (
    <span className={`status-tag ${status === 'Available' ? 'available' : 'not-available'}`}>
      {status}
    </span>
  );
};

export default StatusTag;
