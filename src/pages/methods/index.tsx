import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Bisection from './bisection'

const Methods = (props: { allMethods: [] }) => {
    let methodName = useParams<{ methodName: string }>().methodName
    let [isAvailable, setIsAvailable] = React.useState<boolean>(false)
    useEffect(() => {
        const checkMethod = async (methodName: string) => {
            let isAvailable: boolean = await new Promise((resolve, reject) => {
                props.allMethods.forEach((method: any) => {
                    if (method.methodName === methodName && method.available) {
                        resolve(true)
                    }
                })
                reject(false)
            })
            setIsAvailable(isAvailable)
        }
        if (methodName && props.allMethods.length > 0) {
            checkMethod(methodName)
        }

    }, [...props.allMethods])


    const generateMethod = (methodName: string) => {
        switch (methodName) {
            case 'bisection':
                return <Bisection />
            case 'false-position':
                return <div>False Position</div>
            case 'one-point-iteration':
                return <div>One Point Iteration</div>
            case 'newton-raphson':
                return <div>Newton Raphson</div>
            case 'secant':
                return <div>Secant</div>
            case 'cramer':
                return <div>Cramer</div>

            default:
                return <div>Not found module</div>
        }
    }
    if (!methodName) {
        return <div>Not found module</div>
    }

    if (!isAvailable) {
        return <div>Method is not available right now</div>
    }

    return (
        <div>
            {generateMethod(methodName)}
        </div>
    )
}

export default Methods