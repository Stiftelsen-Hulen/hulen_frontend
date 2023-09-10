'use client'

import { SanityNavBarContent } from '@/types/sanity'
import { getSanityNavigationElements } from '@/util/sanity'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const NavigationBar = () => {
  const [navBarData, setNavbarData] = useState<SanityNavBarContent>()

  const getSanityData = async () => {
    const data = await getSanityNavigationElements()
    setNavbarData(data)
  }

  useEffect(() => {
    getSanityData()
  }, [])

  if (navBarData === undefined) {
    return <></>
  }

  return (
    <Box display='flex' justifyContent={'center'} alignItems={'center'} gap='2rem'>
      <Image
        src={navBarData.navbarLogo.asset.url}
        alt={navBarData.navbarLogo.altText.no}
        width='143'
        height='120'
      />
      {navBarData.navElements.map((element, idx) => (
        <Link href={element.subUrl} key={idx} passHref style={{ all: 'unset', cursor: 'pointer' }}>
          <Typography variant='h5'>{element.title.no}</Typography>
        </Link>
      ))}
    </Box>
  )
}

export default NavigationBar
