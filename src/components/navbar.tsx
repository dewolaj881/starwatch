import React, { ReactNode } from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import { ReactComponent as Logo } from "../images/starwatch.svg"
import Hamburger from "../components/hamburger"
import { ReactComponent as HamburgerIcon } from "../images/icon-menu.svg"
import SignInButton from "./signInButton"
import SignUpButton from "./signUpButton"

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
          ${tw`items-center justify-between hidden px-6 text-black bg-white border-b border-black lg:flex md:flex xl:flex`}
        `}
      >
        <div
          css={css`
            ${tw`flex items-center justify-between`}
          `}
        >
          <div
            css={css`
              ${tw`w-8 h-8 fill-current`}
            `}
          >
            <HamburgerIcon></HamburgerIcon>
          </div>
          <div
            css={css`
              ${tw`ml-4 text-2xl`}
            `}
          >
            StarWatch
          </div>
        </div>
        <div
          css={css`
            ${tw`flex items-center h-16 pl-24`}
          `}
        >
          <Logo
            css={css`
              ${tw`w-12 h-12`}
            `}
          ></Logo>
        </div>
        <div
          css={css`
            ${tw`flex items-center justify-between pr-10`}
          `}
        >
          <SignInButton></SignInButton>
          <SignUpButton></SignUpButton>
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
