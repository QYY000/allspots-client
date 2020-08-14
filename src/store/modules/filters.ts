import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators'
import store from '@/store'
import { Access, Category, Skill, Size, Filters } from '../models'
import { getFilters } from '../api'

@Module({
  dynamic: true,
  namespaced: true,
  name: 'filters',
  store
})
class FiltersModule extends VuexModule {
  loadedFilters = false
  accesses: Access[] = []
  categories: Category[] = []
  skills: Skill[] = []
  sizes: Size[] = []
  selectedLocation = ''
  selectedAccess = ''
  selectedCategory: Array<string> = []
  selectedSkill: Array<string> = []
  selectedSize: Array<string> = []

  @Mutation
  setFilters(result: Filters) {
    this.accesses = result.accesses
    this.categories = result.categories
    this.skills = result.skills
    this.sizes = result.sizes
    this.loadedFilters = true
  }

  @Mutation
  selectLocation(location: string) {
    this.selectedLocation = location
  }

  @Mutation
  selectAccess(access: string) {
    this.selectedAccess = access
  }

  @Mutation
  selectSkill(skills: Array<string>) {
    this.selectedSkill = skills
  }

  @Mutation
  selectCategory(categories: Array<string>) {
    this.selectedCategory = categories
  }

  @Mutation
  selectSize(sizes: Array<string>) {
    this.selectedSize = sizes
  }

  @Action({ commit: 'setFilters' })
  async getFilters(): Promise<Filters> {
    const result = await getFilters()
    if (typeof result !== 'undefined' && typeof result.error !== 'undefined' && result?.error.status) {
      console.error(result.error)
    } else if (typeof result !== 'undefined' && result.content !== null) {
      return result.content
    }

    return { accesses: [], categories: [], skills: [], sizes: [] }
  }
}

export default getModule(FiltersModule)
