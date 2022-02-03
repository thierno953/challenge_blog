import React from "react";
import styled from "styled-components";
import BuySell1 from "../assets/undraw_Interview_re_e5jn.png";
import BuySell2 from "../assets/undraw_On_the_office_re_cxds.png";

export default function BuySell() {
  return (
    <Section>
      <div className="row">
        <div className="col" id="buySell1">
          <img src={BuySell1} alt="Buy Sell 1" />
          <div className="text">
            <h2>
              Buy and Sell Virtual <span>Lands</span> and
              <span> Properties</span>
            </h2>
          </div>
        </div>
        <div className="col" id="buySell2">
          <h2>
            Buy and Sell
            <span> Virtual Resources </span>
            and Businesses
          </h2>
          <img src={BuySell2} alt="Buy Sell 2" />
        </div>
      
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 6rem 10rem;
  .row {
    display: flex;
    gap: 8rem;
    flex-direction: column;
    .col {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      img {
        max-width: 100%;
        width: 100%;
        height: 60vh;
        object-fit: cover;
        align-self: center;
      }
      h2 {
        font-size: 3rem;
        span {
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .row {
      gap: 2rem;
      .col {
        flex-direction: column;
        text-align: center;
        img {
          height: 10rem;
        }
        h2 {
          font-size: 1.5rem;
        }
        &:nth-of-type(2) {
          flex-direction: column-reverse;
        }
      }
    }
  }
`;