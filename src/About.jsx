import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(10),
    }
}));

const About = () => {
    const classes = useStyles();

    return <div className={classes.content}>
        <Typography paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Mollitia, qui necessitatibus. Quam aperiam quas perspiciatis aliquam molestiae.
            Voluptatibus quia odio, qui perferendis aperiam, sapiente facilis velit maiores sed accusantium ab!
        </Typography>
    </div>;
};

export default About;