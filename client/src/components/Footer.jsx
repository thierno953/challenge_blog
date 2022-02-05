import React from "react";
import styled from "styled-components";
import logo from "../assets/undraw_Interview_re_e5jn.png";
export default function Footer() {
  const links = [
    { title: "Web Developer", links: ["Frontend", "Backend"] },
    {
      title: "Language & FrameWork",
      links: ["Html", "Css", "React", "Node"],
    },
    {
      title: "Contact",
      links: [`+32 466 240 103`, "thiernobarry554@gmail.com"],
    },
  ];
  return (
    <Footr>
      <div className="upper__footer">
        <div className="brand">
          <img src={logo} alt="Footer Logo" />
          <p>
            I have just finished my training and internship at Becode. I am now
            looking for new work challenges. I like to evolve as a team and come
            up with new ideas and solutions. I’m available immediately to start
            working.
          </p>
        </div>
        {links.map(({ title, links }) => {
          return (
            <div className="links" key={title}>
              <h3>{title}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
   
    </Footr>
  );
}

const Footr = styled.footer`
  margin: 5rem 0rem 1rem 0rem;
  .upper__footer {
    margin: 0 5rem;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    gap: 3rem;
    padding-top: 3rem;
    .brand {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      img {
        height: 1rem;
      }
      .mail-container {
        display: flex;
        align-items: center;
        gap: 1rem;
        input {
          padding: 0.8rem 1rem;
          border-radius: 0.3rem;
          border: none;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.8rem 1rem;
          gap: 0.5rem;
        }
      }
    }
    .links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h3 {
        color: var(--primary-color);
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        li {
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .upper__footer {
      margin: 2rem 1rem;
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      .brand {
        .mail-container {
          flex-direction: column;
          align-items: flex-start;
        }
      }
      .links {
        ul {
          list-style-type: none;
        }
      }
    }
    .lower__footer {
      margin: 2rem 1rem;
      flex-direction: column-reverse;
      gap: 1.5rem;
      ul {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;
