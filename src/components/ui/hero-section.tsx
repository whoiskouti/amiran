'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, Flower, Star, Award, Globe } from 'lucide-react'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <div className="mb-4 inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
                                    <Flower className="mr-2 h-4 w-4 text-amber-600" />
                                    بهترین زعفران ایران
                                </div>
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-bold md:text-6xl lg:mt-16 xl:text-7xl text-gray-900 leading-tight">
                                    شرکت زعفران 
                                    <span className="text-amber-600 block">امیران</span>
                                </h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg text-gray-600 leading-relaxed">
                                    تولید و صادرات بهترین زعفران ایرانی با کیفیت درجه یک. ما با بیش از ۲۰ سال تجربه، زعفرانی با عطر، طعم و رنگ بی‌نظیر به سراسر جهان ارائه می‌دهیم.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        size="lg"
                                        className="px-8 py-3 text-base bg-amber-600 hover:bg-amber-700">
                                        <span className="text-nowrap">مشاهده محصولات</span>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="px-8 py-3 text-base border-amber-200 text-amber-700 hover:bg-amber-50">
                                        <span className="text-nowrap">تماس با ما</span>
                                    </Button>
                                </div>
                            </div>
                            <img
                                className="pointer-events-none order-first ml-auto h-56 w-full object-cover sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain rounded-2xl shadow-2xl"
                                src="https://images.pexels.com/photos/4198030/pexels-photo-4198030.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt="Premium Iranian Saffron"
                                height="4000"
                                width="3000"
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-amber-50/30 pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:border-amber-200 md:pr-6">
                                <p className="text-end text-sm text-gray-600 font-medium">مورد اعتماد بهترین‌ها</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex items-center">
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <Star className="h-5 w-5 text-amber-500" />
                                            <span className="text-sm font-medium">کیفیت درجه یک</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <Award className="h-5 w-5 text-amber-500" />
                                            <span className="text-sm font-medium">گواهی ISO</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <Globe className="h-5 w-5 text-amber-500" />
                                            <span className="text-sm font-medium">صادرات جهانی</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <Flower className="h-5 w-5 text-amber-500" />
                                            <span className="text-sm font-medium">ارگانیک طبیعی</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <Star className="h-5 w-5 text-amber-500" />
                                            <span className="text-sm font-medium">۲۰ سال تجربه</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <Award className="h-5 w-5 text-amber-500" />
                                            <span className="text-sm font-medium">برند معتبر</span>
                                        </div>
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-gradient-to-r from-amber-50/30 absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-gradient-to-l from-amber-50/30 absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'محصولات', href: '#products' },
    { name: 'درباره ما', href: '#about' },
    { name: 'تماس', href: '#contact' },
    { name: 'خدمات', href: '#services' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group bg-white/80 fixed z-20 w-full border-b border-amber-100 backdrop-blur-3xl">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <a
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </a>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-amber-700" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-amber-700" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-gray-600 hover:text-amber-700 block duration-150 font-medium">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-amber-100 p-6 shadow-2xl shadow-amber-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-gray-600 hover:text-amber-700 block duration-150 font-medium">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-amber-200 text-amber-700 hover:bg-amber-50">
                                    <span>ورود</span>
                                </Button>
                                <Button
                                    size="sm"
                                    className="bg-amber-600 hover:bg-amber-700">
                                    <span>ثبت نام</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center space-x-3', className)}>
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2 rounded-lg">
                <Flower className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">زعفران امیران</span>
                <span className="text-xs text-amber-600 font-medium">Amiran Saffron</span>
            </div>
        </div>
    )
}