import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialogs({props}) {
    debugger
    const { title, despcription, isOpen } = props
    const [open, setOpen] = React.useState(false);
    
    const handleClose = () => {
        setOpen(false)
    }

    React.useEffect(()=>{
        if (isOpen === true) {
            setOpen(true);
          }
    },[title])

    return (
        <React.Fragment>
            <Stack sx={{ border: '15px solid #333' }}>
            {isOpen ? <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        {despcription}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose} >
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog> : ""}
            </Stack>
        </React.Fragment>
    );
}