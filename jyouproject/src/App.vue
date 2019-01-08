<template>
  <div id="app">
    <mt-tabbar v-model="selected">
      <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab)">
        <myicons :type="tab.icon" />
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
      this.$router.push({tab.path});
      // console.log(this.active)
    }
  }
}
</script>

<style>
.mint-tabbar>.mint-tab-item.is-selected{
  color:crimson;
}
#actives path{
  fill: rgb(248, 6, 6);
}
</style>
