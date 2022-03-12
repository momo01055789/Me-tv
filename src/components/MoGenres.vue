<template>
<app-header/>
    <div class="main-container" v-if="Mlist">
        <div class="container">
            <div class="movie" v-for="(movie,index) in Mlist.results" :key="index">
            <router-link :to="{name:'details',params:{id:movie.id}}">
                <img :src=" url + movie.poster_path " alt="Poster">
                <h1 class="title"> {{ movie.title }} </h1>
                <span> {{ movie.release_date }} </span>
            </router-link>
            </div>
        </div>
        <div class="Pnavigation">
                <button @click="GoBack(Mlist.page)" :style="color">Previous</button>
                 <span>{{ Mlist.page }} of {{ Mlist.total_pages }}</span>
                <button @click="GoNext(Mlist.page)">next</button>
        </div>
    </div>
</template>

<script>
import AppHeader from './AppHeader'

    export default {
        components:{AppHeader},
        data() {
            return {
                Mlist: null,
                url:'https://image.tmdb.org/t/p/original/',
            }
        },
        mounted () {
            this.fetchMovies();
        },
       methods: {
        async fetchMovies() {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3990d54b09ed3c1179f3b38bd8567a99&page=1&with_genres=${this.$route.params.id}`)
        this.Mlist = await response.json()
        },
        async GoNext(num){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3990d54b09ed3c1179f3b38bd8567a99&adult=false&page=${num + 1}`)
        this.Mlist = await response.json() 
        },
        async GoBack(num){
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3990d54b09ed3c1179f3b38bd8567a99&adult=false&page=${num - 1}`)
        this.Mlist = await response.json() 
        },
       }, 
       computed: {
         color() {
            return this.Mlist.page == 1 ? 'opacity:.5' : 'opacity:1'
         }
        },
    }
</script>

<style lang="scss" scoped>
.main-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    .container{
        width: 1400px;
        margin: 50px auto;
        padding: 25px;
        display: grid;
        grid-template-columns: repeat(5,minmax(150px,250px));
        gap: 15px;
    .movie{
        margin: 0 auto;
        a{
            display: grid;
            grid-template-areas: 
            'img'
            'title'
            'date';
            text-align: center;
            text-decoration: none;
            color: #666;
            grid-auto-columns: 150px;
            transition: all 150ms ease-in-out;
            img{
            width: 100%;
            grid-area: img;
            border-radius: 20px;
            }
            .title{
                grid-area: title;
                white-space: nowrap;
                overflow-x: hidden;
                color: #666;
                font-size: 2.5ch;
            }
            span{
                grid-area: date;
                color: #666;
            }
        }
        a:hover{
            opacity: .8;
            transform: scale(1.1);
        }
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

@media screen and (max-width:1400px) {
    .main-container{
        .container{
            width: auto;
        }
    }
}
@media screen and (max-width:990px) {
    .main-container{
        .container{
            width: auto;
            grid-template-columns: repeat(4,minmax(150px,250px));
            .movie{
                a{
                    img{}
                    .title{}
                    span{}
                }
            }
        }
    }
}
@media screen and (max-width:700px) {
    .main-container{
        .container{
            grid-template-columns: repeat(3,minmax(120px,200px));
            .movie{
                a{
                    grid-template-columns: 120px;
                    img{}
                    .title{}
                    span{}
                }
            }
        }
    }
}
@media screen and (max-width:450px) {
    .main-container{
        .container{
            padding: 10px;
            grid-template-columns: repeat(2,minmax(100px,150px));
        }
    }
}
</style>