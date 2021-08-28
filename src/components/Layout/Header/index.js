import React from 'react';
import { css } from '@emotion/react';
import { LogoIcon, MailIcon, SearchIcon } from 'components/Icon';

const headerContainer = css`
  width: 100%;
  height: 100%;
`;
const headerWrap = css`
  margin: 0 auto;
  padding: 67px 0 17px;
  width: 100%;
  max-width: 1456px;
`;
const headerList = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const gnbList = css`
  display: flex;
  padding: 26px 0 30px;
  font-size: 28px;
`;
const gnbItem = css`
  display: flex;
  & a {
    display: block;
    padding: 0 26px;
    color: #fff;
  }
`;
const headerItem = css`
  margin-left: 116px;
  display: flex;
  align-items: center;
`;
const signUpButton = css`
  display: block;
  margin-right: 30px;
  padding: 7px 38px 12px;
  border-radius: 50px;
  border: 1px solid #fff;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  line-height: 1.37;
  letter-spacing: -0.48px;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #ff8147;
  }
`;

const Header = () => (
  <header css={headerContainer}>
    <div css={headerWrap}>
      <div css={headerList}>
        <div css={{ margin: '8px 0' }}>
          <a href="#" css={{ display: 'block' }}>
            <LogoIcon />
          </a>
        </div>
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          <nav>
            <ul css={gnbList}>
              <li css={gnbItem}>
                <a href="#">Home</a>
              </li>
              <li css={gnbItem}>
                <a href="#">About us</a>
              </li>
              <li css={gnbItem}>
                <a href="#">Services</a>
              </li>
            </ul>
          </nav>
          <div css={headerItem}>
            <a href="#" css={signUpButton}>
              Sign up
            </a>
            <div css={{ marginRight: 28 }}>
              <SearchIcon />
            </div>
            <MailIcon />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
