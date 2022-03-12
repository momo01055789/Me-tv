<template>
    <div>
        <header>
            <nav>
                <h3 class="logo">ME-tv</h3>
                <ul id="list">
                    <li><router-link to="/" v-if="$route.path !== '/'">Home</router-link></li>
                    <li><router-link to="/series">Series</router-link></li>
                    <li><router-link to="/movies">Movies</router-link></li>
                    <li class="genres">
                        <router-link to="">Genres</router-link>
                        <div class="genre-list" v-if="list">
                            <ul class="genresL">
                                <li v-for="(item,index) in list.genres" :key="index" >
                                <router-link class="genreslink" :to="{name:'genres',params:{id:item.id}}">
                                {{ item.name }}
                                </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div class="Bmenu">
                    <div class="Bbar"></div>
                </div>
            </nav>
            <form action="" @submit.prevent="Query">
                <input class="search" type="text" v-model="query" placeholder="Enter Keywords....">
            </form>
        </header>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                list: null,
                result:null,
                query:'',
            }
        },
        mounted () {
            this.fetchList();
            let Bmenu = document.querySelector('.Bmenu')
            let list = document.getElementById('list')
            Bmenu.addEventListener('click',function(){
                list.classList.toggle('open')
            })

            window.addEventListener('resize', function(){
            const list = document.getElementById('list');
                if (list.classList.contains('open')) {
                    list.classList.remove('open')
                }
            })
        },
        methods: {
            async fetchList() {
                const list = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=3990d54b09ed3c1179f3b38bd8567a99")
                this.list = await list.json()
            },
            async Query() {
                this.$router.push({name:'results',query:{q:this.query}})
            },
        },
    }
</script>

<style lang="scss" scoped>
header{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(69deg,#4d194d,#3e1f47,#272640,#212f45,#144552,#065a60,#006466);
    height: 400px;
    background-size: 300%;
    position: relative;
    animation: animate-bg 15s infinite alternate;
    nav{
        width: 100%;
        display: flex;
        background:#fff;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        position: relative;
        .logo{
            font-family: 'Racing Sans One', cursive;
            font-size: 4ch;
            color: #240046;
        }
        ul{
            display:flex;
            gap: 50px;
            .genres{
                position: relative;
                .genre-list{
                    display: none;
                    z-index: 100;
                    width: max-content;
                    padding: 20px;
                    right: -50%;
                    text-align: center;
                    overscroll-behavior: contain;
                    .genresL{
                        font-size: 1.2ch;
                        display: grid;
                        grid-template-columns: 1fr;
                        .genreslink{
                            color:#3e1f47;
                        }
                        .genreslink:hover{
                            color:#1c9a9c
                        }
                    }
                }
            }
            .genres:hover .genre-list{
                display: block;
                position: absolute;
                background: #fff;
                height: 50vh;
                overflow-x: scroll;
                right: 0;
            }   
            li{
                list-style: none;
                padding-left:15px;
                font-size: 2.5ch;
                a{
                    text-decoration: none;
                    color:#000;
                    font-weight: 600;
                    transition: color 100ms ease-in;
                }
                a:hover{
                    color:#1c9a9c
                }
            }
        }
        ul.open{
            display: block;
            position: absolute;
            right: 0;
            top: 75%;
            padding: 15px 10px;
            background: #fff;
            width: 100%;
            text-align: right;
            z-index: 100;
            li{
                padding: 10px;
            }
        }
        .Bmenu{
            width: 55px;
            height: 55px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            display: none;
            .Bbar{
                width: 80%;
                height: 5px;
                background: #240046;
                border-radius: 25px;
            }
            .Bbar::before,
            .Bbar::after{
                content: '';
                position: absolute;
                width: 80%;
                height: 5px;
                background: #240046;
                border-radius: 25px;
            }
            .Bbar::before{transform: translateY(10px);}
            .Bbar::after{transform: translateY(-10px);}
        }
    }
    form{
        width: 100%;
        position: absolute;
        top: 90%;
        display: flex;
        justify-content: center;
        .search{
        width:60%;
        outline: none;
        border: none;
        border-radius: 20px;
        font-size: 2.8ch;
        color: #666;
        padding:14px 15px;
        font-weight: 600;
        box-shadow: 0px 5px 15px #999,0px -5px 15px #999;
        }
    }
}

@keyframes animate-bg {
    from{background-position: left;}
    to{background-position: right;}
}

@media screen and (max-width: 980px) {
    header{
        nav{
            ul{display: none;}
            .Bmenu{display: flex;}
        }
        form{
            .search{
            width: 85%;
            padding: 10px 15px;
            }
        }
    }
}
@media screen and (max-width: 750px) {
    header{
        nav{
            ul{display: none;}
            
        }
        form{
            .search{
            width: 85%;
            padding: 10px 15px;
            }
        }
    }
}
@media screen and (max-width: 550px) {
    header{
        form{
            .search{
            width: 85%;
            padding: 8px 15px;
            }
        }
    }
}
@media screen and (max-width: 450px) {
    header{
        nav{
            ul{display: none;}
            .logo{font-size: 3ch;}
        }
        h2{font-size:1.6ch;}
        .search{
            width: 85%;
            padding: 10px 15px;
        }
    }
}
</style>