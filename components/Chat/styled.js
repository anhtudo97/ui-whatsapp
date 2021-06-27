import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  margin: 5px;
  margin-right: 15px;

  :hover {
    opacity: 0.8;
  }
`;

export { UserAvatar, Container };
