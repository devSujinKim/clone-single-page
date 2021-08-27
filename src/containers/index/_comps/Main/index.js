import React from 'react';
import { css } from '@emotion/react';
import Header from 'components/Header';

const mainContainer = css`
  width: 100%;
  height: 100%;
  background: url('/images/bg.png') center no-repeat;
  background-size: cover;
`;

const Main = () => (
  <div css={mainContainer}>
    <Header />
    <div>
      <div>{/* <img src="/images/icon_group.png" alt="아이콘" /> */}</div>
    </div>
  </div>
);

export default Main;
