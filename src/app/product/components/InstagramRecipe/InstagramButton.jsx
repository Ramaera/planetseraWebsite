import React from "react"
import { useSelector } from "react-redux"

const InstagramButton = () => {
  const colorMe = useSelector((state) => state.colorUs.color)

  return (
    <div className="basis-12/12 instagramAlign relative">
      <div className="basis-4/12 flex justify-center">
        <a
          href="https://www.instagram.com/planetseraspices/"
          className="instagramBtn mt-6 hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(to right, ${colorMe}, ${
              colorMe + "80"
            })`,
            color: "white",
            textShadow: `0 4px 4px ${colorMe}`,
            boxShadow: `2px 4px 7px -2px ${colorMe}`,
          }}
        >
          Visit Our Instagram
          <i
            class="fa fa-instagram self-center"
            aria-hidden="true"
            style={{ fontSize: "19px" }}
          ></i>
        </a>
      </div>
    </div>
  )
}

export default InstagramButton
