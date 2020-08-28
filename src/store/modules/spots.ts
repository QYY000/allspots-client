import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators'
import store from '@/store'
import { Spot, SelectedFilters, NewSpotSubmit, NewSpot, SingleSpot, Error } from '../models'
import { getSpots, addNewSpot, fetchSingleSpot } from '../api'

@Module({
  dynamic: true,
  namespaced: true,
  name: 'spots',
  store
})
class SpotsModule extends VuexModule {
  spots: Spot[] = []
  activeSpot: SingleSpot | null = null

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

  @Mutation
  setActiveSpot(result: SingleSpot | null) {
    this.activeSpot = result
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

  @Action({ commit: 'setActiveSpot' })
  async getSingleSpot(slug: string): Promise<SingleSpot | null | Error> {
    const result = await fetchSingleSpot(slug)
    if (typeof result !== 'undefined' && typeof result.error !== 'undefined' && result?.error.status) {
      return result.error
    } else if (typeof result !== 'undefined' && result.content !== null) {
      return result.content
    }

    return null
  }
}

export default getModule(SpotsModule)
