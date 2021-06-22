import { CommonLoading } from 'react-loadingg';
import styled from 'styled-components';

const Loading = () => {
    return (
        <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <div>
                <CommonLoading size="large" />;
            </div>
        </center>
    )
}

export default Loading

const Logo = styled.img`
    margin-bottom: 20px;
    height:200px;
    object-fit: cover;
`


