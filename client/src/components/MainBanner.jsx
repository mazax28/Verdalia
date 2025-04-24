import React from 'react'
import main_banner_bg from '../assets/main_banner_bg.png'
import main_banner_bg_mobile from '../assets/main_banner_bg_sm.png'

function MainBanner() {
  return (
    <div className="hero mt-8">
      <div className="hero-content relative p-0">
        <img className="w-full hidden md:block" src={main_banner_bg} alt="Banner Verdalia desktop" />
        <img className="w-full md:hidden" src={main_banner_bg_mobile} alt="Banner Verdalia mobile" />

        {/* Contenido alineado a la izquierda */}
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-16 md:justify-start">
          <div className="p-6 rounded-lg max-w-sm text-center md:max-w-md md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2f4552]">¡Bienvenido a Verdalia!</h1>
            <p className="py-4 text-[#2f4552]">
              Frutas, verduras y vegetales frescos directo a tu mesa. Calidad garantizada, cosechados con amor.
              ¡Comprá fácil, sano y rápido desde casa!
            </p>
            <div className="space-x-2">
              <button className="btn bg-[#4aaf8f] border-none">Comprar Ahora</button>
              <button className="btn border border-[#4aaf8f] bg-gray-100 text-[#4aaf8f]">Contactanos</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
