import { useEffect, useState } from 'react'

export const mediaQuery = {
    sp: 'width < 768px',
    tablet: '768px <= width < 960px',
    pc: '960px <= width',
  }


export const SwitchDevice = (query:string) => {
    const formattedQuery = `(${query})`
    const [device, setDevice] = useState(matchMedia(formattedQuery).matches)
    useEffect(() => {
        const dev = matchMedia(formattedQuery)
        dev.onchange = (e) => setDevice(e.matches)
        
    }, [formattedQuery])
    return device
}