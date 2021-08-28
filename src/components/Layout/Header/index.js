import React from 'react';
import { css } from '@emotion/react';
import { LogoIcon, MailIcon, SearchIcon } from 'components/Icon';

const headerContainer = css`
  width: 100%;
  height: 100%;
`;
const headerWrap = css`
  padding: 67px 0 17px;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1456px;
`;
const headerList = css`
  display: flex;
  align-items: center;
`;
const gnbList = css`
  display: flex;
  font-size: 28px;
`;
const gnbItem = css`
  display: flex;
  padding: 0 26.5px;
  & a {
    color: #fff;
  }
`;
const headerItem = css`
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
        <div css={{ display: 'flex' }}>
          <div css={{ margin: '8px 0' }}>
            <a href="#">
              <LogoIcon />
            </a>
          </div>
          <nav>
            {/* css={{ width: 963, paddingLeft: 393.5, boxSizing: 'border-box' }} */}
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
        </div>
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
  </header>
);

export default Header;
