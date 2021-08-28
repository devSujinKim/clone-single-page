import React from 'react';
import { css } from '@emotion/react';
import {
  FacebookIcon,
  MailFillIcon,
  NaverIcon,
  PhoneIcon,
  YoutubeIcon,
} from 'components/Icon';

const footColumn = css`
  padding: 4px 0;
  display: flex;
  justify-content: space-between;
`;
const footLink = css`
  display: flex;
  li {
    border-right: 1px solid #d5d9e2;
    &:first-child {
      a {
        padding-left: 0;
      }
    }
    &:last-child {
      border-right: 0;
    }
  }
  a {
    padding: 0 16px;
    display: block;
    font-size: 13px;
    font-weight: 500;
    line-height: 14px;
    color: #788191;
  }
`;
const footFlexEnd = css`
  display: flex;
  justify-content: flex-end;
`;
const footConnect = css`
  display: flex;
  & li {
    padding: 0 10px;
    display: flex;
    align-items: center;
    & a {
      padding-left: 4px;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.5;
      letter-spacing: 0.3px;
      color: #788191;
    }
  }
`;
const customerButton = css`
  margin-left: 10px;
  padding: 4px 15.5px 5px;
  border-radius: 4px;
  background-color: #009ede;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
`;
const address = css`
  padding-top: 10px;
  font-size: 12px;
  font-style: normal;
  line-height: 1.67;
  color: #788191;
  & a {
    color: #788191;
  }
`;
const snsLink = css`
  & a {
    margin: 0 2px;
    display: block;
    width: 28px;
    height: 28px;
  }
`;

const Footer = () => (
  <footer css={{ backgroundColor: '#f9f9fb' }}>
    <div css={{ margin: '0 auto', padding: '40px 0 45px', maxWidth: 1290 }}>
      <div
        css={[
          footColumn,
          { alignItems: 'center', borderBottom: '1px solid #d5d9e2' },
        ]}
      >
        <ul css={footLink}>
          <li>
            <a href="#">회사소개</a>
          </li>
          <li>
            <a href="#">채용안내</a>
          </li>
          <li>
            <a href="#">개인정보 처리방침</a>
          </li>
          <li>
            <a href="#">이용약관</a>
          </li>
          <li>
            <a href="#">원격지원</a>
          </li>
        </ul>
        <div css={footFlexEnd}>
          <ul css={footConnect}>
            <li>
              <PhoneIcon />
              <a href="tel:1588-9784">1588-9784</a>
            </li>
            <li>
              <MailFillIcon />
              <a href="mailto:help@copykiller.com">help@copykiller.com</a>
            </li>
          </ul>
          <button type="button" css={customerButton}>
            문의하기
          </button>
        </div>
      </div>
      <div css={footColumn}>
        <address css={address}>
          서울시 성동구 성수일로4길 25 1706호 (우.04781) ㈜무하유 | 대표이사
          신동호 | 사업자등록번호 206-86-55577
          <br />
          통신판매업신고번호 제2011-서울성동-0831호 | 구매 및 영업문의 | T.{' '}
          <a href="tel:02-2115-8765">02-2115-8765</a> | F. 02-2115-8764 | E.{' '}
          <a href="mailto:marketing@muhayu.com">marketing@muhayu.com</a>
          <br />
          COPYRIGHT © MUHAYU Inc. All rights reserved. Since 2011
        </address>
        <div css={[snsLink, footFlexEnd]}>
          <a
            href="https://www.facebook.com/copykiller.muhayu"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://blog.naver.com/muhayuin"
            target="_blank"
            rel="noreferrer"
          >
            <NaverIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UC1BsUvbI3poyxKV8F0GYCpA?view_as=subscriber"
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
