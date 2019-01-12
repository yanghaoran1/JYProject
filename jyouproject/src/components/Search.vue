<template>
    <div class="searchPage">
        <div class="searchPage_h">
            <div class="backbtn">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fanhui"></use>
                </svg>
            </div>          
            <span >搜券</span>
            <span style="color:#ccc;opacity:0.7;">搜全网</span>
        </div>
        <mt-search v-model="value" placeholder="天猫超市">
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
        created(){
            // this.$axios.post('http://localhost:4008/api',
               
            //         { 
            //             appid:'709123',
            //             length:'93',
            //             data:'FhSel7Zx3fXsuRD0MjZNep0DCkCoVFBuZ3PVAOfIV4PEnEu0TdIS5d2KQwZBuKatfITDkDmTP2RiqiYhqFdqI9oEYxdPwJnP41ABo/el5qCSgsFTYdlOkYrXIFPZ'
            //         }
            //         // {
            //         //     headers:{
            //         //         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            //         //         'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
            //         //         'Content-Type': 'application/x-www-form-urlencoded',
            //         //         'Origin': null,
            //         //         'Host': 'mapi.dataoke.com',
            //         //         'Upgrade-Insecure-Requests': '1',
            //         //         //'X-DevTools-Emulate-Network-Conditions-Client-Id': '3E416FD1AB3D9A443CF6B18796489D40'
            //         //     }
            //         // }                    
            // )
            // .then(res=>{
            //     console.log(res);
            // })
            // .catch(error=>{
            //     console.log(err)
            // })
            // this.$axios({
            //     method:'post',
            //     url:`/api`,
            //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            //     data:{
            //     appid: '709123',
            //     length: '93',
            //     data:'FhSel7Zx3fXsuRD0MjZNep0DCkCoVFBuZ3PVAOfIV4PEnEu0TdIS5d2KQwZBuKatfITDkDmTP2RiqiYhqFdqI9oEYxdPwJnP41ABo/el5qCSgsFTYdlOkYrXIFPZ'
            //     },
            //     // transformRequest: [function (data) {
            //     //     let ret = ''
            //     //     for (let it in data) {
            //     //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            //     // }
            //     // ret = ret.slice(0,-1);
            //     // return ret
            //     // }]
            //     }).then(res=>{
            //     let data = res;
            //     // this.likeList = data;
            //     console.log(data)
            //     }).catch((err)=>{
                
            // });
        }
    }
</script>
<style lang="scss">
    .searchPage{
        height:4.625rem;
        background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
        border-bottom-color: transparent;
        padding: .5rem .625rem;
        a{
            font-size: .75rem;
        }
        .mint-searchbar{
            padding: 0;
            height: 1.875rem;
        }
        .searchPage_h{
            height: 1.875rem;
            margin:.625rem 0rem;
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