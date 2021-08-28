import React from 'react';
import { FacebookIcon, NaverIcon, YoutubeIcon } from 'components/Icon';

const Footer = () => (
  <footer>
    <div>
      <div>
        <ul>
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
      </div>
      <div>
        <ul>
          <li>1588-9784</li>
          <li>
            <a href="mailto:help@copykiller.com">help@copykiller.com</a>
          </li>
        </ul>
        <button type="button">문의하기</button>
      </div>
    </div>
    <address>
      서울시 성동구 성수일로4길 25 1706호 (우.04781) ㈜무하유 | 대표이사 신동호
      | 사업자등록번호 206-86-55577
      <br />
      통신판매업신고번호 제2011-서울성동-0831호 | 구매 및 영업문의 | T.
      02-2115-8765 | F. 02-2115-8764 | E.{' '}
      <a href="mailto:marketing@muhayu.com">marketing@muhayu.com</a>
      COPYRIGHT © MUHAYU Inc. All rights reserved. Since 2011
    </address>
    <div>
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
  </footer>
);

export default Footer;
