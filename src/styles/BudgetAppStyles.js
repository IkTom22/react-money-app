import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>  ({
    root: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "white",
    }
 }));
export default useStyles;