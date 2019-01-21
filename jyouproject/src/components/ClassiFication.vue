<template>
    <div>
        <mt-header class="classpage">
            <mt-button icon="search" slot="left" class="search_l" @click.native="goto('search')">
                请输入您需要的商品名称
            </mt-button>
        </mt-header>

      
        <cube-scroll-nav
        :side="true"
        :data="tabs"
        :current="current"
        @change="changeHandler"
        @sticky-change="stickyChangeHandler">
            
            <cube-scroll-nav-panel
            v-for="item in tabs"
            :label="item.label"
            :key="item.label"
            :title="item.label">
                <ul>
                    <li v-for="food in item.heroes" :key="food.name">
                        <div class="heroesBox">
                            <img src="../imgs/aa.png" >
                            <p>{{food.name}}</p>
                        </div>
                    </li>
                </ul>
            </cube-scroll-nav-panel>
        </cube-scroll-nav>   

        
                     
    </div>
        
   
  
</template>
<script>
  export default {
    data() {
      return {
           
            current: '男装',
            tabs: [{
                label: '女装',
                heroes: [{'name':'T恤' ,imgs:'../imgs/aa.png'},
                        {'name':'衬衫' ,imgs:'../imgs/aa.png'},
                        {'name':'针织衫' ,imgs:'../imgs/aa.png'},
                        {'name':'小背心' ,imgs:'../imgs/aa.png'},
                        ]
            },{
                label: '男装',
                heroes: [{'name':'T恤' ,imgs:'../imgs/aa.png'},
                        {'name':'衬衫' ,imgs:'../imgs/aa.png'},
                        {'name':'针织衫' ,imgs:'../imgs/aa.png'},
                        {'name':'小背心' ,imgs:'../imgs/aa.png'},
                        ]
            },{
                label: 'aa',
                heroes: [{'name':'T恤' ,imgs:'../imgs/aa.png'},
                        {'name':'衬衫' ,imgs:'../imgs/aa.png'},
                        {'name':'针织衫' ,imgs:'../imgs/aa.png'},
                        {'name':'小背心' ,imgs:'../imgs/aa.png'},
                        ]
            },{
                label: 'bb',
                heroes: [{'name':'T恤' ,imgs:'../imgs/aa.png'},
                        {'name':'衬衫' ,imgs:'../imgs/aa.png'},
                        {'name':'针织衫' ,imgs:'../imgs/aa.png'},
                        {'name':'小背心' ,imgs:'../imgs/aa.png'},
                        ]
            }
            // ,{
            //     label: 'gg',
            //     heroes: ['T恤','衬衫','毛衣','针织衫','小背心','外套','风衣','大衣','棉衣','羽绒服','皮衣','马夹','卫衣','西装']
            // }
            ]
            
      }
    },
    methods:{
        goto(path){
        this.$router.push(path);
        },
        thisshow(label){
            console.log(label)
            this.selectedLabel = label
        },
        changeHandler(label) {
            console.log('changed to:', label)
        },
        stickyChangeHandler(current) {
            console.log('sticky-change', current)
        }
    }
  }
</script>
<style lang="scss">
    .classpage{
        height:1.2rem;
        flex:1;
        background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
        padding: 5px 0px;
        width: 100%;
        .search_l{
            border-radius: 20px;
            background: #fff;
            margin-left: 10px;
            color: #ccc;
            width: 8.5rem;
            height: .8rem;
        }
    }
    // .heroesBox{
    //     width: 2.666667rem;
    //     height: 5.333333rem;
    //     float: left;
    //     p{
    //         text-align: center;
    //     }
    //     img{
    //         width: 2.666667rem;
    //         height:2.666667rem ;
    //     }
    // }
    // .classification{
    //     display: flex;
    //     width: 100%;
    //    .l-tab{
    //        width: 25%;
    //        flex-direction: column;
    //        .cube-tab{
    //            font-size: .48rem;
    //            cursor: pointer;
    //            height: 1.333333rem;
    //            width: 2.666667rem;
    //            line-height: 1.333333rem;
               
    //        }
    //     } 
    //     .r-tab{
    //         width: 74%;
    //         background: #FBAA58;
    //         margin-left: 1%;
    //         // height: 100%;
    //         ul{
    //             padding:0;
    //             list-style:none;
    //         }
    //     }
    // }
    
</style>