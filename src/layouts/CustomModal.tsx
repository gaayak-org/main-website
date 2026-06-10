import { alpha, Backdrop, Box, Modal, styled } from "@mui/material";
import { ReactNode } from "react";

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  transition: `opacity ${120}ms`,
  opacity: 0,
  // zIndex: theme.zIndex.tooltip + 100,
  backgroundColor: alpha(theme.palette.grey[700], 0.5),
  backdropFilter: 'blur(2px)',
  ...theme.applyStyles('dark', {
    backgroundColor: alpha(theme.palette.grey[900], 0.6),
  })
}));

const StyledModalBox = styled(Box)(({ theme }) => ({
  outline: 'none',
  boxShadow: `0px 4px 16px ${alpha(theme.palette.common.black, 0.2)}`,
  borderRadius: theme.shape.borderRadius,
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[300],
  backgroundColor: (theme.vars || theme).palette.background.paper,
  ...theme.applyStyles('dark', {
    backgroundColor: (theme.vars || theme).palette.primaryDark[900],
    boxShadow: `0px 4px 16px ${alpha(theme.palette.common.black, 0.8)}`,
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.primaryDark[700],
  })
}));

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: number | string;
  fullHeight?: boolean;
}

export default function CustomModal({
  open,
  onClose,
  children,
  maxWidth = 400,
  fullHeight = false
}: CustomModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      slots={{ backdrop: StyledBackdrop }}
    >
      <StyledModalBox
        sx={{
          position: 'absolute',
          top: { xs: fullHeight ? 0 : '20%', sm: '50%' },
          left: '50%',
          transform: { 
            xs: fullHeight ? 'translate(-50%, 0)' : 'translate(-50%, -20%)', 
            sm: 'translate(-50%, -50%)' 
          },
          width: { xs: '100%', sm: maxWidth },
          // height: fullHeight ? '100%' : 'auto',
          // maxHeight: fullHeight ? '100%' : '80vh',
          // overflow: 'auto'
        }}
      >
        {children}
      </StyledModalBox>
    </Modal>
  );
};