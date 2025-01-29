import React, { useCallback } from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const VideoCall: React.FC = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const userName: string = location.state?.userName || 'User'; 

    const handleJitsiApi = useCallback((jitsiApi: any) => {
        jitsiApi.addEventListener('videoConferenceLeft', () => {
            navigate('/');
        });
        jitsiApi.executeCommand('displayName', userName);
    }, [navigate, userName]);

    return (
        <Container>
            <JitsiMeeting
                roomName={roomId ?? 'default-room'}
                onApiReady={handleJitsiApi} 
                getIFrameRef={(iframeRef) => {
                    iframeRef.style.width = '80%';
                    iframeRef.style.height = '80%';
                }}
            />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export default VideoCall;
