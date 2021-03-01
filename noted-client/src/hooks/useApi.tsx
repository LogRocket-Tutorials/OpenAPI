import { useCallback, useState } from 'react'
import { ApiError, OpenAPI } from '../services/openapi'

export function useApi() {
  const [error, setError] = useState<ApiError | undefined>(undefined)
  const [isLoading, setIsloading] = useState<boolean>(true)

  OpenAPI.BASE = process.env.REACT_APP_API_ENDPOINT as string
  const handleRequest = useCallback(async function <T>(request: Promise<T>) {
    setIsloading(true)
    try {
      const response = await request
      setError(undefined)
      return response
    } catch (error) {
      setError(error)
    } finally {
      setIsloading(true)
    }
  }, [])

  function dismissError() {
    setError(undefined)
  }

  return { dismissError, error, isLoading, handleRequest }
}

export default useApi