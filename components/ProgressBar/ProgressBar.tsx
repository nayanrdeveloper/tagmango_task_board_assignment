import React from 'react'

function ProgressBar(props: any) {
    const { bgcolor, completed } = props;
  return (
    <div className='h-5 w-full bg-[#e0e0de] rounded-md'>
        <div className={`h-full ${completed} ${bgcolor}`}></div>
    </div>
  )
}

export default ProgressBar