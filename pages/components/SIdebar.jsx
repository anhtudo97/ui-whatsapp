import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { Chat, MoreVert } from '@material-ui/icons';

function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer></IconsContainer>
      </Header>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;
const Header = styled.div``;
const UserAvatar = styled(Avatar)``;
const IconsContainer = styled.div``;