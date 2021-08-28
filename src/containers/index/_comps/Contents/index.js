import React from 'react';
import { css } from '@emotion/react';
import IconTypo from './IconTypo';
import Object from './Object';

const container = css`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
`;

const Contents = () => (
  <div css={container}>
    <IconTypo />
    <Object />
  </div>
);

export default Contents;
