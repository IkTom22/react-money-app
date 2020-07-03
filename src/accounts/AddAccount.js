import React  from 'react';
import AddAccountForm from './AddAccountForm';
import Fab from '@material-ui/core/Fab';
//import {DispatchContext} from '../contexts/accounts.context';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';
import cyan from '@material-ui/core/colors/cyan';

const buttonColor = cyan[100]

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
  }));

function AddAccount(){
    // const accounts = useContext(DispatchContext);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
        
            <Fab 
                aria-label="add an wallet" 
                
                style={{margin: "2rem 0.5rem 0", backgroundColor: buttonColor}} 
                onClick={handleOpen}
            >
                <AccountBalanceWalletTwoToneIcon />
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
                <AddAccountForm  handleClose={handleClose}/>
            </div>
            </Fade>
        </Modal>
       
      </React.Fragment> 
    )
}

export default AddAccount;