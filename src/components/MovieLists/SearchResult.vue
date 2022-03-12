<template>
    <div class="container">
        <nav>
            <router-link class="home" to="/">ME-tv</router-link>
            <form class="search-bar" @submit.prevent="FetchSearch">
                <input type="text" v-model="search" placeholder="What's on yout mind?">
            </form>
        </nav>
        <div class="items-container" v-if="result">
            <div class="item" >
                <router-link v-for="item in result.results" :key="item.id" :to="{name:'details',params:{id:item.id}}">
                    <img :src=" url + item.poster_path" alt="Poster">
                    <h2 class="title"> {{ item.title }} </h2>
                    <span class="date">{{ item.release_date }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                query: this.$route.query.q,
                result: null,
                search:'',
                url:'https://image.tmdb.org/t/p/original/',
            }
        },
        mounted () {
            this.FetchResults();
        },
        methods: {
            async FetchResults(){
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3990d54b09ed3c1179f3b38bd8567a99&language=en-US&page=1&include_adult=false&query=${this.query}`)
                this.result = await response.json()
            },
            async FetchSearch(){
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3990d54b09ed3c1179f3b38bd8567a99&language=en-US&page=1&include_adult=false&query=${this.search}`)
                this.result = await response.json()
                this.search = ''
            },
        },
        
    }
</script>

<style lang="scss" scoped>
.container{
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #3a0ca3;
        padding: 20px 30px;
        .home{
            font-family: 'Racing Sans One', cursive;
            font-size: 4ch;
            color: #fff;
            transition: opacity 100ms ease-in-out;
        }
        .home:hover{
            opacity: .5;
        }
        .search-bar{
            width: 40%;
            input{
                width: 100%;
                border-radius: 25px;
                padding: 5px 15px;
                font-size: 2.5ch;
                color: #666;
                font-family: auto;
                outline: none;
                border: none;
            }
        }
    }
    .items-container{
        padding: 35px;
        width: 1400px;
        margin: 50px auto;
        .item{
        display: grid;
        grid-template-columns:repeat(5 , 1fr);
        gap: 25px;
            a{
                display: grid;
                grid-template-areas:
                'img'
                'title'
                'date';
                text-decoration: none;
                color: #666;
                img{
                    width: 100%;
                    grid-area: img;
                    border-radius: 25px;
                }
                .title{
                    white-space: nowrap;
                    overflow-x: hidden;
                    grid-area: title;
                }
                .date{
                    grid-area: date;
                    border: 1px solid;
                    width: max-content;
                    padding: 5px 15px;
                    border-radius: 25px;
                    font-weight: bold;
                    height: min-content;
                }
            }
        }
    }
}

@media screen and (max-width:1400px) {
    .container{
        .items-container{width: auto;}
    }
}
@media screen and (max-width:750px) {
    .container{
        nav{
            .home{font-size: 3.5ch;}
           .search-bar{
               width: 55%;
           } 
        }
        .items-container{
            .item{
                grid-template-columns: repeat(4,minmax(150px,250px));
            }
        }
    }
}
@media screen and (max-width:550px) {
    .container{
        .items-container{
            padding: 15px;
            .item{
                grid-template-columns: repeat(3,minmax(80px,150px));
            }
        }
    }
}
@media screen and (max-width:400px) {
    .container{
        nav{
            flex-direction: column;
            .home{
                font-size: 3.5ch;
                margin-bottom: 15px;  
            }
            .search-bar{width: 95%;}
        }
        .items-container{
            padding: 15px;
            .item{
                justify-content: center;
                grid-template-columns: repeat(2,minmax(80px,150px));
            }
        }
    }
}
</style>