import * as React from "react"

type LogoProps = {
  size: string
}

const Logo = ({ size }: LogoProps) => {
  return <h1 className={`text-${size} mx-2`}>moritz harfen</h1>
}

export default Logo
