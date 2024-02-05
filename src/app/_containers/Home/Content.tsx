import React from 'react'
import { HomePageSlider } from '.'

export const Content: React.FC<any> = (): JSX.Element => {
  return (
    <div>
      Content
      <div className="grid grid-cols-2 gap-4">
        <div className="col-start-1 col-end-3 bg-red-500">02</div>
        <div className="col-start-3 col-end-13">334343</div>
        <HomePageSlider />
      </div>
    </div>
  )
}
