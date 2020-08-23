import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators'
import store from '@/store'
import { Spot, SelectedFilters, NewSpotSubmit, NewSpot, Error } from '../models'
import { getSpots, addNewSpot } from '../api'

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

  @Mutation
  pushSpot(result: NewSpot) {
    if (result.spot !== null) {
      this.spots.push(result.spot)
    }
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

  @Action({ commit: 'pushSpot' })
  async addSpot(newSpotSubmit: NewSpotSubmit): Promise<NewSpot | Error> {
    const result = await addNewSpot(newSpotSubmit)
    if (typeof result !== 'undefined' && typeof result.error !== 'undefined' && result?.error.status) {
      return result.error
    } else if (typeof result !== 'undefined' && result.content !== null) {
      return { spot: result.content.spot }
    }

    return { spot: null }
  }
}

export default getModule(SpotsModule)
