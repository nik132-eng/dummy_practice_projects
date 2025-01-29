import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';


const RoomSelection: React.FC = () => {
    const [roomName, setRoomName] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


  const validateInput = () => {
        if(!userName){
            setError('Please enter user name');
            return false;
        }
      if (!roomName) {
          setError('Please enter room name');
        return false;
      }
      setError('');
      return true;
    };

    const handleCreateRoom = () => {
      if (!validateInput()) return;
        const roomId = uuidv4();
        navigate(`/call/${roomId}`,{
            state:{userName}
        });
    };

    const handleJoinRoom = () => {
      if (!validateInput()) return;
        navigate(`/call/${roomName}`,{
           state:{userName}
        });
    };

    return (
        <Container>
            <Title>Jitsi Meet Demo</Title>
                <Form>
                  <Label htmlFor="userName">Enter User Name:</Label>
                  <Input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <Label htmlFor="roomName">Enter Room Name:</Label>
                    <Input type="text" id="roomName" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
                     {error && <Error>{error}</Error>}
                    <ButtonContainer>
                      <Button onClick={handleCreateRoom}>Create a New Room</Button>
                      <Button onClick={handleJoinRoom}>Join Room</Button>
                    </ButtonContainer>
                </Form>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    width: 300px;
    padding: 20px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Label = styled.label`
  margin-bottom: 5px;
    align-self: flex-start;
  color: #555;
`;

const Input = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
`;

const Error = styled.div`
    color: red;
    font-size: 12px;
    margin-bottom: 5px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px
    margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default RoomSelection;