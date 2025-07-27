import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/button';
import { InfiniteSlider } from '../ui/infinite-slider';
import { ProgressiveBlur } from '../ui/progressive-blur';
import { Flower } from 'lucide-react';

export function HeroSection() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end end'],
	});

	// 🧠 These values match how far each flower is from edge — so all disappear in sync
	const x1 = useTransform(scrollYProgress, [0, 1], ['0vw', '-20vw']);
const x2 = useTransform(scrollYProgress, [0, 1], ['0vw', '20vw']);
const x3 = useTransform(scrollYProgress, [0, 1], ['0vw', '-10vw']);
const x4 = useTransform(scrollYProgress, [0, 1], ['0vw', '20vw']);
const x5 = useTransform(scrollYProgress, [0, 1], ['0vw', '-34vw']);

	return (
		<main
			className='overflow-x-hidden relative'
			ref={ref}
		>
			{/* 🌸 Responsive, Scroll-Synced Floating Flowers */}
			<motion.img
				src='/flowers/flower1.png'
				alt='flower1'
				className='pointer-events-none absolute top-[10%] left-[5%] w-28 sm:w-36 md:block z-[90]'
				style={{ x: x1 }}
				transition={{ type: 'spring', stiffness: 60, damping: 20 }}
			/>
			<motion.img
				src='/flowers/flower2.jpg'
				alt='flower2'
				className='pointer-events-none absolute top-[70%] right-[5%] w-32 sm:w-40 md:block z-[90]'
				style={{ x: x2 }}
				transition={{ type: 'spring', stiffness: 60, damping: 20 }}
			/>
			<motion.img
				src='/flowers/flower1.png'
				alt='flower3'
				className='pointer-events-none absolute top-[45%] left-[2%] w-24 sm:w-36 z-[90]'
				style={{ x: x3 }}
				transition={{ type: 'spring', stiffness: 60, damping: 20 }}
			/>
			<motion.img
				src='/flowers/flower1.png'
				alt='flower4'
				className='pointer-events-none absolute top-[0%] right-[15%] w-28 hidden md:block z-[90]'
				style={{ x: x4 }}
				transition={{ type: 'spring', stiffness: 60, damping: 20 }}
			/>
			<motion.img
				src='/flowers/flower2.jpg'
				alt='flower5'
				className='pointer-events-none absolute top-[64%] left-[25%] w-36 hidden md:block z-[90]'
				style={{ x: x5 }}
				transition={{ type: 'spring', stiffness: 60, damping: 20 }}
			/>

			{/* Hero Content */}
			<section>
				<div className='pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-18'>
					<div className='relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center'>
						<div className='mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left lg:pr-12'>
							<div className='mb-6 inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800'>
								<Flower className='mr-2 h-4 w-4 text-amber-600' />
								Best Saffron in Iran
							</div>
							<h1 className='mt-8 max-w-2xl text-balance text-5xl font-bold md:text-6xl lg:mt-12 xl:text-7xl text-gray-900 leading-tight'>
								Amiran Saffron
								<span className='text-amber-600 block'>Company</span>
							</h1>
							<p className='mt-6 max-w-2xl text-pretty text-lg text-gray-600 leading-relaxed'>
								Production and export of the finest Iranian saffron with top
								quality. With over 20 years of experience, we offer saffron with
								unmatched aroma, taste, and color to the world.
							</p>
							<div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start'>
								<Button
									size='lg'
									className='px-8 py-3 text-base bg-amber-600 hover:bg-amber-700'
								>
									<span className='text-nowrap'>View Products</span>
								</Button>
								<Button
									size='lg'
									variant='outline'
									className='px-8 py-3 text-base border-amber-200 text-amber-700 hover:bg-amber-50'
								>
									<span className='text-nowrap'>Contact Us</span>
								</Button>
							</div>
						</div>
						<div className='mt-10 lg:mt-0 lg:ml-auto lg:w-1/2'>
							<img
								className='pointer-events-none h-56 w-full object-cover sm:h-96 lg:h-auto lg:w-full lg:object-contain rounded-2xl shadow-2xl'
								src='https://www.jowhareh.com/images/Jowhareh/galleries/poster_e2834e07-4f59-490b-9e5c-8edde8a83e24.jpeg'
								alt='Premium Iranian Saffron'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-amber-50/30 pb-16 md:pb-32'>
				<div className='group relative mx-auto max-w-6xl px-6'>
					<div className='flex flex-col items-center md:flex-row md:items-center'>
						<div className='md:max-w-44 md:border-r md:border-amber-200 md:pr-6'>
							<p className='text-end text-sm text-gray-600 font-medium mb-4'>
								Trusted by the Best
							</p>
						</div>
						<div className='relative py-6 md:w-[calc(100%-11rem)] md:pl-6'>
							<InfiniteSlider
								speedOnHover={20}
								speed={40}
								gap={112}
							>
								<div className='flex items-center space-x-4'>
									<img
										src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Vb-OHMZ-mxMFGOQoro0L_HnNwf2KzbEYDA&s'
										alt='Alibaba Logo'
										className='h-8 w-auto'
									/>
								</div>
								<div className='flex items-center space-x-4'>
									<img
										src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
										alt='Amazon Logo'
										className='h-8 w-auto'
									/>
								</div>
								<div className='flex items-center space-x-4'>
									<img
										src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Vb-OHMZ-mxMFGOQoro0L_HnNwf2KzbEYDA&s'
										alt='Alibaba Logo'
										className='h-8 w-auto'
									/>
								</div>
								<div className='flex items-center space-x-4'>
									<img
										src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
										alt='Amazon Logo'
										className='h-8 w-auto'
									/>
								</div>
								<div className='flex items-center space-x-4'>
									<img
										src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Vb-OHMZ-mxMFGOQoro0L_HnNwf2KzbEYDA&s'
										alt='Alibaba Logo'
										className='h-8 w-auto'
									/>
								</div>
								<div className='flex items-center space-x-4'>
									<img
										src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
										alt='Amazon Logo'
										className='h-8 w-auto'
									/>
								</div>
								<div className='flex items-center space-x-4'>
									<img
										src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Vb-OHMZ-mxMFGOQoro0L_HnNwf2KzbEYDA&s'
										alt='Alibaba Logo'
										className='h-8 w-auto'
									/>
								</div>
								<div className='flex items-center space-x-4'>
									<img
										src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
										alt='Amazon Logo'
										className='h-8 w-auto'
									/>
								</div>
							</InfiniteSlider>
							<div className='bg-gradient-to-r from-amber-50/30 absolute inset-y-0 left-0 w-20'></div>
							<div className='bg-gradient-to-l from-amber-50/30 absolute inset-y-0 right-0 w-20'></div>
							<ProgressiveBlur
								className='pointer-events-none absolute left-0 top-0 h-full w-20'
								direction='left'
								blurIntensity={1}
							/>
							<ProgressiveBlur
								className='pointer-events-none absolute right-0 top-0 h-full w-20'
								direction='right'
								blurIntensity={1}
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
