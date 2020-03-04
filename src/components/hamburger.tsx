import React, { ReactNode, useState } from "react"
import { ReactComponent as HamburgerIcon } from "../images/icon-menu.svg"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import { Link } from "gatsby"
import { ReactComponent as CloseIcon } from "../images/close-icon.svg"
import { ReactComponent as Logo } from "../images/starwatch.svg"
import { ReactComponent as ArrowRight } from "../images/icon-arrow-right.svg"

type HamburgerProps = {
  children: ReactNode
}

const Hamburger: React.FC<HamburgerProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  console.log(isOpen)
  // komentarz
  return (
    <nav
      css={css`
        ${tw`py-2 bg-black`}
      `}
    >
      <div
        css={css`
          ${tw`flex justify-between px-4`}
        `}
      >
        <div>
          <button
            css={css`
              ${tw`flex items-center justify-center w-10 h-10 rounded-sm focus:outline-none focus:text-white focus:bg-gray-800`}
            `}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <CloseIcon
                css={css`
                  ${tw`w-8 h-8 m-0 text-gray-300 fill-current`}
                `}
              />
            ) : (
              <HamburgerIcon
                css={css`
                  ${tw`w-8 h-8 text-gray-300 fill-current`}
                `}
              />
            )}
          </button>
        </div>
        <div>
          <Logo
            css={css`
              ${tw`w-10 h-10`}
            `}
          ></Logo>
        </div>
        <div
          css={css`
            ${tw`flex items-center`}
          `}
        >
          <ArrowRight
            css={css`
              ${tw`text-white fill-current`}
            `}
          ></ArrowRight>
        </div>
      </div>

      <div
        css={css`
          ${tw`px-4 mt-2`}
          ${isOpen ? tw`block` : tw`hidden`}
        `}
      >
        <Link
          to="/"
          css={css`
            ${tw`block py-4 text-2xl text-center text-gray-300 border-b border-gray-600 hover:bg-gray-800`}
          `}
        >
          About
        </Link>
        <Link
          to="/"
          css={css`
            ${tw`block py-4 text-2xl text-center text-gray-300 border-b border-gray-600 hover:bg-gray-800`}
          `}
        >
          Projects
        </Link>
        <Link
          to="/"
          css={css`
            ${tw`block py-4 text-2xl text-center text-gray-300 border-b border-gray-600 hover:bg-gray-800`}
          `}
        >
          Life
        </Link>
        <Link
          to="/"
          css={css`
            ${tw`block py-4 text-2xl text-center text-gray-300 border-b border-gray-600 hover:bg-gray-800`}
          `}
        >
          Contact
        </Link>
        <Link
          to="/"
          css={css`
            ${tw`block py-4 text-2xl text-center text-gray-300 hover:bg-gray-800`}
          `}
        >
          Jobs
        </Link>
      </div>
    </nav>
  )
}

export default Hamburger
