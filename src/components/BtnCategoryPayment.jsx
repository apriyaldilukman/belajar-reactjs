import {Button, makeStyles} from "@material-ui/core";

const styles = makeStyles(theme => ({
    button:{
        marginBottom: '20px',
        width: "100%",
        height: "50",
        color: "#780000",
        textTransform: "inherit",
        fontSize: "14.5 px",
        fontFamily: "[OpenSansRegular]",
        backgroundColor: "#e1e1e1"

    },
    leftIcon:{
        marginRight: theme.spacing(2)
    },
    containerImage:{
        width:"50px",
        height: "50px"
    }

}));

function BtnCategoryPayment({id, onClick, label}){
    const classes = styles();

    return(
        <Button
            id={id}
            style={{justifyContent: "flex-start"}}
            variant="contained"
            className={classes.button}
            onClick={onClick}
            >
                <div className={classes.containerImage}>
                    <img className={classes.leftIcon} src=""alt="Mobile"/>
                </div>

        </Button>
    );
}

export default BtnCategoryPayment;