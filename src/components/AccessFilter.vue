<template>
  <div id="access-filter">
    <h4>Access</h4>
    <div class="btn-toggler">
      <div 
        v-for="access in accesses" 
        :key="access._id" 
        :class="access.title === selected ? 'selected' : ''"
        @click="selectAccess(access.title)"
      >
        {{ access.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"
import { Access } from '@/store/models'

@Component({
  name: 'AccessFilter',
})
export default class AccessFilter extends Vue {
  @Prop()
  accesses?: Array<Access>

  selected = 'Public'
  
  selectAccess(title: string) {
    this.selected = title
  }
}
</script>

<style lang="css">
#access-filter {
  margin-top: 20px;
}

.btn-toggler {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.btn-toggler div {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--gray);
  background-color: var(--white);
  border: 1px solid var(--grayLighter);
  height: 34px;
  cursor: pointer;
}

.btn-toggler div.selected {
  color: var(--white);
  background-color: var(--primary);
  border-color: var(--primary);
}

.btn-toggler div:first-child {
  border-right: 0;
  border-radius: 20px 0 0 20px;
}

.btn-toggler div:last-child {
  border-left: 0;
  border-radius: 0 20px 20px 0;
}
</style>