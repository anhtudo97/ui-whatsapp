import { IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from 'email-validator';

import {
  Container,
  IconsContainer,
  UserAvatar,
  Header,
  SidebarButton,
  SearchInput,
  Search,
} from './styled';

const Sidebar = () => {
  const createChat = () => {
    const input = prompt(
      'Please enter an email address for the user you wish to chat with',
    );

    if (!input) return null;
    if (EmailValidator.validate(input)) {
      // we add the chat into DB 'chats' collection
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" />
      </Search>
      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>
      {/* List of chats */}
    </Container>
  );
};

export default Sidebar;
