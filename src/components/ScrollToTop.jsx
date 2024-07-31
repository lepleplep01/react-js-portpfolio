import { useLocation } from "react-router-dom"
import { useEffect } from "react"

function ScrollToTop() {
    const {Location} = useLocation()

    useEffect(() => {

        window.scrollTo(0, 0)
    }, [Location])

}

export default ScrollToTop