import React from 'react';
import { css } from '@emotion/react';

const container = css`
  padding: 53px 60px 47px;
  width: 100%;
  height: auto;
  background: url('/images/object.png') center no-repeat;
  background-size: contain;
  box-sizing: border-box;
  & h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 0.9;
    letter-spacing: -0.64px;
    color: #fff;
  }
  & p {
    padding-top: 22px;
    max-width: 404px;
    font-size: 16px;
    line-height: 1.69;
    letter-spacing: -0.26px;
    color: #fff;
  }
`;

const Object = () => (
  <div css={container}>
    <h2>Object name</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry’s standard dummy text ever since the
      1500s.
    </p>
  </div>
);

export default Object;
