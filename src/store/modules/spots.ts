import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators'
import store from '@/store'
import { Spot, SelectedFilters } from '../models'
import { getSpots } from '../api'

@Module({
  dynamic: true,
  namespaced: true,
  name: 'spots',
  store
})
class SpotsModule extends VuexModule {
  spots: Spot[] = []

  @Mutation
  setSpots(result: Spot[]) {
    this.spots = result
  }

  @Action({ commit: 'setSpots' })
  async getSpots(filters: SelectedFilters): Promise<Spot[]> {
    const result = await getSpots(filters)
    if (typeof result !== 'undefined' && typeof result.error !== 'undefined' && result?.error.status) {
      console.error(result.error)
    } else if (typeof result !== 'undefined' && result.content !== null) {
      return result.content
    }

    return []
  }
}

export default getModule(SpotsModule)
