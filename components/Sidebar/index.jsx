import { IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from 'email-validator';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import Chat from '../Chat';
import { auth, db } from '../../lib/firebase';

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
  const [user] = useAuthState(auth);
  const userCharRef = db
    .collection('chats')
    .where('users', 'array-contains', user.email);
  const [chatsSnapshot] = useCollection(userCharRef);

  const createChat = () => {
    const input = prompt(
      'Please enter an email address for the user you wish to chat with',
    );

    if (!input) return null;
    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExist(input) &&
      input !== user.email
    ) {
      // we add the chat into DB 'chats' collection
      db.collection('chats').add({
        users: [user.email, input],
      });
    }
  };

  const chatAlreadyExist = (recipientEmail) =>
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0,
    );

  return (
    <Container>
      <Header>
        <UserAvatar src={user.photoURL} onClick={() => auth.signOut()} />
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
      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </Container>
  );
};

export default Sidebar;
