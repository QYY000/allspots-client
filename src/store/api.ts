import axios from 'axios'
import { UserSubmit, UserLoginResponse, FiltersResponse } from './models'

export const apiService = axios.create({
  baseURL: process.env.VUE_APP_API
})

/**
 * Sets authorization header with the token
 * @param jwt string
 */
export function setJWT(jwt: string) {
  apiService.defaults.headers.common['Authorization'] = jwt
}

/**
 * Deletes authorization header
 */
export function clearJWT() {
  delete apiService.defaults.headers.common['Authorization']
}

/**
 * Signs in a user
 * @param user UserSubmit
 * @return Promise<UserLoginResponse | undefined>
 */
export async function signInUser(user: UserSubmit): Promise<UserLoginResponse | undefined> {
  try {
    const response = await apiService.post('users/authenticate', user)
    return response.data as UserLoginResponse
  } catch (e) {
    console.error(e)
  }
}

/**
 * Signs in a user
 * @param user UserSubmit
 * @return Promise<UserLoginResponse | undefined>
 */
export async function getFilters(): Promise<FiltersResponse | undefined> {
  try {
    const response = await apiService.get('filters/list')
    return response.data as FiltersResponse
  } catch (e) {
    console.error(e)
  }
}
