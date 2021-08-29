import React, { useRef, useEffect } from 'react';
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
  justify-content: space-between;
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
  letter-spacing: -0.72px;
`;
const plus = css`
  color: #3beb7b;
`;
const minus = css`
  color: #ff6a33;
`;
const total = css`
  font-size: 24px;
  color: #959fba;
  text-align: center;
`;
const donutChart = css`
  position: relative;
  width: 124px;
  height: 124px;
  border-radius: 50%;
`;
const donutOverlay = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 102px;
  height: 102px;
  background-color: #fff;
  border-radius: 50%;
`;
const donutChartThird = css`
  margin-top: 10px;
  width: 252px;
  height: 252px;
`;
const donutOverlayThird = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 222px;
  height: 222px;
  text-align: center;
  font-size: 70px;
  font-weight: 600;
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

const Category = () => {
  const chartFirst = useRef(null);
  const chartSecond = useRef(null);
  const chartThird = useRef(null);
  const chartThirdNum = useRef();

  const chartData = [
    {
      id: chartFirst,
      percent: 76,
      bgColor: '#3beb7b',
    },
    {
      id: chartSecond,
      percent: 65,
      bgColor: '#6685ff',
    },
    {
      id: chartThird,
      percent: 64,
      bgColor: '#6685ff',
    },
  ];

  const setColor = (i, className, color) => {
    className.current.style.background = `conic-gradient(${color} 0%${i}%, #eee ${i}% 100%)`;
  };

  let i = 1;
  const drawChart = (className, percent, color) => {
    const draw = setInterval(() => {
      if (i < percent) {
        if (className.current) {
          setColor(i, className, color);
          i++;
        }
      } else {
        clearInterval(draw);
      }
    }, 30);
  };

  const countUp = (end, start, duration) => {
    let currentNum = start;
    const { current } = chartThirdNum;
    const time = Math.abs(Math.floor(duration / (end - start)));

    const counter = setInterval(() => {
      currentNum++;
      current.innerHTML = currentNum;
      if (currentNum === end) {
        clearInterval(counter);
      }
    }, time);
  };

  useEffect(() => {
    chartData.map((item) => drawChart(item.id, item.percent, item.bgColor));
    countUp(64, 0, 3);
  }, []);

  return (
    <div css={container}>
      <div css={[chartContainer, flexWrap]}>
        <div css={{ padding: '44px 36px 0 15px' }}>
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
            <div ref={chartFirst} css={donutChart}>
              <div css={donutOverlay} />
            </div>
          </div>
          <div css={[chartWrap, { paddingTop: 48 }]}>
            <div css={{ paddingRight: 56 }}>
              <h3 css={month}>JAN</h3>
              <strong css={figure}>13k</strong>
              <p css={plus}>+83</p>
            </div>
            <div ref={chartSecond} css={donutChart}>
              <div css={donutOverlay} />
            </div>
          </div>
        </div>
        <div css={{ padding: '44px 41px 36px 42px' }}>
          <h2 css={title}>Category name</h2>
          <strong css={[figure, { paddingTop: 10 }]}>82k</strong>
          <p css={plus}>+136</p>
          <div ref={chartThird} css={[donutChart, donutChartThird]}>
            <div css={[donutOverlay, donutOverlayThird]}>
              <span ref={chartThirdNum} />
              <span>%</span>
            </div>
          </div>
          <p css={total}>Total Revenue</p>
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
};

export default Category;
