import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Image src={"/images/logo.svg"} alt="logo" width={50} height={50} className='object-cover'/>
    </div>
  )
}

export default Logo