<template>
    <div class="main-container">
        <u><h1>Popular Tv Shows</h1></u>
        <div class="item-container" v-if="data">
            <div class="item" v-for="item in data.results" :key="item.id">
                <router-link :to="{name:'tvdetails',params:{ id:item.id }}">
                    <img :src=" url + item.poster_path " alt="Poster">
                    <h2 class="title"> {{ item.name }} </h2>
                    <span class="date">{{ item.first_air_date }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: null,
                url:'https://image.tmdb.org/t/p/original/',
            }
        },
        mounted () {
            this.fetchdata();
        },
        methods: {
            async fetchdata(){
            const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=3990d54b09ed3c1179f3b38bd8567a99&adult=false&page=20`)
            this.data = await response.json()
            },
        },
    }
</script>

<style lang="scss" scoped>
.main-container{
    width: 1400px;
    margin: 0 auto;
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
        overflow-y: hidden;
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
            opacity: .8;
            transform: scale(1.1);
        }
    }
}
@media screen and (max-width:1390px){
    .main-container{width: 1100px;}
}
@media screen and (max-width:1120px){
    .main-container{
        width: auto;
        display: block;
       h1{
        margin-bottom: 25px;
        color:#240046;
        }
        .arrow-right,
        .arrow-left{
            display: none;
        } 
        .item-container{
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
        display: block;
        margin-bottom: 30px;
       h1{
        margin-bottom: 25px;
        color:#240046;
        font-size: 2.8ch;
        }
        .arrow-right,
        .arrow-left{
            display: none;
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
@media screen and (max-width:350px){
    .main-container{
        width: auto;
        display: block;
       h1{
        margin-bottom: 25px;
        color:#240046;
        }
        .arrow-right,
        .arrow-left{
            display: none;
        } 
        .item-container{
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