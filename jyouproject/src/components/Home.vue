<template>
  <div class="HomePage">
    <!-- 头部 -->
    <mt-header class="page">
      <mt-button icon="search" slot="left" class="search_l" @click.native="goto('search')">
        请输入您需要的商品名称
      </mt-button>
      
      <mt-button slot="right" class="search_r" @click.native="goto('footprint')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zuji"></use>
          </svg>
      </mt-button>
  </mt-header>

  <!-- 中间区域 -->
  <div class="HomeCenter">

    <!-- 轮播图 -->
    <mt-swipe :auto="4000" class="swiper">
      <mt-swipe-item v-for="item in data" :key="item.id" >
        <a :href="item.jump_url">
          <img :src="item.pic">
        </a> 
      </mt-swipe-item>
    </mt-swipe>

    <!-- 卷皮年货 -->
    <div class="JPgoods">
      <a :href="item.child[0].url" v-for="item in goodlistTab" :key="item.child[0].bd_id">
        <img :src="item.child[0].pic" >
      </a>
    </div>

    <!-- 顾客福利 -->
    <div class="welfare">
      <a :href="welfare[0].child[0].url">
        <img :src="welfare[0].child[0].pic">
      </a>
    </div>

    <!-- 年货 -->
    <div class="Stocking">
      <a :href="Stocking[0].child[0].url">
        <img :src="Stocking[0].child[0].pic">
      </a>
    </div>
    
    <!-- 秒杀活动 -->
    <div class="seckill">
      <a :href="seckill[0].child[0].url" class="seckillH">
        <img :src="seckill[0].child[0].pic">
      </a>
      <div class="seckillH">
        <a :href="seckill[1].child[0].url">
          <img :src="seckill[1].child[0].pic">
        </a>
        <a :href="seckill[1].child[1].url">
          <img :src="seckill[1].child[1].pic">
        </a>
      </div>
    </div>
  <!-- 打折活动 -->
    <div class="discount">
      <a :href="item.child[0].url" v-for="item in discount" :key="item.child[0].bd_id">
        <img :src="item.child[0].pic" >
      </a>
    </div>

    <div class="discountbt">
      <a :href="item.child[0].url" v-for="item in discountbt" :key="item.child[0].bd_id">
        <img :src="item.child[0].pic" >
      </a>
    </div>

  </div>
  
      
  </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data () {
    return {
      nn:'',
      data:[],
      goodlist:[],
      goodlistTab:[],
      welfare:[{child:[{url:'',pic:''}]}],
      Stocking:[{child:[{url:'',pic:''}]}],
      seckill:[{child:[{url:'',pic:''}]},{child:[{url:'',pic:''},[{url:'',pic:''}]]}],
      discount:[],
      discountbt:[],
      goods:[]
    }
  },
  methods:{
    goto(path){
      this.$router.push(path)
    }
  },
  created() {
    this.$axios
    .get('https://webservice.juanpi.com/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_0&app_name=zhe&app_version=&platform=&catname=newest_zhe')
    .then(res=>{
      // console.log(res.data.adsInfo.block[0].multi_block);
      let data = res.data.adsInfo.slide_ads.config.slide;
      this.data = data;
      let goodlist = res.data.adsInfo.block[0].multi_block;
      this.goodlist = goodlist;console.log(this.goodlist)
      this.goodlistTab = goodlist[0].data;
      this.welfare = goodlist[1].data;
      this.Stocking = goodlist[2].data;
      this.seckill = goodlist[3].data;
      this.discount = goodlist[4].data;
      this.discountbt = goodlist[5].data;
      this.goods = goodlist[9].data;
      console.log(this.goodlist)
    })
  },
  mounted() {
    
  }
  
}
</script>

<style scoped>
  .icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: #fff;
  font-size: 22px;
}
.mint-header .mint-button{
  padding: 0;
  height: 25px;
}
.page .search_l{
  border-radius: 20px;
  background: #fff;
  margin-left: 10px;
  color: #ccc;
  width: 8.5rem;
  height: .8rem;
}
.page .search_r{
  margin-right: 10px;
}
.page{
  height:1.2rem;
  background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
  padding: 5px 0px;
  display: flex;
  width: 100%;
}
.HomeCenter img{
  width: 100%;
  height: 100%;
}
.HomeCenter a{
  display: block;
}
.swiper{
    width: 100%;
    height: 4rem;
}
.JPgoods{
  width: 100%;
  height: 2.5856rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.welfare{
  width: 100%;
}
.Stocking{
  width: 100%;
  height: 3.4368rem;
}
.seckill{
  height: 6.7184rem;
  width: 100%;
}
.seckill>div>a{
  height:50%;
}
.seckill .seckillH{
  width: 5rem;
  height: 6.7184rem;
  float: left;
}
.discount{
  width: 100%;
  height: 2.6144rem;
}
.discount a{
  width:50%;
  height: 100%;
  float: left;
}
.discountbt{
  width: 100%;
  height: 2.6144rem;
}
.discountbt a{
  width:50%;
  height: 100%;
  float: left;
}
</style>
