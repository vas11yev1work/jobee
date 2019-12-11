<template>
    <footer>
        <div class="container">
            <div class="footer">
                <div class="main-footer">
                    <div class="logo">
                        <h3>Jobee</h3>
                        <div class="number-wrap">
                            <img src="../assets/img/phone-icon.svg" alt="icon">
                            <b><a href="tel:+34937376214" class="zphone">+34 937 376 214</a></b>
                        </div>
                        <h4 class="work-time">9:00 - 13:00</h4>
                    </div>
                    <div class="menus-wrap">
                        <ul class="menu-list">
                            <li class="menu-item">
                                <a href="#benefits">{{ $t('benefits') }}</a>
                            </li>
                            <li class="menu-item">
                                <a href="#conditions">{{ $t('conditions') }}</a>
                            </li>
                            <li class="menu-item">
                                <a href="#whoCanWork">{{ $t('whoCanWork') }}</a>
                            </li>
                        </ul>
                        <ul class="alt-menu">
                            <li class="alt-menu-item">
                                <a href="#">{{ $t('policy') }}</a>
                            </li>
                            <li class="alt-menu-item">
                                <a href="#">{{ $t('rules') }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="change-locale">
                        <button @click="changeLocale('es')" class="change-locale-button" v-if="$i18n.locale === 'ru'">ES
                        </button>
                        <button @click="changeLocale('ru')" class="change-locale-button" v-if="$i18n.locale === 'es'">RU
                        </button>
                    </div>
                </div>
                <div class="alt-footer">
                    <a href="https://www.google.ru/maps/search/C.+RONDA+SANT+PERE+40,+planta+4%C2%B01,+Barcelona+08010./@41.389925,2.17358,17z/data=!3m1!4b1" target="_blank">
                        <img src="../assets/img/map.png" alt="map">
                    </a>
                    <div class="enter">
                        <img src="../assets/img/enter.png" alt="enter">
                        <h3>{{ $t('enter') }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        methods: {
            changeLocale(locale) {
                this.$i18n.locale = locale;
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "../assets/colors";
    @import "../assets/buttons";

    *, *::before, *::after {
        font-family: 'Montserrat', sans-serif;
    }


    footer{
        margin-bottom: 40px;
        .work-time{
            font-size: 16px;
        }
        .footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media (max-width: 768px){
                flex-direction: column;
                align-items: flex-start;
            }
            .main-footer{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                margin-bottom: 20px;
                .menus-wrap{
                    margin-top: 40px;
                    margin-bottom: 20px;
                    display: flex;
                    @media (max-width: 575px) {
                        margin-top: 10px;
                    }
                    @media (max-width: 768px) {
                        margin-top: 10px;
                    }
                    @media (max-width: 992px) {
                        flex-direction: column;
                    }
                    @media (max-width: 768px){
                        flex-direction: initial;
                    }
                    @media (max-width: 575px) {
                        flex-direction: column;
                    }
                    .alt-menu{
                        display: flex;
                        flex-direction: column;
                        .alt-menu-item{
                            @media (max-width: 992px){
                                margin-bottom: 10px !important;
                            }
                            margin-bottom: 20px;
                            &:last-child{
                                margin-right: 0;
                            }
                            font-size: 16px;
                            a{
                                color: $black;
                            }
                        }
                    }
                }
                @media (max-width: 768px) {
                    flex-direction: column;
                    align-items: flex-start;
                    .logo{
                        margin-bottom: 15px;
                        display: flex;
                    }
                    .menu-list{
                        flex-direction: column;
                        align-items: flex-start !important;
                        .menu-item{
                            margin-bottom: 10px;
                            &:last-child{
                                margin-bottom: 0;
                            }
                        }
                    }
                }
                .logo{
                    display: flex;
                    align-items: center;
                    @media (max-width: 992px) {
                        flex-direction: column;
                        align-items: flex-start;
                        h3{
                            margin-bottom: 10px;
                        }
                    }     
                    @media (max-width: 575px) {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        h3{
                            margin-bottom: 10px;
                        }
                    }   
                    @media (max-width: 768px){
                        flex-direction: initial;
                        align-items: center;
                        h3{
                            margin-bottom: 10px;
                        }
                    }                    
                    h3{
                        margin-right: 20px;
                        font-size: 24px;
                    }
                    .number-wrap{
                        display: flex;
                        align-items: center;
                        margin-right: 50px;
                        @media (max-width: 992px) {
                            margin-bottom: 10px;    
                        }
                        img{
                            margin-right: 7px;
                        }
                        b{
                            font-size: 16px;
                            a{
                                color: $black;
                            }
                        }
                    }
                }
                .menu-list {
                    display: flex;
                    flex-direction: column;
                    margin-right: 60px;
                    @media (max-width: 575px) {
                        margin-bottom: 10px;
                    }
                    .menu-item {
                        font-size: 16px;
                        margin-bottom: 20px;
                        @media (max-width: 992px) {
                            margin-bottom: 10px;
                        }
                        &:last-child {
                            margin-right: 0;
                        }

                        a {
                            color: $black;
                        }
                    }
                }
            }
            .alt-footer{
                display: flex;
                align-items: center;
                .enter{
                    transform: translateY(-1px);
                    img{
                        display: flex;
                    }
                    h3{
                        background-color: #FFFFFF;
                        border: 1px solid #000000;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 30px;
                        border-top: none;
                        font-size: 14px;
                    }
                }
                @media (max-width: 1200px) {
                    a{
                        max-width: 390px !important;
                    }
                }
                a{
                    max-width: 450px;
                    margin-right: 10px;
                    display: block;
                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
                @media (max-width: 768px){
                    a{
                        max-width: 100% !important;
                    }
                }
            }
        }
    }
</style>
