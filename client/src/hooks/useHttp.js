import {useState, useCallback} from 'react'

export const useHttp = () => {
       const [loading, setLoading] = useState(false);
       const [error, setError] = useState(null)

    const request = useCallback(async (url, method='GET', mode='no-cors') => {
           setLoading(true)

        try {
            const response = await fetch(url, {method})
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'request error')
            }

            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const throwError = () => setError(null)

    return {loading, request, error, throwError}
}
