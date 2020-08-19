import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators'
import store from '@/store'
import { User, NewUserSubmit, UserSubmit, UserLogin, Error, NewUser } from '../models'
import { signInUser, signUpUser } from '../api'

@Module({
  dynamic: true,
  namespaced: true,
  name: 'users',
  store
})
class UsersModule extends VuexModule {
  user: User | null = null
  token = ''

  @Mutation
  setUser(result: UserLogin) {
    this.user = result.user
    this.token = result.token
  }

  @Mutation
  logout() {
    this.user = null
    this.token = ''
  }

  @Mutation
  setUserFromLocalStorage() {
    // Get user
    const userString = localStorage.getItem('user')
    if (typeof userString === 'string') {
      const user = JSON.parse(userString)
      this.user = user
    }

    // Get token
    const token = localStorage.getItem('token')
    if (typeof token === 'string') {
      this.token = token
    }
  }

  get isLoggedIn() {
    return (this.user && this.token) || null
  }

  @Action({ commit: 'setUser' })
  async signIn(userSubmit: UserSubmit): Promise<UserLogin | Error> {
    const result = await signInUser(userSubmit)
    if (typeof result !== 'undefined' && typeof result.error !== 'undefined' && result?.error.status) {
      return result.error
    } else if (typeof result !== 'undefined' && result.content !== null) {
      localStorage.setItem('user', JSON.stringify(result.content.user))
      localStorage.setItem('token', JSON.stringify(result.content.token))
      return { user: result.content.user, token: result.content.token }
    }

    return { user: null, token: '' }
  }

  @Action({ commit: '' })
  async signUp(newUserSubmit: NewUserSubmit): Promise<NewUser | Error> {
    const result = await signUpUser(newUserSubmit)
    if (typeof result !== 'undefined' && typeof result.error !== 'undefined' && result?.error.status) {
      return result.error
    } else if (typeof result !== 'undefined' && result.content !== null) {
      return { user: result.content.user }
    }

    return { user: null }
  }
}

export default getModule(UsersModule)
