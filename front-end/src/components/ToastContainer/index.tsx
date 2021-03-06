import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessages } from '../../hooks/Toast';
import { Container } from './styles';

import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessages[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container zIndexMessageShow={Object.keys(messagesWithTransitions).length !== 0 ? true : false}>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
