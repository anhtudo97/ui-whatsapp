import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

import { auth, db } from '../../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getRecipientEmail } from '../../utils/getRecipientEmail';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const Chat = ({ id, users }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [recipientSnapshot] = useCollection(
    db.collection('users').where('email', '==', getRecipientEmail(users, user)),
  );

  const enterChat = useCallback(() => {
    router.push(`/chat/${id}`);
  }, [router, id]);

  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(users, user);

  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      )}
      {recipientEmail}
    </Container>
  );
};

export default Chat;

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
