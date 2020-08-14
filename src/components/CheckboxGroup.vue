<template>
  <div class="side-filter-group">
    <h4>{{ title }}</h4>
    <ul id="checkbox-group">
      <li v-for="item in items" :key="item._id">
        <label class="checkbox">
          <input type="checkbox">
          <div></div>
          <span>{{ item.title }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"
import { Skill } from '@/store/models'

@Component({
  name: 'CheckboxGroup',
})
export default class CheckboxGroup extends Vue {
  @Prop()
  items?: Array<Skill>
  @Prop()
  title?: string
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