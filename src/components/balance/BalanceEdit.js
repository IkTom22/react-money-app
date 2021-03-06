import React from 'react';
import EditBalanceForm from './EditBalanceForm';
import Fab from '@material-ui/core/Fab';
// import {DispatchContext} from '../contexts/accounts.context';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import cyan from '@material-ui/core/colors/cyan';
// import styles from './styles/AddAccountStyles';
// import withStyles from '@material-ui/core/withStyles';
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
    edit: {
        fontSize: "1rem",
        position: "absolute",
        right: '1rem',
        top: '1rem',
        width: "36px",
        height: "36px",
        backgroundColor: buttonColor
        // backgroundColor: 'pink'
    }
  }));

function BalanceEdit(){
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
        
            
            <Fab aria-label="edit balance" className={classes.edit} onClick={handleOpen}>
                <EditTwoToneIcon />
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
                    <EditBalanceForm handleClose={handleClose}/>
                </div>
            </Fade>
        </Modal>
       
      </React.Fragment> 
    )
}

export default BalanceEdit;