import React from 'react'
import InfoBox from '../InfoBox';

const InfoSection = () => {
  return (
    <div className='flex justify-center py-8'>
      <div className='inline-grid grid-cols-1 md:grid-cols-3 gap-16'>
        <InfoBox />
        <InfoBox />
        <InfoBox />
      </div>
    </div>
  )
}

export default InfoSection;