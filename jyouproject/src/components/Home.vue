<template>
  <div>
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
    <!-- <div class="center"
    style="height:1000px">

    </div> -->
    
  </div>
</template>
<script>
export default {
  data () {
    return {
      nn:''
    }
  },
  methods:{
    goto(path){
      console.log(666)
      this.$router.push(path)
    }
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
}
.page .search_r{
  margin-right: 10px;
}
.page{
  height:1.1875rem;
  background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
  padding: 5px 0px;
}
  
</style>
