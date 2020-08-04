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

export interface Profile {
  name: string
  email: string
}
