import React from 'react'
import BannerItem from './BannerItem';
import banner1 from '../../../assets/banner-01.jpg';
import banner2 from '../../../assets/banner-02.jpg';
import banner3 from '../../../assets/banner-03.jpg';

const Banner = () => {
    console.log(banner1)
    const bannerData = [
        {
            image: banner1,
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: banner2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: banner3,
            prev: 2,
            id: 3,
            next: 1
        }
    ]

    return (
        <div className="carousel w-full">
            {
                bannerData.map((banner, index) => <BannerItem key={index} banner={banner}></BannerItem>)
            }
        </div>
    )
}

export default Banner