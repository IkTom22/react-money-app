import React from 'react';
import AccountForm from '../AccountForm';
import Fab from '@material-ui/core/Fab';
// import {DispatchContext} from '../contexts/accounts.context';
import { makeStyles } from '@material-ui/core/styles';
//import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RemoveIcon from '@material-ui/icons/Remove';
import { v4 as uuidv4 } from 'uuid';
// import styles from './styles/AddAccountStyles';
// import withStyles from '@material-ui/core/withStyles';
import cyan from '@material-ui/core/colors/cyan';
//Dialog
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';




const buttonColor = cyan[300];

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

const AddExpenses=()=>{
    // const accounts = useContext(DispatchContext);
const classes = useStyles();

const [open, setOpen] = React.useState(false);
const [scroll, setScroll] = React.useState('paper');

const handleClickOpen = (scrollType) => () => {
  setOpen(true);
  setScroll(scrollType);
};

const handleClose = () => {
  setOpen(false);
};

const descriptionElementRef = React.useRef(null);
React.useEffect(() => {
  if (open) {
    const { current: descriptionElement } = descriptionElementRef;
    if (descriptionElement !== null) {
      descriptionElement.focus();
    }
  }
}, [open]);




    return (
        <React.Fragment>
        
            <Fab 
                aria-label="add expenses" 
                
                style={{marginTop: "2rem", backgroundColor: buttonColor}} 
                onClick={handleClickOpen('paper')}
            >
                <RemoveIcon />
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                className={classes.modal}
            >
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                    <Fade in={open}>
                        <AccountForm type="exp" id={uuidv4()} handleClose={handleClose}/>
                    </Fade>
                    </DialogContentText>
            </DialogContent>
            
            </Dialog>
       
      </React.Fragment> 
    )
}

 export default AddExpenses;

// import React from 'react';
// import AccountForm from '../AccountForm';
// import Fab from '@material-ui/core/Fab';
// // import {DispatchContext} from '../contexts/accounts.context';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import RemoveIcon from '@material-ui/icons/Remove';
// import { v4 as uuidv4 } from 'uuid';
// // import styles from './styles/AddAccountStyles';
// // import withStyles from '@material-ui/core/withStyles';
// import cyan from '@material-ui/core/colors/cyan';

// const buttonColor = cyan[300];

// const useStyles = makeStyles((theme) => ({
//     modal: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     paper: {
//       backgroundColor: theme.palette.background.paper,
//       border: '2px solid #000',
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
      
      
//     },
//   }));

// const AddExpenses=()=>{
//     // const accounts = useContext(DispatchContext);
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);
   
//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };
//     return (
//         <React.Fragment>
        
//             <Fab 
//                 aria-label="add expenses" 
                
//                 style={{marginTop: "2rem", backgroundColor: buttonColor}} 
//                 onClick={handleOpen}
//             >
//                 <RemoveIcon />
//             </Fab>
//             <Modal
//                 aria-labelledby="transition-modal-title"
//                 aria-describedby="transition-modal-description"
//                 className={classes.modal}
//                 open={open}
               
//                 onClose={handleClose}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                 timeout: 500,
//                 }}
//             >
//             <Fade in={open}>
//             <div className={classes.paper}>
//                 <AccountForm type="exp" id={uuidv4()} handleClose={handleClose}/>
//             </div>
//             </Fade>
//         </Modal>
       
//       </React.Fragment> 
//     )
// }

// export default AddExpenses;