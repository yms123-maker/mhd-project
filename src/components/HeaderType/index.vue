<template>
  <div class="header-type">
    <div
      v-for="(item, index) in types"
      :key="item.id"
      class="item"
      :class="{ active: index === activeIndex }"
      @click="handleClick(item,index)"
    >
      {{ item.description}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderType',
  props: {
    types: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    handleClick (value, index) {
      this.activeIndex = index
      this.$emit('click', { value, index })
    }
  }
}
</script>

<style lang="scss" scoped>
.header-type {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  border-bottom: 1px solid #dbd9dc;
  .item {
    width: 20%;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #000;
    &.active {
      color: #e7370c;
    }
  }
}
</style>
