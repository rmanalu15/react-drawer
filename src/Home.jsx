import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(10),
    }
}));

const Home = props => {
    const classes = useStyles();

    return <div className={classes.content}>
        <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident molestiae numquam dolores?
            Non perferendis dicta, quod, optio amet eos fugiat quas officiis odio nobis voluptates sit autem nisi explicabo quaerat?
        </Typography>
    </div>;
};

export default Home;
