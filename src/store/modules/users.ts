import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators'
import store from '@/store'
import { User, Profile, UserSubmit, UserLogin } from '../models'
import { signInUser } from '../api'

@Module({
  dynamic: true,
  namespaced: true,
  name: 'users',
  store
})
class UsersModule extends VuexModule {
  user: User | null = null
  token = ''
  profile: Profile | null = null

  @Mutation
  setUser(result: UserLogin) {
    this.user = result.user
    this.token = result.token
  }

  get isLoggedIn() {
    return (this.user && this.token) || null
  }

  @Action({ commit: 'setUser' })
  async signIn(userSubmit: UserSubmit): Promise<UserLogin> {
    const result = await signInUser(userSubmit)
    if (typeof result !== 'undefined' && typeof result.error !== 'undefined' && result?.error.status) {
      console.error(result.error)
    } else if (typeof result !== 'undefined' && result.content !== null) {
      return { user: result.content.user, token: result.content.token }
    }

    return { user: null, token: '' }
  }
}

export default getModule(UsersModule)
