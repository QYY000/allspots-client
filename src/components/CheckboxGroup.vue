<template>
  <div class="side-filter-group">
    <h4>{{ title }}</h4>
    <ul id="checkbox-group">
      <li v-for="item in items" :key="item._id">
        <label class="checkbox">
          <input type="checkbox" :value="item._id" v-model="selectedItems">
          <div></div>
          <span>{{ item.title }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator"
import { Skill } from '@/store/models'

@Component({
  name: 'CheckboxGroup',
})
export default class CheckboxGroup extends Vue {
  @Prop()
  title?: string
  @Prop()
  select?: Function
  @Prop()
  selected?: Array<string>
  @Prop()
  items?: Array<Skill>

  selectedItems: Array<string> = []

  mounted() {
    if(typeof this.selected !== 'undefined'){
      this.selectedItems = this.selected
    }
  }

  @Watch('selectedItems')
  onPropertyChanged(value: Array<string> , oldValue: Array<string> ) {
    if(value !== oldValue && typeof this.select !== 'undefined'){
      this.select(value)
    }
  }

  @Watch('selected')
  onSelectedChange() {
    if(typeof this.selected !== 'undefined'){
      this.selectedItems = this.selected
    }
  }
}
</script>

<style lang="css">
.side-filter-group {
  margin-top: 30px;
}

#checkbox-group {
  margin: 0;
  padding: 0;
  margin-top: 15px;
  list-style-type: none;
  display: block;
}

#checkbox-group li {
  margin-bottom: 10px;
}
</style>