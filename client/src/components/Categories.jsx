import React from 'react'
import { categories } from '../assets/assets'

function Categories() {
  return (
    <div className='hero relative'>
        <div className='hero-content w-full flex-col'>
            <div className='w-full text-left'>
                <h1>Categories</h1>
            </div>
            <div className="carousel carousel-center bg-neutral rounded-box max-w-lg space-x-4 p-4">
                {
                    categories.map((category, index) => {
                        return(
                            <div className="card bg-base-100 shadow-sm p-4">
                                    <figure>
                                        <img
                                        className='max-w-36'
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{category.text}</h2>
                                    </div>
                            </div>
                            
                        )
                    })
                }
            </div>

        </div>
      
    </div>
  )
}

export default Categories
