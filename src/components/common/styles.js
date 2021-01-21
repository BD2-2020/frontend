const backgroundShape = require("../../images/shape.svg");

const MaterialFormStyle = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.secondary["A100"],
        overflow: "hidden",
        background: `url(${backgroundShape}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "0 1000px",
        marginTop: 10,
        padding: 20,
        paddingBottom: 500
    },
    grid: {
        margin: `0 ${theme.spacing(2)}px`
    },
    smallContainer: {
        width: "60%"
    },
    bigContainer: {
        width: "80%"
    },
    logo: {
        marginBottom: 24,
        display: "flex",
        justifyContent: "center"
    },
    stepContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    stepGrid: {
        width: "80%"
    },
    buttonBar: {
        marginTop: 32,
        display: "flex",
        justifyContent: "center"
    },
    button: {
        backgroundColor: theme.palette.primary["A100"]
    },
    backButton: {
        marginRight: theme.spacing(1) 
    },
    outlinedButtom: {
        textTransform: "uppercase",
        margin: theme.spacing(1)
    },
    stepper: {
        backgroundColor: "transparent"
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: "left",
        color: theme.palette.text.secondary
    },
    topInfo: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 42
    },
    formControl: {
        width: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(3)
    },
    option: {
        fontSize: 15,
        '& > span': {
        marginRight: 10,
        fontSize: 18,
        },
    },
});

const MainPageStyle = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.grey["100"],
      overflow: "hidden",
      background: `url(${backgroundShape}) no-repeat`,
      backgroundSize: "cover",
      backgroundPosition: "0 400px",
      paddingBottom: 200
    },
    grid: {
      width: 1200,
      marginTop: 40,
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% - 20px)"
      }
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: "left",
      color: theme.palette.text.secondary
    },
    rangeLabel: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: theme.spacing(2)
    },
    topBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 32
    },
    outlinedButtom: {
      textTransform: "uppercase",
      margin: theme.spacing(1)
    },
    actionButtom: {
      textTransform: "uppercase",
      margin: theme.spacing(1),
      width: 152
    },
    blockCenter: {
      padding: theme.spacing(2),
      textAlign: "center"
    },
    block: {
      padding: theme.spacing(2)
    },
    box: {
      marginBottom: 40,
      height: 65
    },
    inlining: {
      display: "inline-block",
      marginRight: 10
    },
    buttonBar: {
      display: "flex"
    },
    alignRight: {
      display: "flex",
      justifyContent: "flex-end"
    },
    noBorder: {
      borderBottomStyle: "hidden"
    },
    loadingState: {
      opacity: 0.05
    },
    loadingMessage: {
      position: "absolute",
      top: "40%",
      left: "40%"
    },
    logo: {
      marginBottom: 24,
      display: "flex",
      justifyContent: "center"
    },
});

const MaterialCardStyle = theme => ({
    paper: {
      padding: theme.spacing(3),
      textAlign: 'left',
      color: theme.palette.text.secondary
    },
    avatar: {
      width: '100%',
      maxWidth: '200px',
      borderRadius: '10%',
      backgroundColor: theme.palette.grey['200'],
      color: theme.palette.text.primary,
    },
    avatarContainer: {
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginBottom: theme.spacing(4)
      }
    },
    itemContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    },
    baseline: {
      width: '100%',
      alignSelf: 'baseline',
      marginLeft: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: 0
      }
    },
    inline: {
      display: 'inline-block',
      marginLeft: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0
      }
    },
    inlineRight: {
      width: '30%',
      textAlign: 'right',
      alignSelf: 'flex-end',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        margin: 0,
        textAlign: 'center'
      }
    },
    backButton: {
      marginRight: theme.spacing(2)
    }
});


export { MaterialFormStyle, MainPageStyle, MaterialCardStyle };
