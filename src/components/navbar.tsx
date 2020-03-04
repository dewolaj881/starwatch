import React, { ReactNode } from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import { ReactComponent as ArrowRight } from "../images/icon-arrow-right.svg"
import { ReactComponent as Logo } from "../images/starwatch.svg"
import Hamburger from "../components/hamburger"

type NavbarProps = {
  children: ReactNode
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav
      css={css`
        ${tw`sticky p-0 m-0 font-sans`}
      `}
    >
      <div
        css={css`
          ${tw`items-center justify-between hidden px-6 text-white bg-black lg:flex md:flex xl:flex`}
        `}
      >
        <div>
          <Logo
            css={css`
              ${tw`w-12 h-12 ml-8`}
            `}
          />
        </div>

        <div
          css={css`
            ${tw`h-16`}
          `}
        >
          <ul
            css={css`
              ${tw`flex justify-between h-16 m-0`}
            `}
          >
            <li
              css={css`
                ${tw`flex items-center h-16 px-10 text-lg tracking-wide`}
              `}
            >
              About
            </li>
            <li
              css={css`
                ${tw`flex items-center h-16 px-10 text-lg tracking-wide`}
              `}
            >
              Projects
            </li>
            <li
              css={css`
                ${tw`flex items-center h-16 px-10 text-lg tracking-wide`}
              `}
            >
              Life
            </li>
            <li
              css={css`
                ${tw`flex items-center h-16 px-10 text-lg tracking-wide`}
              `}
            >
              Contact
            </li>
            <li
              css={css`
                ${tw`flex items-center h-16 px-10 text-lg tracking-wide`}
              `}
            >
              Jobs
            </li>
          </ul>
        </div>
        <div>
          <ArrowRight
            css={css`
              ${tw`fill-current`}
            `}
          />
        </div>
      </div>
      <div
        css={css`
          ${tw`block md:hidden lg:hidden xl:hidden`}
        `}
      >
        <Hamburger />
      </div>
    </nav>
  )
}

export default Navbar
