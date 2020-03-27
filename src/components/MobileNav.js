import React, { useState } from "react";
import { css } from "styled-components";
// import theme from "../../config/theme";
import Container from "./Container";
import { Link } from "gatsby";

const Toggle = ({ color = "white" }) => {
  const [isToggledOn, setToggle] = useState(false);
  const toggle = () => setToggle(!isToggledOn);
  return (
    <div className="mobile-nav">
      <button
        onClick={toggle}
        aria-label={`${isToggledOn ? "close menu" : "open menu"}`}
        css={css`
          z-index: 30;
          top: -5px;
          position: relative;
          background: transparent;
          border: none;
          :hover:not(.touch),
          :focus {
            background: transparent;
            border: none;
            outline: none;
          }
        `}
      >
        <div
          css={css`
            width: 24px;
            height: 2px;
            background: ${color};
            position: absolute;
            left: 0;
            ${isToggledOn ? "background: transparent" : `background: ${color}`};
            transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            ::before {
              content: "";
              top: -8px;
              width: 24px;
              height: 2px;
              background: ${isToggledOn ? "white" : `${color}`};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? "transform: rotate(45deg); top: 0; "
                : "transform: rotate(0)"};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
            ::after {
              top: 8px;
              content: "";
              width: 24px;
              height: 2px;
              background: ${isToggledOn ? "white" : `${color}`};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? "transform: rotate(-45deg); top: 0;"
                : "transform: rotate(0)"};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
          `}
        />
      </button>
      {isToggledOn && (
        <div
          css={css`
            position: absolute;
            z-index: 20;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            background: rgb(11, 49, 96);
          `}
        >
          <Container
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-evenly;
              a {
                color: white;
                font-size: 22px;
                margin: 10px 0;
                padding: 10px;
                border-radius: 5px;
                :hover {
                  background: rgba(0, 0, 0, 0.2);
                }
              }
              .active {
                background: rgba(0, 0, 0, 0.2);
              }
            `}
          >
            {/* <Link
              aria-label="View blog page"
              to="/blog"
              activeClassName="active"
            >
              Blog
            </Link> */}

            <Link
              to="/available-supplies"
              aria-label="View Available Supplies Page"
              activeClassName="active"
            >
              Available Supplies
            </Link>
            <Link
              to="/request-supplies"
              aria-label="View Request Supplies Page"
              activeClassName="active"
            >
              Request Supplies
            </Link>

            <Link
              to="/mask-patterns"
              aria-label="View Patterns Page"
              activeClassName="active"
            >
              Patterns
            </Link>
            <Link
              to="/volunteer-signup"
              aria-label="View Signup Page"
              activeClassName="active"
            >
              Volunteer
            </Link>
            <Link
              to="/updates/volunteer-groups"
              aria-label="View Groups Directory Page"
              activeClassName="active"
            >
              Groups Directory
            </Link>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Toggle;
