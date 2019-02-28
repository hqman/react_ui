import React, { useState, useEffect } from 'react'



export const useExpire = (expireDate) => {
  const [shouldRender, setshouldRender] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setshouldRender(false)
    }, expireDate - Date.now())

    return () => {
      clearTimeout(timeoutId)
    }
  }, [expireDate])

  return shouldRender


}



