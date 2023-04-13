import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Backdrop } from '@mui/material';
import { styled } from '@mui/material/styles';

const BlurBackdrop = styled(Backdrop)(({ theme }) => ({
  backdropFilter: 'blur(5px)',
  opacity: 0.5,
}));

const PopUpMessage: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleAgree = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleAgree}
      BackdropComponent={BlurBackdrop}
    >
      <DialogTitle>New User Detected</DialogTitle>
      <DialogContent>Welcome to Task Force 1 Semantic Search Alpha Build.</DialogContent>
      <DialogActions>
        <Button onClick={handleAgree}>Continue</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopUpMessage;