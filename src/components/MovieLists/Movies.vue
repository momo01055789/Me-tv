<template>
<nav-bar/>
    <div class="main-container" v-if="data">
        <div class="item-container">
            <div class="item" v-for="item in data.results" :key="item.id">
                <router-link :to="{name:'details',params:{ id:item.id }}" >
                    <img :src=" url + item.poster_path " alt="Poster">
                    <h2 class="title"> {{ item.title }} </h2>
                    <span class="date">{{ item.release_date }}</span>
                </router-link>
            </div>
        </div>
        <div class="Pnavigation">
            <button @click="GoBack(data.page)" :style="color">Previous</button>
                <span>{{ data.page }} of {{ data.total_pages }}</span>
            <button @click="GoNext(data.page)">next</button>
        </div>
    </div>
</template>

<script>
import NavBar from "../NavBar.vue"
    export default {
        components: { NavBar },
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
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3990d54b09ed3c1179f3b38bd8567a99&page=1')
            this.data = await response.json()
            },
            async GoNext(num){
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3990d54b09ed3c1179f3b38bd8567a99&adult=false&page=${num + 1}`)
            this.data = await response.json() 
            },
            async GoBack(num){
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3990d54b09ed3c1179f3b38bd8567a99&adult=false&page=${num - 1}`)
            this.data = await response.json() 
            },
        },
        computed: {
         color() {
            return this.data.page == 1 ? 'opacity:.5' : 'opacity:1'
         }
        },
        
    }
</script>

<style lang="scss" scoped>
.main-container{
    width: 1400px;
    margin: 50px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1{
        margin-bottom: 25px;
        color:#240046;
        text-align: center;
    }
    .item-container{
        padding: 35px;
        display: grid;
        grid-template-columns:repeat(5,minmax(150px,250px));
        gap: 15px;
        .item{
            display: grid;
            grid-template-areas: 
            'img'
            'title'
            'date';
            text-align: center;
            grid-template-columns: 150px;
            margin: 0 auto;
            transition: all 150ms ease-in-out;
            a{
                text-decoration: none;
                color: #666;
                img{
                    width: 100%;
                    grid-area: img;
                    border-radius: 25px;
                }
                .title{
                    grid-area: title;
                    white-space: nowrap;
                    overflow-x: hidden;
                    font-size: 2ch;
                }
                .date{
                    grid-area: date;
                }
            }
        }
        .item:hover{
            opacity: .5;
            transform: scale(1.1);
        }
    }
    .Pnavigation{
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 15px;
            button{
            background: #3A0CA3;
            padding: 10px 7px;
            color: #fff;
            border-radius: 25px;
            font-size: 2ch;
            font-weight: bold;
            cursor: pointer;
            }
            span{
                background: #3A0CA3;
                padding: 10px 15px;
                border-radius: 25px;
                color: #fff;
                font-weight: bold;
            }
    }
}

@media screen and (max-width:1390px){
    .main-container{width: 1100px;}
}
@media screen and (max-width:1070px){
    .main-container{
        width: auto;
       h1{
        margin-bottom: 50px;
        color:#240046;
        }
        .item-container{
            display: grid;
            grid-template-columns: repeat(4,1fr);
            .item{
                grid-template-columns:minmax(120px,200px);
                a{
                    justify-content: center;
                }
            }
        }
    }
}
@media screen and (max-width:850px){
    .main-container{
        width: auto;
       h1{
        font-size: 2.5ch;
        margin-bottom: 25px;
        color:#240046;
        }
        .item-container{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            padding: 0;
            .item{
                grid-template-columns:minmax(120px,200px);
                a{
                    justify-content: center;
                }
            }
        }
    }
}
@media screen and (max-width:600px){
    .main-container{
        width: auto;
       h1{
        margin-bottom: 25px;
        color:#240046;
        font-size: 2.8ch;
        }
        .item-container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 15px;
            .item{
                a{
                    grid-template-columns: 120px;
                    justify-content: center;
                }
            }
        }
    }
}
@media screen and (max-width:390px){
    .main-container{
        width: auto;
       h1{
        margin-bottom: 25px;
        color:#240046;
        font-size: 2ch;
        }
        .item-container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 15px;
            .item{
                grid-template-columns: 120px;
                a{
                    justify-content: center;
                }
            }
        }
    }
}
</style>