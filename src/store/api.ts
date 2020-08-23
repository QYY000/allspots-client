import axios from 'axios'
import {
  UserSubmit,
  UserLoginResponse,
  FiltersResponse,
  SpotsResponse,
  SelectedFilters,
  NewUserResponse,
  NewUserSubmit,
  NewSpotSubmit,
  NewSpotResponse
} from './models'

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
 * Signs up a user
 * @param user NewUserSubmit
 * @return Promise<UserLoginResponse | undefined>
 */
export async function signUpUser(user: NewUserSubmit): Promise<NewUserResponse | undefined> {
  try {
    const response = await apiService.post('users/register', user)
    return response.data as NewUserResponse
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
    const response = await apiService.get('filters')
    return response.data as FiltersResponse
  } catch (e) {
    console.error(e)
  }
}

/**
 * Signs in a user
 * @param user UserSubmit
 * @return Promise<UserLoginResponse | undefined>
 */
export async function getSpots(filters: SelectedFilters): Promise<SpotsResponse | undefined> {
  try {
    let parameters = '?'
    if (filters.selectedLocation.length) {
      parameters += 'location=' + filters.selectedLocation.replace(', ', ',') + '&'
    }

    if (filters.selectedAccess.length) {
      parameters += 'access=' + filters.selectedAccess.replace(', ', ',') + '&'
    }

    if (filters.selectedCategory.length) {
      parameters += 'categories=' + filters.selectedCategory.join() + '&'
    }

    if (filters.selectedSize.length) {
      parameters += 'sizes=' + filters.selectedSize.join() + '&'
    }

    if (filters.selectedSkill.length) {
      parameters += 'skills=' + filters.selectedSkill.join() + '&'
    }

    parameters = parameters.slice(0, -1)

    const response = await apiService.get(`spots${parameters}`)
    return response.data
  } catch (e) {
    console.error(e)
  }
}

/**
 * Add new spot
 * @param user NewUserSubmit
 * @return Promise<UserLoginResponse | undefined>
 */
export async function addNewSpot(spot: NewSpotSubmit): Promise<NewSpotResponse | undefined> {
  try {
    const response = await apiService.post('spots/add', spot)
    return response.data as NewSpotResponse
  } catch (e) {
    console.error(e)
  }
}
