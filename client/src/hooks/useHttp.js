import {useState, useCallback} from 'react'

export const useHttp = () => {
       const [loading, setLoading] = useState(false);

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
            console.log(e)
            throw e
        }
    }, [])

    return {loading, request}
}
