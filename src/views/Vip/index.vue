<template>
  <div class = 'page-vip'>
    <normal-header title="VIP"></normal-header>
    <div class="vip-main">
      <cartoon-list :list="list"></cartoon-list>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import CartoonList from '@/components/CartoonList'
import { getVipList } from '@/api/cartoon.js'
import { unformat } from '@/utils/apiHelp'
export default {
  name: 'Vip',
  components: {
    NormalHeader,
    CartoonList
  },
  data () {
    return {
      vipList: []
    }
  },
  methods: {
    getVipList () {
      getVipList().then(res => {
        if (res.data.code === 200) {
          this.vipList = JSON.parse(unformat(res.data.info)).comicsList
        }
      })
    }
  },
  computed: {
    list () {
      return this.vipList.map(item => {
        return {
          id: item.bigbook_id,
          name: item.bigbook_name,
          author: item.bigbook_author,
          coverurl: item.bigcoverurl,
          view: item.bigbookview
        }
      })
    }
  },
  created () {
    this.getVipList()
  }
}
</script>
<style lang="scss" scoped>
.page-vip {
  display: flex;
  flex-direction: column;
  height: 100%;

  .vip-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
