import React from 'react';
import { css, keyframes } from '@emotion/react';
import Header from 'components/Layout/Header';

const mainContainer = css`
  width: 100%;
  height: 100%;
  background: url('/images/bg.png') center no-repeat;
  background-size: cover;
`;
const imgWrap = css`
  position: relative;
  flex: 0 0 50%;
  max-width: 50%;
  & img {
    display: block;
    position: absolute;
  }
`;
const iconGroup = css`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`;
const spinner = keyframes`
  100% {transform: rotate(360deg);}
`;
const wheelImg = css`
  top: 307px;
  left: 66px;
  width: 46.9px;
  height: 62.9px;
  animation: ${spinner} 3s infinite linear;
`;
const zoom = keyframes`
  0% {transform: scale(1.1)}
  100% {transform: scale(0.6)}
`;
const percentImg = css`
  top: 308px;
  left: 635px;
  width: 46.9px;
  height: 62.9px;
  animation: ${zoom} 3s infinite alternate;
`;
const circleImg = css`
  top: 152px;
  left: 680px;
  width: 40px;
  height: 51.6px;
`;
const bounce = keyframes`
  0% {transform: translateY(0px);}
  100% {transform: translateY(-15px);}
`;
const keyImg = css`
  top: 460px;
  left: 702px;
  width: 31.9px;
  height: 84.9px;
  animation: ${bounce} 1s infinite alternate;
`;
const shoppingImg = css`
  top: 12px;
  left: -80px;
  width: 100%;
  height: auto;
`;
const textWrap = css`
  padding: 110px 0 107px;
  flex: 0 0 40%;
  max-width: 40%;
  & h2 {
    font-size: 74px;
    font-weight: bold;
    line-height: 1.22;
    letter-spacing: -1.18px;
    color: #fff;
  }
  & h3 {
    padding: 27px 0 14px;
    color: #fff;
    font-size: 34px;
    line-height: 2.65;
    letter-spacing: -0.54px;
  }
  & p {
    max-width: 540px;
    padding-bottom: 58px;
    color: #fff;
    font-size: 18px;
    line-height: 2;
    letter-spacing: -0.29px;
  }
  & a {
    display: inline-block;
    padding: 19px 42px 20px;
    border-radius: 50px;
    border: 1px solid #fff;
    color: #fff;
    font-size: 30px;
    line-height: 1.2;
    letter-spacing: -0.48px;
    &:hover {
      background-color: #fff;
      color: #ff8147;
    }
  }
`;

const Main = () => (
  <div css={mainContainer}>
    <Header />
    <div css={{ margin: '0 auto', maxWidth: 1470 }}>
      <div
        css={{
          paddingBottom: '158px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <div css={imgWrap}>
          <img css={iconGroup} src="/images/icon_group.png" alt="icons" />
          <img css={wheelImg} src="/images/wheel.png" alt="wheel icon" />
          <img css={percentImg} src="/images/percent.png" alt="percent icon" />
          <img css={circleImg} src="/images/circle.png" alt="circle icon" />
          <img css={keyImg} src="/images/key.png" alt="key icon" />
          <img
            css={shoppingImg}
            src="/images/shopping.png"
            alt="online shopping"
          />
        </div>
        <div css={textWrap}>
          <h2>
            ONLINE
            <br />
            SHOPPING
          </h2>
          <h3>SPECIAL OFFER</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <a href="#">READ MORE</a>
        </div>
      </div>
    </div>
  </div>
);

export default Main;
