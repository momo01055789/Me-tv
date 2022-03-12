<template>
    <div v-if="data" class="main-container">
       <u><h1>Popular</h1></u>
       <button class="arrow-right" @click="scrollleft()"><img src="https://cdn-icons-png.flaticon.com/512/860/860828.png" alt=""></button>
        <div class="items-containerP">
            <div class="item" v-for="(item,index) in data.results" :key="index">
                <router-link :to="{name:'details',params:{ id:item.id }}" >
                <h3>   {{ item.title }} </h3>
                <img :src="url + item.poster_path" alt="Poster_Path">
                <span> {{ item.release_date }} </span>
                </router-link>
            </div>
        </div>
        <button class="arrow-left" @click="scrollright()"><img src="https://cdn-icons-png.flaticon.com/512/860/860790.png" alt=""></button>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                data: null,
                url:'https://image.tmdb.org/t/p/original/'
            }
        },
        mounted () {
        this.fetchdata()
        },
        methods: {
            async fetchdata(){
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3990d54b09ed3c1179f3b38bd8567a99')
            this.data = await response.json()
            },
            scrollright(){
                let container = document.querySelector('.items-containerP')
                container.scrollLeft -= 150 * this.data.results.length / 2.5
                    
            },
            scrollleft(){
                let container = document.querySelector('.items-containerP')
                container.scrollLeft += 150 * this.data.results.length / 2.5 
                
            }
        },
    }
</script>

<style lang="scss" scoped>
.main-container{
    width:1400px;
    margin:50px auto;
    position: relative;
    text-align: center;
    h1{
        color:#240046;
        text-align: center;
        margin-bottom: 50px;
    }
    .arrow-right,
    .arrow-left{
        img{width:100%}
        position: absolute;
        width:55px;
        background: #fff;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        transition: opacity 250ms ease-out;
        z-index: 10;
        box-shadow: 5px 5px 20px #222;
    }
    .arrow-right:hover{opacity: .5;}
    .arrow-left:hover{opacity: .5;}
    .arrow-right{
        right: 0;
        top: 50%;
        padding: 15px;
    }
    .arrow-left{
        left: 0;
        top: 50%;
        padding: 15px;
    }
    .items-containerP{
        display: flex;
        width: 100%;
        gap:15px;
        transition: all 250ms ease-in-out;
        position: relative;
        overflow-x: hidden;
        overscroll-behavior-inline: contain;
        scroll-behavior: smooth;
        overflow-y: hidden;
        .item{
            position: relative;
            width:100%;
            border-radius:5px;
            grid-auto-rows:min-content;
            transition: all 150ms ease-in-out;
            a{
            display: grid;
            grid-auto-columns: minmax(150px,300px);
            grid-template-areas:
            'pic'
            'name'
            'date';
            gap:5px;
            text-decoration:none;
            color: #666;
            h3{
                font-size:2ch;
                grid-area: name;
                color: #666;
                white-space: nowrap;
                overflow-x: hidden;
                padding: 5px 10px;
            }
            img{
                inline-size: 100%;
                grid-area: pic;
                object-fit:cover;
                border-radius: 20px;
            }
            span{
                grid-area: date;
            }
        }
        }
        .item:hover{
            opacity: .8;
            transform: scale(1.1);
        }
    
    }
    
    .snaps-inline{scroll-snap-type: inline mandatory;}
    .snaps-inline > * {scroll-snap-align: start;}
}
@media screen and (max-width:1390px){
    .main-container{width: 1100px;}
}
@media screen and (max-width:1120px){
    .main-container{
        width: auto;
       h1{
        margin-bottom: 50px;
        color:#240046;
        }
        .arrow-right,
        .arrow-left{
            display: none;
        } 
        .items-containerP{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            .item{
                a{
                    grid-template-columns: 150px;
                    justify-content: center;
                }
            }
        }
    }
}
@media screen and (max-width:550px){
    .main-container{
        width: auto;
       h1{
        margin-bottom: 25px;
        color:#240046;
        }
        .arrow-right,
        .arrow-left{
            display: none;
        } 
        .items-containerP{
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 0;
            .item{
                a{
                    grid-template-columns: 150px;
                    justify-content: center;
                }
            }
        }
    }
}
@media screen and (max-width:350px){
    .main-container{
        width: auto;
       h1{
        margin-bottom: 25px;
        color:#240046;
        font-size: 2.8ch;
        }
        .arrow-right,
        .arrow-left{
            display: none;
        } 
        .items-containerP{
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 10px;
            .item{
                a{
                    grid-template-columns: 120px;
                    justify-content: center;
                }
            }
        }
    }
}
</style>