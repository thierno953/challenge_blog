import React from "react";
import styled from "styled-components";
import moment from "moment";

export default function ServiceInfo({ item }) {
  return (
    <Section>
      <div className="row">
 
       <div className="col" id="buySell2">
       <div className="text">
            <h2>
            {item.title}
            </h2>
            <h6>{moment(item.createdAt).fromNow()}</h6>
            <p>{item.description}</p>
          </div>
          <img src={item.images} alt={item.title} />
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
        height: 50vh;
        object-fit: cover;
        align-self: center;
      }
      h2 {
        font-size: 3rem;
      }
      p {
        padding-top: 20px
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .row {
      gap: 2rem;
      .col {
        flex-direction: column;
        text-align: left;
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