import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useDispatch,
} from 'react-redux';
import { useRouter } from 'next/router';
//import {
//  resetDashboard,
//} from 'features/core/appActions';

const CoreApp = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const { asPath } = router;

    if (!asPath.split('?')[0].includes('/dashboard')) {
      //dispatch reset action
      dispatch(reset())
    }
  }, [dispatch, router]);

  return (
    <>
      {children}
    </>
  );
};

export default CoreApp;
