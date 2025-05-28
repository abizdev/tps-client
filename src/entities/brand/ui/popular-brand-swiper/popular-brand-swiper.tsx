'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import BrandCard from '../brand-card';
import { IBrand } from '../../model/types';

interface Props {
  brands: IBrand[];
  reverseDirection?: boolean;
}

const breakpoints = {
	320: {
		slidesPerView: 1,
		spaceBetween: 12,
		freeMode: false,
	},
	576: {
		slidesPerView: 2,
	},
	992: {
		slidesPerView: 2.5,
	},
	1200: {
		slidesPerView: 6,
		spaceBetween: 16,
	},
};

const PopularBrandSwiper: React.FC<Props> = ({ brands, reverseDirection }) => {
	return (
		<div className="w-full overflow-visible">
			<Swiper
				modules={[FreeMode, Autoplay]}
				breakpoints={breakpoints}
				centeredSlides={true}
				loop={true}
				speed={7500}
				autoplay={{
					delay: 0,
					reverseDirection,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				className="popular-swiper"
			>
				{brands.map((brand) => (
					<SwiperSlide
						key={brand.id}
						className="bg-gray-100 flex items-center justify-center rounded-2xl overflow-hidden group"
					>
						<BrandCard brand={brand} wrapperClass="!bg-gray-100" />
					</SwiperSlide>
				))}
			</Swiper>
			{/* eslint-disable-next-line react/no-unknown-property */}
			<style jsx global>{`
        .popular-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
		</div>
	);
};

export default PopularBrandSwiper;
