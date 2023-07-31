import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BannerItem = ({ banner }) => {
    return (
        <div id={`slide${banner.id}`} className="carousel-item relative w-full">
            <div className="relative w-full">
                <img
                    src={banner.image}
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-50 min-h-[90vh] font-jost items-center flex px-4 sm:px-10 lg:px-20 ">
                    <div className="py-16 lg:py-20" data-aos="fade-right">
                        <div className="">
                            <div className="w-full max-w-xl text-white">
                                <h2 className=" mb-6 font-jost text-3xl font-semibold tracking-tight sm:text-5xl">
                                    Welcome To
                                    <br></br>
                                    Thewayshop
                                </h2>
                                <p className=" mb-4 text-base md:text-2xl">
                                    e how your users experience your website in realtime or view
                                    trends to see any changes in performance over time.
                                </p>
                                <Link
                                    to="/categories"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold px-4 py-3 sm:px-6 sm:py-4 text-lg bg-[#d33b33] sm:text-xl my-5"
                                >
                                    <FaCartPlus className='mr-2'></FaCartPlus>
                                    Shop Now

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-start gap-2 transform -translate-y-1/2 left-0 right-0 bottom-[250px] ">
                        <a href={`#slide${banner.prev}`} className="btn w-12 bg-[#d33b33] border-0">❮</a>
                    </div>
                    <div className='absolute flex justify-end gap-2  left-0 right-0 bottom-[250px]'>
                        <a href={`#slide${banner.next}`} className="btn w-12 bg-[#d33b33] border-0">❯</a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BannerItem