import React from 'react';
import { css } from '@emotion/react';

const container = css`
  display: flex;
  padding: 102px 0 86px;
`;
const flexWrap = css`
  flex: 0 0 auto;
  width: 50%;
`;
const chartContainer = css`
  display: flex;
  & p {
    padding-top: 10px;
    font-size: 24px;
  }
`;
const chartWrap = css`
  display: flex;
  padding-bottom: 50px;
`;
const title = css`
  padding-bottom: 24px;
  font-size: 24px;
  line-height: 1.13;
  letter-spacing: -0.38px;
  color: #959fba;
`;
const month = css`
  padding-bottom: 16px;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: -0.32px;
  color: #959fba;
  opacity: 0.6;
`;
const figure = css`
  font-size: 45px;
  font-weight: bold;
  line-height: 0.6;
  letter-spacing: -0.72px;
`;
const plus = css`
  color: #3beb7b;
`;
const minus = css`
  color: #ff6a33;
`;
const table = css`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  & thead tr {
    th {
      opacity: 0.8;
      font-family: OpenSans;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.69;
      letter-spacing: -0.26px;
      text-align: left;
      color: #959fba;
    }
  }
  & tbody tr {
    border-bottom: 1px solid #959fba;
    &:last-child {
      border-bottom: 0;
    }
    td {
      padding: 26px 0;
      font-size: 20px;
      &:nth-of-type(1) {
        font-weight: bold;
      }
      &:nth-of-type(2),
      &:nth-of-type(4) {
        color: #959fba;
      }
    }
  }
`;

const Category = () => (
  <div css={container}>
    <div css={[chartContainer, flexWrap]}>
      <div css={[flexWrap, { padding: '44px 36px 0 15px' }]}>
        <h2 css={title}>Category name</h2>
        <div
          css={[
            chartWrap,
            { paddingTop: 12, borderBottom: '1px solid #959fba' },
          ]}
        >
          <div css={{ paddingRight: 56 }}>
            <h3 css={month}>JAN</h3>
            <strong css={figure}>13k</strong>
            <p css={plus}>+83</p>
          </div>
          <div>chart</div>
        </div>
        <div css={[chartWrap, { paddingTop: 48 }]}>
          <div css={{ paddingRight: 56 }}>
            <h3 css={month}>JAN</h3>
            <strong css={figure}>13k</strong>
            <p css={plus}>+83</p>
          </div>
          <div>chart</div>
        </div>
      </div>
      <div css={{ padding: '44px 41px 36px 42px' }}>
        <h2 css={title}>Category name</h2>
        <strong css={[figure, { paddingTop: 10, display: 'block' }]}>
          82k
        </strong>
        <p css={plus}>+136</p>
        <div>chart</div>
        <p>Total Revenue</p>
      </div>
    </div>
    <div
      css={[
        flexWrap,
        { padding: '44px 12px 44px 19px', boxSizing: 'border-box' },
      ]}
    >
      <h2 css={title}>Category name</h2>
      <table css={table}>
        <thead>
          <tr>
            <th>Object name</th>
            <th>Date</th>
            <th>Object name</th>
            <th>Object name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem ipsum</td>
            <td>04/02/2021</td>
            <td css={plus}>+432</td>
            <td>$332</td>
          </tr>
          <tr>
            <td>Dolor</td>
            <td>03/02/2021</td>
            <td css={plus}>+39</td>
            <td>$463</td>
          </tr>
          <tr>
            <td>Sit amet</td>
            <td>02/02/2021</td>
            <td css={minus}>-84</td>
            <td>$239</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Category;
