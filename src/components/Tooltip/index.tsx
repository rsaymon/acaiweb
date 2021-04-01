import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <div>
      <Container className={className}>
        {children}
        <span>{title}</span>
      </Container>
    </div>
  );
};

export default Tooltip;
