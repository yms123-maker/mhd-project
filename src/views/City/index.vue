<template>
  <div class="page-city">
    <normal-header
      :title="`城市 - ${curCityName}`"
      :showRight="false"
    ></normal-header>
    <div class="city-main">
      <div class="left" ref="scrollLeft">
        <div>
          <div
            class="city-index-section"
            v-for="item in cityList"
            :key="item.py"
            :ref="`section-${item.py}`"
          >
            <p>{{ item.py }}</p>
            <ul>
              <li
                v-for="city in item.list"
                :key="city.cityId"
                @click="changeCity(city)"
              >
                {{ city.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="item in indexs" :key="item" @click="handleClick(item)">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import NormalHeader from '@/components/NormalHeader'
import { getCityList } from '@/api/city'
import { mapGetters, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'City',
  data () {
    return {
      cities: []
    }
  },
  mounted () {
    /* eslint-disable */
    this.bscroll = new BScroll(this.$refs.scrollLeft,{
        click:true
    });
    /* eslint-enable */
  },
  computed: {
    ...mapGetters('city', ['curCityName']),
    cityList () {
      const result = []
      this.cities.forEach(item => {
        const py = item.pinyin.substr(0, 1).toUpperCase()
        const index = result.findIndex(item => item.py === py)
        if (index > -1) {
          result[index].list.push(item)
        } else {
          result.push({
            py,
            list: [item]
          })
        }
      })
      return result.sort((a, b) => a.py.charCodeAt() - b.py.charCodeAt())
    },
    indexs () {
      return this.cityList.map(item => item.py)
    }
  },
  components: {
    NormalHeader
  },
  methods: {
    ...mapMutations('city', ['SET_CURCITY']),
    getCityList () {
      getCityList()
        .then(res => {
          this.cities = res.data.data.cities
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    },
    handleClick (py) {
      const target = this.$refs[`section-${py}`][0]
      //   this.$refs.scrollLeft.scrollTop = target.offsetTop
      this.bscroll.scrollTo(0, -target.offsetTop, 500)
    },
    changeCity (city) {
      this.SET_CURCITY(city)
      const redirect = this.$route.query.redirect || '/'
      this.$router.replace(redirect)
    }
  },
  created () {
    this.getCityList()
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.page-city {
  display: flex;
  flex-direction: column;
  height: 100%;
  .city-main {
    flex: 1;
    overflow: hidden;
    display: flex;
  }
  .left {
    flex: 1;
    height: 100%;
    position: relative;
    .city-index-section {
      @include border-bottom;
      padding-left: 15px;
      p {
        @include border-bottom;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
      }
      li {
        @include border-bottom;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 16px;
      }
    }
  }
  .right {
    width: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    li {
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
