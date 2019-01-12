<template>
  <div id="app">
    <mt-tabbar v-model="selected" class="bttabbar">
      <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
        <myicons :type="tab.icon" v-model="selected"/>
        {{tab.text}}
      </mt-tab-item>  
    </mt-tabbar>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import MintUI from 'mint-ui';
import myicons from '@/plugins/icons';
Vue.use(myicons);
Vue.use(MintUI);
import 'mint-ui/lib/style.css'
import iconfont from './assets/aliIcon/iconfont.js'
import axios from 'axios';
Vue.prototype.$axios = axios;
export default {
  data(){
    return{
      tabs:[
        {
          text:'首页',
          icon:'home',
          path:'/home',
          name: 'Home'
        },{
          text:'分类',
          icon:'list-unordered',
          path:'/classification',
          name: 'ClassiFication'
        },{
          text:'购物车',
          icon:'archive',
          path:'/shoppingcart',
          name: 'ShoppingCart'
        },{
          text:'我的',
          icon:'person',
          path:'/mine',
          name: 'Mine'
        }
      ],
      selected:'Home',
      active:''
    }
  },
  methods:{
    goto(path,val){
      // let paths = path.path;
      this.$router.push({path});
    }
  }
}
</script>

<style>
.mint-tabbar>.mint-tab-item.is-selected{
  color:rgb(248, 6, 6);
}
.is-selected path{
  fill: rgb(248, 6, 6);
}
.bttabbar{
  height:1.125rem;
  position: fixed;
}
</style>
