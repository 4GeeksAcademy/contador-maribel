import { useEffect, useState } from "react"


const Contador = () => {

    const [segundos, setSegundos] = useState(0)

    useEffect(() => {
        const intervalo =
            setInterval(() => {

                setSegundos(prev => prev + 1)

            }, 2000);

        return () =>
            clearInterval(intervalo)
    }, [])

    return (

        <div className="contador">

            {segundos}

        </div>

    )
}


export default Contador