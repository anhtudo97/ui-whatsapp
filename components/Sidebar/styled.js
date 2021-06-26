import styled from 'styled-components';

import { Avatar, Button } from '@material-ui/core';

const Container = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;
const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const SidebarButton = styled(Button)`
  width: 100%;

  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const IconsContainer = styled.div``;

export {
  Container,
  IconsContainer,
  UserAvatar,
  Header,
  SidebarButton,
  SearchInput,
  Search,
};
