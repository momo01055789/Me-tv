<template>
    <div class="main-container">
        <div class="container">
                <div class="logo">
                    <a href="/">
                        <img src="https://cdn-icons-png.flaticon.com/512/2502/2502125.png" alt="tv">
                        <h1>MEtv</h1>
                    </a>
                </div>
            <span class="Cp">Created by Mohamed Elhadidy &copy;2022</span>
            <div class="socials">
                <a href="https://www.facebook.com/moody.eldedy/" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="">
                </a>
                <a href="https://github.com/momo01055789?tab=repositories" target="_blank">
                     <img src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png" alt="">
                </a>
                <a href="https://www.linkedin.com/in/mohamed-elhadidy-080458233/" target="_blank">
                     <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.main-container{
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #000;
        color: #fff;
        .logo{
        transition: opacity 150ms ease-in-out;
            a{
            display: flex;
            align-items: center;
            gap: 5px;
            padding: 25px;
            text-decoration: none;
            color: #fff;
            img{width: 55px;background: transparent;}
            h1{font-size: 4ch;}
            }
        }
        .logo:hover{
           opacity:.6 
        }
        span{
            font-size: 2.1ch;
        }
        .socials{
            display: flex;
            gap: 12px;
            padding: 25px;
            a{
                img{
                    width: 45px;
                    background: #fff;
                    border-radius: 50%;
                    transition: opacity 150ms ease-in-out;
                }
                img:hover{
                    opacity:.6
                }
            }
        }

    }
}

@media screen and (max-width:990px){
    .main-container{
        .container{
            flex-direction: column;
        }
    }
}
@media screen and (max-width:990px){
    .main-container{
        .container{
            .Cp{
                font-size: 1.5ch;
            }
        }
    }
}
</style>