import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Reciever, Sender, Timestamp } from './styled';
import { auth } from '../../lib/firebase';
import moment from 'moment';

const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth);

  const TypeOfMessage = user === userLoggedIn.email ? Sender : Reciever;

  return (
    <Container>
      <TypeOfMessage>
        {message.message}

        <Timestamp>
          {message.timestamp ? moment(message.timestamp).format('LT') : ''}
        </Timestamp>
      </TypeOfMessage>
    </Container>
  );
};

export default Message;
