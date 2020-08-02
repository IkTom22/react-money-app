import React  from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DetailsTwoToneIcon from '@material-ui/icons/DetailsTwoTone';

import SyncAltRoundedIcon from '@material-ui/icons/SyncAltRounded';

import yellow from '@material-ui/core/colors/yellow';
import AccountDetailsDialog from './AccountDetailsDialog';

const buttonColor = yellow["A100"]

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      
    },
    transfer: {
        width: "25px",
        height: "25px",
        minHeight: "20px",
        backgroundColor: buttonColor,
        
    }
   
  }));

function AccountDetailsButton(props){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    console.log(props)
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Fab aria-label="allocate funds" className={classes.transfer} onClick={handleOpen} >
                <DetailsTwoToneIcon />
            </Fab>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <AccountDetailsDialog  {...props} handleClose={handleClose}/>
                </div>
                </Fade>
            </Modal>
       
      </React.Fragment> 
    )
}

export default AccountDetailsButton;