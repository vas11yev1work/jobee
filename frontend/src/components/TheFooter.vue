<template>
    <footer>
        <div class="container">
            <div class="footer">
                <div class="main-footer">
                    <div class="logo">
                        <h3>Jobee</h3>
<!--                        <div class="number-wrap">-->
<!--                            <img src="../assets/img/phone-icon.svg" alt="icon">-->
<!--                            <b>+34 602 449 671</b>-->
<!--                        </div>-->
                    </div>
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
                </div>
                <div class="alt-footer">
                    <div class="left-part">
<!--                        <div class="number-wrap">-->
<!--                            <img src="../assets/img/phone-icon.svg" alt="icon">-->
<!--                            <b>+34 602 449 671</b>-->
<!--                        </div>-->
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
                        <button @click="changeLocale('es')" class="change-locale-button" v-if="currentLocale === 'ru'">ES
                        </button>
                        <button @click="changeLocale('ru')" class="change-locale-button" v-if="currentLocale === 'es'">RU
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                currentLocale: this.$i18n.locale
            }
        },
        methods: {
            changeLocale(locale) {
                this.$i18n.locale = locale;
                this.currentLocale = locale;
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
        .footer{
            .main-footer{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                @media (max-width: 768px) {
                    flex-direction: column;
                    align-items: flex-start;
                    .logo{
                        margin-bottom: 15px;
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
                    h3{
                        margin-right: 20px;
                        font-size: 24px;
                    }
                    .number-wrap{
                        display: flex;
                        align-items: center;
                        margin-right: 50px;
                        @media (max-width: 992px) {
                            display: none;
                        }
                        @media (max-width: 768px) {
                            display: block;
                        }
                        img{
                            margin-right: 7px;
                        }
                        b{
                            font-size: 16px;
                        }
                    }
                }
                .menu-list {
                    display: flex;
                    align-items: center;
                    .menu-item {
                        margin-right: 60px;
                        font-size: 16px;
                        @media (max-width: 992px) {
                            margin-right: 30px;
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
                justify-content: space-between;
                align-items: center;
                @media (max-width: 768px) {
                    flex-direction: column;
                    align-items: flex-start;
                    .left-part{
                        .alt-menu{
                            flex-direction: column;
                            align-items: flex-start;
                            margin-bottom: 20px;
                            .alt-menu-item{
                                margin-bottom: 10px;
                                &:last-child{
                                    margin-bottom: 0;
                                }
                            }
                        }
                    }
                }
                .left-part{
                    display: flex;
                    align-items: center;
                    .number-wrap{
                        display: flex;
                        align-items: center;
                        margin-right: 30px;
                        display: none;
                        @media (max-width: 992px) {
                            display: block;
                        }
                        @media (max-width: 768px) {
                            display: none;
                        }
                        img{
                            margin-right: 7px;
                        }
                        b{
                            font-size: 16px;
                        }
                    }
                }
                .alt-menu{
                    display: flex;
                    align-items: center;
                    .alt-menu-item{
                        margin-right: 50px;
                        @media (max-width: 992px) {
                            margin-right: 20px;
                        }
                        &:last-child{
                            margin-right: 0;
                        }
                        font-size: 12px;
                        a{
                            color: $black;
                        }
                    }
                }
            }
        }
    }
</style>
