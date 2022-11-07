import { useEffect, useState } from 'react';

import {
  ModalOverlay,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  ModalFooter,
  Button,
} from '@chakra-ui/react';

import { EmailIcon } from '@chakra-ui/icons';

import './UserModal.css';

const UserModal = (props) => {
  const Overlay = () => <ModalOverlay backdropFilter='blur(5px)' />;

  const [overlay, setOverlay] = useState(<Overlay />);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (props.user != '') {
      setOverlay(<Overlay />);
      onOpen();
    }
  }, []);

  const openMailApp = () =>
    (window.location = 'mailto:santimorelle23@gmail.com');

  const signOut = () => {
    props.signOut();
    onClose();
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isCentered
      isOpen={isOpen}
      onClose={onClose}
    >
      {overlay}
      <ModalContent>
        <ModalHeader>Hey {props.user}! 👋</ModalHeader>
        <ModalBody>
          <Text>Thank you for helping me test my application.</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme='blue'
            leftIcon={<EmailIcon />}
            mr={2}
            onClick={openMailApp}
            variant='solid'
          >
            Feedback
          </Button>
          <Button onClick={signOut}>Sign out</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UserModal;
