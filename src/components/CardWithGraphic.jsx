import { useState } from 'react'

function CardWithGraphic({title, description, imgUrl, alt, glowColor}) {
  return (
    <>
      <div className='rotating-border-wrapper shadow-sm hover:shadow-xl'  style={{ ['--rotating-border-color']: glowColor }}> 
        <div className='h-full rotating-border-card p-4 bg-gray-200 dark:bg-gray-700'> 
          <h2 className='text-lg font-bold dark:text-gray-100'>{title}</h2>
          <p className='text-gray-700 dark:text-gray-400'>
            {description}
          </p>
          <img className='rotating-border-card-icon' src={imgUrl} alt={alt} />
        </div>
      </div>
    </>
  )
}

export default CardWithGraphic
