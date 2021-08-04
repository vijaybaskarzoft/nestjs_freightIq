import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'components/Link';
import { Container, Grid } from '@material-ui/core';
// import Notice from 'components/Notice';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

//import useTranslationPlus from 'i18n/useTranslationPlus';
//import NavBar from './NavBar';
//import Footer from './Footer';
import Head from './Head';

const useStyles = makeStyles({
  contentContainer: {
    position: 'relative',
  },
});

const Layout = (props) => {
  const { children, showJoinFree, title } = props;

  const classes = useStyles();
  // const t = useTranslationPlus(null, 'layout');
  return (
    <>
      <Head title={title} />
      {/*<div className={classes.contentContainer}>*/}
      <Container>
      <Typography component="div" style={{ backgroundColor: 'red', }} />
        {/*<NavBar />*/}
        {children}
        {/*<Footer showJoinFree={showJoinFree} />*/}
      </Container>
      {/*</div>*/}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showJoinFree: PropTypes.bool,
  title: PropTypes.string,
};

Layout.defaultProps = {
  showJoinFree: false,
  title: null,
};

export default Layout;
