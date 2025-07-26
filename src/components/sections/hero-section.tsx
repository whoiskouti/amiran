import React from "react";
import { Button } from "../ui/button";
import { InfiniteSlider } from "../ui/infinite-slider";
import { ProgressiveBlur } from "../ui/progressive-blur";
import { cn } from "../../lib/utils";
import { Flower, Star, Award, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <main className="overflow-x-hidden">
      <section>
        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
          <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left lg:pr-12">
              <div className="mb-6 inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
                <Flower className="mr-2 h-4 w-4 text-amber-600" />
                Best Saffron in Iran
              </div>
              <h1 className="mt-8 max-w-2xl text-balance text-5xl font-bold md:text-6xl lg:mt-12 xl:text-7xl text-gray-900 leading-tight">
                Amiran Saffron 
                <span className="text-amber-600 block">Company</span>
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg text-gray-600 leading-relaxed">
                Production and export of the finest Iranian saffron with top quality. With over 20 years of experience, we offer saffron with unmatched aroma, taste, and color to the world.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button
                  size="lg"
                  className="px-8 py-3 text-base bg-amber-600 hover:bg-amber-700"
                >
                  <span className="text-nowrap">View Products</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 text-base border-amber-200 text-amber-700 hover:bg-amber-50"
                >
                  <span className="text-nowrap">Contact Us</span>
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:ml-auto lg:w-1/2">
              <img
                className="pointer-events-none h-56 w-full object-cover sm:h-96 lg:h-auto lg:w-full lg:object-contain rounded-2xl shadow-2xl"
                src="https://www.jowhareh.com/images/Jowhareh/galleries/poster_e2834e07-4f59-490b-9e5c-8edde8a83e24.jpeg"
                alt="Premium Iranian Saffron"
                height="4000"
                width="3000"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-amber-50/30 pb-16 md:pb-32">
        <div className="group relative mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center md:flex-row md:items-center">
            <div className="md:max-w-44 md:border-r md:border-amber-200 md:pr-6">
              <p className="text-end text-sm text-gray-600 font-medium mb-4">Trusted by the Best</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)] md:pl-6">
              <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Star className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-medium">Top Quality</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Award className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-medium">ISO Certification</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Globe className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-medium">Global Export</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Flower className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-medium">Natural Organic</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Star className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-medium">20 Years Experience</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Award className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-medium">Trusted Brand</span>
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
  );
}