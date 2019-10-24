import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";

const useStyle = makeStyles({
        box: {
            width: 500,
            height: 650,
            margin: 'auto',
            border: '2px solid black',
            marginTop: 20
        },

        textField: {
            width: 400,
            margin: 'auto',
            marginTop: 10
        },

        h2: {
            textAlign: 'center',
        },

        input: {
            width: 400,
            margin: 'auto'
        },

        p: {
            fontWeight: 'bold',
        },
    }
)

function Book(props) {
    const classes = useStyle();

    return (
        <div className={classes.box}>
            <h2 className={classes.h2}>Book a demo</h2>
            <div className={classes.input}>

                <TextField
                    required
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-name"
                    label="Email"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    label="Job Title"
                    className={classes.textField}
                    margin="normal"
                />

                <p className={classes.p}>Please choose your perferred contact channel:</p>

                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" row>
                        <FormControlLabel value="Skype" control={<Radio/>} label="Skype"/>
                        <FormControlLabel value="Whatsapp" control={<Radio/>} label="Whatsapp"/>
                        <FormControlLabel value="Phone" control={<Radio/>} label="Phone"/>
                    </RadioGroup>
                </FormControl>

                <TextField
                    required
                    id="standard-name"
                    label="Enter your Skype name"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    label="Website URL"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    label="What problem are you truing to solve?"
                    className={classes.textField}
                    margin="normal"
                />

                <p>I'm interested in:</p>

                <FormControlLabel control={<Checkbox value="checkedC"/>} label="Natice App"/>
                <FormControlLabel control={<Checkbox value="checkedC"/>} label="Progressive Web App"/>

            </div>


        </div>
    );
}

export default Book;
