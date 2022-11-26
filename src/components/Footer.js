import { Heart } from "phosphor-react"
import React from "react"

const Footer = () => {
  return (
    <section>
      <div className="bg-lightbg dark:bg-darkbg text-lighttext dark:text-darktext text-center pt-40 pb-6 transition duration-300">
        Made with love by Brian Vergara{" "}
        <Heart size={22} color="#e41111" weight="fill" className="inline" />{" "}
        <br />
        Inspired by FrontEndMentor
      </div>
    </section>
  )
}

export default Footer
