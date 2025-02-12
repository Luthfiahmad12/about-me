import React from 'react'
import { useLocation } from 'react-router'
import ReactGA from 'react-ga4'

export const Analytics = () => {
    const TRACKING_ID = 'G-LKR4SZN69M'
    const location = useLocation()
    React.useEffect(() => {
        ReactGA.initialize(TRACKING_ID) // Inisialisasi Google Analytics
        ReactGA.send({ hitType: 'pageview', page: location.pathname })
    }, [location])

    return null
}
