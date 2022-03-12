<template>
    <div>
        <nav>
            <router-link class="home" to="/">ME-tv</router-link>
            <form class="search-bar" @submit.prevent="Query">
                <input type="text" v-model="query" placeholder="What's on yout mind?">
            </form>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                query:''
            }
        },
        methods: {
            async Query() {
                this.$router.push({name:'results',query:{q:this.query}})
            },
        }
    }
</script>

<style lang="scss" scoped>
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
        width: 20%;
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

@media screen and (max-width:990px) {
    nav{
        .home{font-size: 3.5ch;}
        .search-bar{
            width: 45%;
        } 
        }
}
@media screen and (max-width:750px) {
        nav{
            .home{font-size: 3.5ch;}
           .search-bar{
               width: 55%;
           } 
        }
}
@media screen and (max-width:400px) {
        nav{
            flex-direction: column;
            .home{
                font-size: 3.5ch;
                margin-bottom: 15px;  
            }
            .search-bar{width: 95%;}
        }
}
</style>