import React from 'react';
import Button from '../components/Button';

export default function PageNotFound() {
  return (
    <div class="flex items-center justify-center min-h-screen bg-white">
      <div class="flex flex-col">
        <div class="flex flex-col items-center">
          <div class="text-btn_color font-bold text-5xl">404</div>

          <div class="font-bold text-fc text-3xl xl:text-7xl lg:text-6xl md:text-3xl mt-10">
            This page does not exist
          </div>

          <div class="text-gray-400 text-black font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <Button text="Home Page" />
        </div>
      </div>
    </div>
  );
}
