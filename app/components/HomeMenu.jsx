'use client'

import { useState, useEffect } from 'react'

export default function HomeMenu(params) {
  const [isPcType, setIsPcType] = useState(true)
  useEffect(() => {
    const mobileTypeList = ["iPhone", "iPod", "iPad", "Android"]
    const machineType = navigator.userAgent
    const mobileTypeCheck = mobileTypeList.filter(item => {
      return machineType.search(item) != -1;
    })

    if(mobileTypeCheck.length > 0){
      setIsPcType(false)
    } else {
      setIsPcType(true)
    }
  })

  return(
    <>
      {isPcType ?
        <div>
          <h1>これはパソコン</h1>
        </div>
      :
        <div>
          <h1>これはモバイル</h1>
        </div>
      }
    </>
  )
};
