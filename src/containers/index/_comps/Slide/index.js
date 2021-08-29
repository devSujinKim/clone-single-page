import React from 'react';
import { css } from '@emotion/react';
import { NextIcon, PrevIcon } from 'components/Icon';

const container = css`
  background-color: #2f9609;
`;
const slideWrap = css`
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
`;
const slideItemWrap = css`
  display: flex;
`;
const slideItem = css`
  padding: 46px 85px 46px 66px;
  color: #fff;
  &:after {
    content: '""',
    position: abolute;
    height: 200px;
  }
  & strong {
    font-size: 2.8rem;
  }
  & p {
    padding-top: 6px;
    font-size: 1.8rem;
  }
`;
const currentSlideItem = css`
  background-color: #eaeaea;
  & strong {
    color: #2c2c2c;
  }
  & p {
    color: #657285;
  }
`;
const arrowWrap = css`
  display: flex;
  position: absolute;
  top: 53px;
  right: 0;
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 9px;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 1px solid #fff;
  }
`;

const Slide = () => (
  <div css={container}>
    <div css={slideWrap}>
      <div css={slideItemWrap}>
        <div css={[slideItem, currentSlideItem]}>
          <strong>Step1</strong>
          <p>
            Text Text Text Text Text Text Text
            <br />
            Text Text Text Text Text Text Text
          </p>
        </div>
        <div css={slideItem}>
          <strong>Step2</strong>
          <p>
            Text Text Text Text Text Text Text
            <br />
            Text Text Text Text Text Text Text
          </p>
        </div>
        <div css={slideItem}>
          <strong>Step3</strong>
          <p>
            Text Text Text Text Text Text Text
            <br />
            Text Text Text Text Text Text Text
          </p>
        </div>
      </div>
      <div css={arrowWrap}>
        <button type="button">
          <PrevIcon />
        </button>
        <button type="button">
          <NextIcon />
        </button>
      </div>
    </div>
  </div>
);

export default Slide;
