import {useRouteError} from 'react-router-dom'

export const ErrorPage =() => {
    const error = useRouteError()
    console.log(error)

    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>sorry an unexpected error has happened</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
} 