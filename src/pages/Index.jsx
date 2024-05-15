import React, { useState } from 'react';
import { Box, Button, Flex, Input, Text, VStack } from '@chakra-ui/react';
import { FaPaperPlane } from 'react-icons/fa';

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'You' }]);
      setInput('');
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" bg="gray.50" p={4}>
      <Box bg="white" p={6} rounded="md" shadow="md" w="100%" maxW="md">
        <VStack spacing={4} align="stretch">
          <Box bg="gray.100" p={4} rounded="md" h="60vh" overflowY="auto">
            {messages.map((msg, index) => (
              <Text key={index} align={msg.sender === 'You' ? 'right' : 'left'}>
                <strong>{msg.sender}:</strong> {msg.text}
              </Text>
            ))}
          </Box>
          <Flex>
            <Input
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') sendMessage();
              }}
            />
            <Button ml={2} onClick={sendMessage} colorScheme="teal">
              <FaPaperPlane />
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;