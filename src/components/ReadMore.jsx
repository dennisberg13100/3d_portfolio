import React, { useState } from "react"
import { useEffect } from "react"

const ReadMore = ({children}) => {
    const text = children
    const [isReadMore, setReadMore ] = useState(true)
    const toggleReadMore = () => {
        setReadMore(!isReadMore)
    }

    

    return (
        <>
        <p className="pt-2">
            {isReadMore ? text[0].slice(0,150)+"..." : text[0]}
        </p>
        <p className="pt-2">
            {isReadMore ? "" : text[1]}
        </p>
        <span onClick={toggleReadMore} className="blue-text-gradient float-right cursor-pointer">
            {isReadMore ? "leia mais" : "mostrar menos"}
        </span>
        </>
    )
}

export default ReadMore