import React, { useEffect } from "react"

const Tweet = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    script.charset = "utf-8"
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <a
      className="twitter-timeline"
      href="https://twitter.com/ageha_support?ref_src=twsrc%5Etfw"
      target="_blank"
      rel="noopener noreferrer"
    ></a>
  )
}

export default Tweet
