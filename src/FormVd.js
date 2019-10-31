import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { withStyles } from '@material-ui/core/styles';
import {green, orange} from '@material-ui/core/colors';
const useStyles =makeStyles({
    box: {
        width: 650,
        height: 500,
        margin: "auto",
        border: "2px slid black",
        marginTop: 20
    },
    text:{
        width: 500,
        margin: "auto"
    }

})
const GreenRadio = withStyles({
    root: {
        color: orange[400],
        '&$checked': {
            color: orange[600],
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);
export default function AddressForm(props) {
    const  classes=useStyles()
    const [value, setValue] =useState();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [job,setJob]=useState('')

    const handleName = event => {
        setName(event.target.value);
        console.log("huy",name)
    };
    const handleEmail = event => {
        setEmail(event.target.value);
    };
    const handleJob= event => {
        setJob(event.target.value);
    };
    const handleChange = event => {
        setValue(event.target.value);
        console.log(value)
    };

    return (
        <div style={{paddingTop: 20, width: 600, margin: 'auto', border: "2px solid black"}}>
            <React.Fragment>
                <Typography variant="h6" gutterBottom style={{textAlign: 'center'}}>
                    <h1> Book a demo </h1>
                </Typography>
                <Grid container spacing={3} className={classes.text}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            onChange={handleName}
                            label="name"
                            fullWidth
                            autoComplete="name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="email"
                            onChange={handleEmail}
                            fullWidth
                            autoComplete="billing address-line1"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="jobTitle"
                            name="jobTitle"
                            label="job Title"
                            onChange={handleJob}
                            fullWidth
                            autoComplete="jobTitle"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        Please choose your preferred contact channel:*
                    </Grid>
                    <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange}  row>
                        <FormControlLabel
                            value="Skype"
                            control={<GreenRadio style={{Color:"#ff5722"}} color="primary"/>}
                            label="Skype"
                            labelPlacement="eSkype"
                        />
                        <FormControlLabel
                            value="Whatapp"
                            control={<GreenRadio color="primary"/>}
                            label="Whatapp"
                            labelPlacement="Whatapp"
                        />
                        <FormControlLabel
                            value="Phone"
                            control={<GreenRadio color="primary"/>}
                            label="Phone"
                            labelPlacement="Phone"
                        />
                    </RadioGroup>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="SkypeName"
                            name="SkypeName"
                            label="Enter your Skype name "
                            fullWidth
                            autoComplete="name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="WebURL"
                            name="WebURL"
                            label="Website URL "
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="problem"
                            name="problem"
                            label="What problem are you trying to solve?"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        I'm interested in*
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                            label="Native App"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                            label="Progressive Web App"
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        </div>
    );
}