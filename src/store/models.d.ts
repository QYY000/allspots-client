export interface Error {
  status: boolean
  message: string
}

export interface User {
  id: string
  name: string
  email: string
  role: string
}

export interface UserLogin {
  user: User | null
  token: string
}

export interface UserLoginResponse {
  content: UserLogin | null
  error: Error | undefined
}

export interface UserSubmit {
  email: string
  password: string
}

export interface Access {
  _id: string
  title: string
  slug: string
}

export interface Category {
  _id: string
  title: string
  slug: string
}

export interface Skill {
  _id: string
  title: string
  slug: string
}

export interface Size {
  _id: string
  title: string
  slug: string
}

export interface Filters {
  accesses: Access[]
  categories: Category[]
  skills: Skill[]
  sizes: Size[]
}

export interface FiltersResponse {
  content: Filters | null
  error: Error | undefined
}

export interface SelectedFilters {
  selectedLocation: string
  selectedAccess: string
  selectedCategory: Array<string>
  selectedSkill: Array<string>
  selectedSize: Array<string>
}

export interface Spot {
  _id: string
  name: string
  slug: string
  description: string
  lat: string
  lon: string
  country: string
  city: string
  image: string
}

export interface SpotsResponse {
  content: Spot[] | null
  error: Error | undefined
}
