import { CustomSlider } from '@/app/_components'
import Image from 'next/image'
import React from 'react'

export const HomePageSlider: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <div>
      <CustomSlider settings={sliderSettings}>
        <div className="common_recommend-post__vlBJQ">
          <div className="common_recommend-post-header__aP7Y6">
            <div className="col-lg-12 common_recommend-image-wrapper__pD0x8">
              <a href="/ready-melt-anant-rangaswami-podcast-episode-08?id=8">
                <Image
                  alt="Ready To Melt with Anant Rangaswami: Podcast Episode 08"
                  loading="lazy"
                  width="150"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  src="http://192.168.10.147:3001/_next/image?url=http%3A%2F%2Flocalhost%3A1337%2Fuploads%2FRTM_A08_224x126_90abebd9e4.jpg&amp;w=384&amp;q=75"
                />
              </a>
              <h2>
                <a href="/ready-melt-anant-rangaswami-podcast-episode-08?id=8">
                  Ready To Melt with Anant Rangaswami: Podcast Episode 08
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div className="common_recommend-post__vlBJQ">
          <div className="common_recommend-post-header__aP7Y6">
            <div className="col-lg-12 common_recommend-image-wrapper__pD0x8">
              <a href="/ready-melt-anant-rangaswami-podcast-episode-08?id=8">
                <Image
                  alt="Ready To Melt with Anant Rangaswami: Podcast Episode 08"
                  loading="lazy"
                  width="150"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  src="http://192.168.10.147:3001/_next/image?url=http%3A%2F%2Flocalhost%3A1337%2Fuploads%2FRTM_A08_224x126_90abebd9e4.jpg&amp;w=384&amp;q=75"
                />
              </a>
              <h2>
                <a href="/ready-melt-anant-rangaswami-podcast-episode-08?id=8">
                  Ready To Melt with Anant Rangaswami: Podcast Episode 08
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div className="common_recommend-post__vlBJQ">
          <div className="common_recommend-post-header__aP7Y6">
            <div className="col-lg-12 common_recommend-image-wrapper__pD0x8">
              <a href="/ready-melt-anant-rangaswami-podcast-episode-08?id=8">
                <Image
                  alt="Ready To Melt with Anant Rangaswami: Podcast Episode 08"
                  loading="lazy"
                  width="150"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  src="http://192.168.10.147:3001/_next/image?url=http%3A%2F%2Flocalhost%3A1337%2Fuploads%2FRTM_A08_224x126_90abebd9e4.jpg&amp;w=384&amp;q=75"
                />
              </a>
              <h2>
                <a href="/ready-melt-anant-rangaswami-podcast-episode-08?id=8">
                  Ready To Melt with Anant Rangaswami: Podcast Episode 08
                </a>
              </h2>
            </div>
          </div>
        </div>
      </CustomSlider>
    </div>
  )
}
