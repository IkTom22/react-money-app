import React from 'react';
import AccountForm from '../AccountForm';
import Fab from '@material-ui/core/Fab';
// import {DispatchContext} from '../contexts/accounts.context';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
// import styles from './styles/AddAccountStyles';
// import withStyles from '@material-ui/core/withStyles';

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

function AddIncome(){
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
                aria-label="add income" 
                color="secondary" 
                style={{marginTop: "2rem"}} 
                onClick={handleOpen}
            >
                <AddIcon />
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
                <AccountForm type="inc" id={uuidv4()} handleClose={handleClose}/>
            </div>
            </Fade>
        </Modal>
       
      </React.Fragment> 
    )
}

export default AddIncome;