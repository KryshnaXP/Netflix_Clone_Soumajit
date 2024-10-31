import React from 'react'

function VerticalCurve() {
  return (
    <div className="absolute left-0 flex justify-center h-full w-full">

      {/* Left Vertical Line */}
      <div className='verC1 w-4 bg-red-800'></div>

      {/* Spacer */}
      <div className="w-[1892px]"></div>

      {/* Right Vertical Line */}
      <div className='verC2 w-4 bg-red-800'></div>
      
    </div>
  )
}

export default VerticalCurve;