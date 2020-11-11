<template>
  <div class="page-home">
    <index-header></index-header>
    <div class="index_main">
      <Swiper
        :autoplay="2000"
        :loop="true"
        @change="changeHandle"
        class="my-swiper"
        v-if="bannerList.length > 0"
      >
        <SwiperItem v-for="item in bannerList" :key="item.id">
          <img :src="item.imageurl" />
        </SwiperItem>
      </Swiper>
      <index-nav></index-nav>
      <index-recommend v-for="item in recommentList" :key="item.specialid" :info='item'></index-recommend>
      <div class="my-icp">
        <a
          class="record"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202006214"
          target="_blank"
        >
          <img
            class="img"
            src="https://wechatapp.zhuishushenqi.com/mhd/201711/gongan.jpg"
          />
          <div>沪公网安备 31011202006214号</div>
        </a>
        <div class="licence">
          增值电信业务经营许可证沪B2-20170022
          <br />网络文化经营许可证沪网文（2016）3206-227号
          <br />出版物经营许可证新出发沪批字第U7659号
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import indexHeader from './components/indexHeader'
import indexNav from './components/indexNav'
import indexRecommend from './components/indexRecommend'
import { Swiper, SwiperItem } from '@/components/Swiper'
import { getBanner, getIndexRecomment } from '@/api/cartoon'
export default {
  name: 'Home',
  data () {
    return {
      bannerList: [],
      recommentList: []
    }
  },
  components: {
    Swiper,
    SwiperItem,
    indexHeader,
    indexNav,
    indexRecommend
  },
  methods: {
    changeHandle (payload) {
      // console.log(payload)
    },
    getBanner () {
      getBanner()
        .then(res => {
          if (res.data.code === 200) {
            this.bannerList = res.data.info
          } else {
            alert(res.data.code_msg)
          }
        })
        .catch(err => {
          alert('网络异常' + err)
        })
    },
    getIndexRecomment () {
      getIndexRecomment()
        .then(res => {
          if (res.data.code === 200) {
            this.recommentList = res.data.info
          } else {
            alert(res.data.code_msg)
          }
        })
        .catch(err => {
          alert('网络异常' + err)
        })
    }
  },
  created () {
    this.getBanner()
    this.getIndexRecomment()
    // fetch('https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //   })

    // fetch('https://api.asilu.com/today/')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //   })

    // fetch('http://localhost:8080/migu/today/')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //   })
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/mixins.scss";
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .index_main {
    flex: 1;
    overflow-y: auto;
  }
  .my-swiper {
    img {
      width: 100%;
    }
  }
  .swiper-container {
    width: 100%;
    height: 180px;
  }
  .my-icp {
    padding: 5px 0;
    font-size: 12px;
    .record {
      display: flex;
      align-items: center;
      justify-content: center;
      .img {
        width: 15px;
        height: 15px;
        margin-right: 4px;
      }
    }
    .licence {
      margin-top: 4px;
      text-align: center;
    }
  }
}
</style>
