<template>
    <div v-if="data">
        <div class="container" :style="{backgroundImage: `url( ${ url + data.backdrop_path } )`}">
            <div class="overlay"></div>
            <div class="header" >
                <div class="content">
                    <h3 class="name">{{ data.name }}</h3>
                    <img :src="url + data.poster_path" alt="poster" class="poster">
                    <p><b>Summary:</b>{{ data.overview }}</p>
                    <div class="genres">
                    <h2>Genres:</h2>
                        <ul>
                            <li v-for="(genre,index) in data.genres" :key="index"> {{ genre.name }} </li>
                        </ul>
                    </div>
                    <span>Popularity: {{ data.vote_average }} / Seasons: {{ data.number_of_seasons }} / Episodes: {{ data.number_of_episodes }} </span>
                    <div class="production">
                    <h4>Tv Newtworks:</h4>
                        <ul>
                            <li v-for="(el,index) in data.networks" :key="index"> 
                                <img class="logo" :src=" url + el.logo_path" alt="logoPoster" v-if="el.logo_path !== null">:{{ el.name }} 
                            </li>
                        </ul>
                    </div>
                    <div class="cast" v-if="cast">
                        <h4>Cast:</h4>
                        <ul>
                            <li v-for="(person,index) in cast.cast" :key="index"> 
                                <img class="person" :src=" url + person.profile_path" v-if="person.profile_path !== null " alt="castimg"><h5>{{ person.name }} <b>As</b> {{ person.character }}</h5> 
                            </li>
                        </ul>
                    </div>
                    <ul class="creater">
                        <h1>Created By:</h1>
                        <h1 v-if="data.created_by.length == 0">No Data Was Found :'(</h1>
                        <li v-for="creater in data.created_by" :key="creater.id">
                            {{ creater.name }}
                        </li>
                    </ul>
                    <h1>Release Date:{{ data.first_air_date }}</h1>
                    <!-- <div class="videoC" >
                    <iframe class="video" v-for="video in videos.results" :key="video.id" width="560" height="315" :src=" Vurl + video.key" :title="video.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> -->
                </div>
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
                videos:null,
                cast:null,
                Vurl:"https://www.youtube.com/embed/"
            }
        },
        mounted () {
            this.fetchdata()
            this.fetchCast()
            // this.fetchVideos()
        },
        methods: {
            async fetchdata(){
            const response = await fetch(`https://api.themoviedb.org/3/tv/${this.$route.params.id}?api_key=3990d54b09ed3c1179f3b38bd8567a99&with_cast`)
            this.data = await response.json()
            },
            
            // async fetchVideos(){
            // const response = await fetch(`https://api.themoviedb.org/3/tv/${this.$route.params.id}/videos?api_key=3990d54b09ed3c1179f3b38bd8567a99`)
            // this.videos = await response.json()
            // },
            async fetchCast(){
            const response = await fetch(`https://api.themoviedb.org/3/tv/${this.$route.params.id}/credits?api_key=3990d54b09ed3c1179f3b38bd8567a99`)
            this.cast = await response.json()
                if (this.cast.cast.length > 10) {
                    this.cast.cast.splice(9,(this.cast.cast.length) - 10)
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
.container{
        background-size:cover;
        background-position: top;
        position: relative;
    .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        background: linear-gradient(180deg, transparent, #333);
        z-index: 1;
    }
   .header{
        width: 1300px;
        margin: 0 auto;
        min-height: 100vh;
       
       .content{
            z-index: 10;
            color:#fff;
            position: relative;
            display: grid;
            padding-top: 50px;
            padding-bottom: 50px;
            gap: 15px;
            grid-template-areas:
            'title title img'
            'preview preview img'
            'genres genres img'
            'production production img'
            'creater creater img'
            'date date rating'
            'cast cast cast'
            ;
           .name{
            color: #666;
            grid-area: title;
            font-size: 5ch;
            background: #fff;
            border-radius: 25px;
            padding: 10px 15px;
            width: max-content;
            height: max-content;
           }
            .poster{
                max-width:100%;
                grid-area: img;
                min-height: 100%;
            }
            p{
                grid-area: preview;
                font-size: 2.3ch;
                word-spacing: 8px;
                font-weight: bold;
                text-shadow: 0px 0px 10px #000;
                background: rgb(0,0,0,.5);
                padding: 25px;
                border-radius: 50px;
                height: min-content;
            }
            .genres{
                grid-area: genres;
                font-size: 3ch;
                display: flex;
                align-items: center;
                h2{
                    font-size: 2ch;
                    text-shadow: 0px 0px 10px #000;
                }
                ul{
                    display: flex;
                    align-content: center;
                    gap:10px;
                    margin-left: 10px;
                    li{
                        list-style: none;
                        text-shadow: 0px 0px 10px #000;
                        font-weight: bold;
                    }
                    li:not(:last-child)::after{
                        content: '/';
                        position: absolute;
                        font-weight: bolder;
                    }
                }
            }
            span{
                grid-area: rating;
                background: #fff;
                color:#666;
                padding:10px 20px;
                border-radius:25px;
                width: max-content;
                font-weight: bold;
            }
            .production{
                grid-area: production;
                display: flex;
                align-items: center;
                h4{
                    font-size: 3ch;
                }
                ul{
                    display: grid;
                    grid-template-columns: repeat(2,1fr);
                    gap: 10px;
                    margin-left: 25px;
                    li{
                        display: flex;
                        list-style: none;
                        align-items: center;
                        font-size: 2ch;
                        .logo{
                            width:100px;
                            background: #fff;
                            padding: 10px 5px;
                            border-radius: 20px;
                            margin-right: 10px;
                        }
                    }
                }
            }
            .cast{
                grid-area: cast;
                h4{font-size: 5ch;}
                ul{
                    display: grid;
                    gap: 6px;
                    grid-template-columns: repeat(5,1fr);
                    li{
                        display: flex;
                        align-items: center;
                        list-style: none;
                        gap: 10px;
                        h5{}
                        img{
                            width: 25%;
                            border-radius: 35px;
                        }
                    }
                }
            }
            h1{
                grid-area: date;
            }
            .creater{
                grid-area: creater;
                display: flex;
                align-items: center;
                font-size: 3ch;
                gap: 8px;
                h1{font-size: 1.8ch;}
                li{list-style:none;}
                li:not(:last-child)::after{
                    content: '/';
                    position: absolute;
                }
            }
       }    
   }
}

@media screen and (max-width:1280px){
    .container{
        .header{
            width: auto;
            .content{
                grid-template-areas:
                'title'
                'img'
                'preview'
                'genres'
                'production'
                'rating'
                'creater'
                'date'
                'cast'
                ;
                .name{width: 75%;text-align: center;margin: 0 auto;}
                img{width:70%}
                .poster{width: 70%;margin: 0 auto;}
                p{width: 70%;margin: 0 auto;font-size: 2ch;}
                .genres{margin: 0 auto;}
                span{margin: 20px auto;}
                .creater{flex-direction: column;}
                .production{margin: 0 auto;}
                .cast{padding: 25px;ul{grid-template-columns: repeat(3,1fr);}}
                h1{margin: 0 auto;}
            }
        }
    }
}
@media screen and (max-width:790px){
    .container{
        .header{
            width: auto;
            .content{
                .name{font-size: 2ch;}
                .poster{width: 60%;}
                p{width: 85%;margin: 0 auto;font-size: 1.6ch;word-spacing: 3px;}
                .genres{
                    margin: 0 auto;display: flex;font-size: 2ch;
                }
                span{margin: 20px auto;}
                .creater{flex-direction: column;font-size: 2ch;}
                .production{
                    margin: 0 auto;font-size: 1.5ch;padding: 15px;
                    flex-direction: column;
                    h4{margin-bottom: 25px;}
                }
                .cast{
                    padding: 25px;
                    ul{
                        grid-template-columns: repeat(2,1fr);
                        font-size: 1.5ch;
                    }
                }
                h1{margin: 0 auto;}
            }
        }
    }
}
@media screen and (max-width:450px){
    .container{
        .header{
            width: auto;
            .content{
                .name{font-size: 1.5ch;}
                .poster{width: 60%;}
                p{width: 95%;margin: 0 auto;font-size: 1.3ch;word-spacing: 3px;}
                .genres{
                    margin: 0 auto;font-size: 1.5ch;
                    h2{margin-bottom: 15px;}
                    ul{flex-direction: column;}
                }
                span{margin: 20px auto;width: 55%;}
                .production{
                    margin: 0 auto;font-size: 1.5ch;padding: 15px;flex-direction: column;
                    ul{grid-template-columns: repeat(1, 1fr);}
                    h4{ margin-bottom:20px;}
                }
                .cast{
                    padding: 25px;
                    ul{
                        grid-template-columns: 1fr;
                        font-size: 1.5ch;
                    }
                }
                h1{margin: 0 auto;font-size: 2.3ch;}
            }
        }
    }
}
</style>