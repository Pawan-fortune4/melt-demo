import React, { ReactNode } from 'react'
import Slider, { Settings } from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface SliderProps {
  settings?: Settings
  children: ReactNode
}

export const CustomSlider: React.FC<SliderProps> = ({
  settings = {},
  children,
}) => {
  return <Slider {...settings}>{children}</Slider>
}
