import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';
//import useTranslationPlus from 'i18n/useTranslationPlus';
import theme from 'features/core/theme';

const Head = ({ title }) => {
  // const t = useTranslationPlus('glossary');

  // const newTitle = [title, t('appName')].filter((s) => !!s).join(' - ');

  return (
    <NextHead>
      <title>Fright IQ</title>
      <meta name="description" content="Discover a new way to work abroad. Kappitaan was created as a single platform to help you get training for work abroad. Working closely with recruiters and immigration specialists, we’ll help you start your new career as a healthcare professional in just 6-9 months." />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      <link rel="apple-touch-icon" sizes="57x57" href="-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content={theme.palette.primary.main} />
      <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
      {/* PWA primary color */}
      <meta name="theme-color" content={theme.palette.primary.main} />
    </NextHead>
  );
};

Head.propTypes = {
  title: PropTypes.string,
};

Head.defaultProps = {
  title: null,
};

export default Head;
