<template>
    <div class="searchPage">
        <div class="searchPage_h">
            <div class="backbtn" @click="searchBack()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fanhui"></use>
                </svg>
            </div>          
            <span >搜券</span>
            <span style="color:#ccc;opacity:0.7;">搜全网</span>
        </div>
        <mt-search v-model="value" placeholder="天猫超市" @input="search">
            <mt-cell
                
                 >
            </mt-cell>
        </mt-search>
    </div>
</template>

<script>
    // import qs from 'qs';
    export default {
        data(){
            return{
                value:'',
            }
        },
        methods:{
            searchBack(){
                // this.$router.push('Home');
                this.$router.back(-1);
            },
            search(){
                console.log(this.value);
            }
        },
        // created(){
        //     this.$axios.get('https://m.juanpi.com/keywords/search?plateform=m&zy_ids=c4_l4&item=')
        //     .then(res=>{
        //         console.log(res)
        //     })
        // }
    }
</script>
<style lang="scss">
    .searchPage{
        height:3.625rem;
        background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
        border-bottom-color: transparent;
        padding: .5rem .625rem;
        a{
            font-size: .32rem;
            color:#fff;
            background: #FFB925;
            width: 1.813333rem;
            height: .746667rem;
            line-height: .746667rem;
            text-align: center;
            border-radius: .533333rem;
            margin: 0;
        }
        .mint-searchbar{
            padding: 0;
            height: 1.875rem;
        }
        .searchPage_h{
            height: 1.875rem;
            // margin:.625rem 0rem;
            text-align: center;
            color: #fff;
            .icon {
                width: 1em;
                height: 1em;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
                
            }
            span{
                line-height: 1.875rem;
                font-size: .75rem;
                cursor: pointer;
                margin: 0rem .625rem;
            }
            .backbtn{
                display: block;
                float: left;
            }
        }
        .mint-searchbar{
            padding-left: .9375rem;
            background: transparent;
            .mint-searchbar-inner{
                border-radius: 1.875rem;
                padding:0 0 0 .625rem;
                input{
                    border-radius: 1.25rem
                }
                
            }
        }
        
    }
</style>