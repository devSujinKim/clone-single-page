import React from 'react';
import { css } from '@emotion/react';
import {
  AlwaysIcon,
  ShippingIcon,
  EarthIcon,
  PercentIcon,
  ProtectIcon,
} from 'components/Icon';

const container = css`
  padding: 112px 98px 108px;
`;
const item = css`
  flex: 0 0 auto;
  width: 194px;
  text-align: center;
  & p {
    padding-top: 27px;
    font-size: 18px;
    font-weight: 600;
    line-height: 2;
    letter-spacing: -0.29px;
    color: #666;
  }
`;

const ITEMS = [
  {
    icon: <AlwaysIcon />,
    text: 'Text Text Text Text Text Text Text Text',
  },
  {
    icon: <ShippingIcon />,
    text: 'Text Text Text Text Text Text Text Text',
  },
  {
    icon: <EarthIcon />,
    text: 'Text Text Text Text Text Text Text Text',
  },
  {
    icon: <PercentIcon />,
    text: 'Text Text Text Text Text Text Text Text',
  },
  {
    icon: <ProtectIcon />,
    text: 'Text Text Text Text Text Text Text Text',
  },
];

const IconTypo = () => (
  <div css={container}>
    <ul css={{ display: 'flex', justifyContent: ' space-between' }}>
      {ITEMS.map(({ icon, text }, index) => (
        <li css={item} key={index}>
          <div>{icon}</div>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default IconTypo;
