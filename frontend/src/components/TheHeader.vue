<template>
    <header :class="{'open': mobile}">
        <div class="container">
            <div class="header">
                <div class="header-title">
                    <h3>Jobee</h3>
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
                <div class="change-locale">
                    <div class="number-wrap">
                        <img src="../assets/img/phone-icon.svg" alt="icon">
                        <b>+34 602 449 671</b>
                    </div>
                    <button @click="changeLocale('es')" class="change-locale-button" v-if="currentLocale === 'ru'">ES
                    </button>
                    <button @click="changeLocale('ru')" class="change-locale-button" v-if="currentLocale === 'es'">RU
                    </button>
                    <button class="burger mobile" @click="mobile = !mobile">
                        <img src="../assets/img/burger.svg" alt="burger" v-if="!mobile">
                        <img src="../assets/img/close.svg" alt="close" v-else>
                    </button>
                </div>
            </div>
        </div>
        <div class="mobile-header" v-if="mobile">
            <div class="container">
                <div class="mobile-header-wrap">
                    <ul class="menu-list">
                        <li class="menu-item" @click="mobile = !mobile">
                            <a href="#benefits">{{ $t('benefits') }}</a>
                        </li>
                        <li class="menu-item" @click="mobile = !mobile">
                            <a href="#conditions">{{ $t('conditions') }}</a>
                        </li>
                        <li class="menu-item" @click="mobile = !mobile">
                            <a href="#whoCanWork">{{ $t('whoCanWork') }}</a>
                        </li>
                    </ul>
                    <div class="number-wrap">
                        <img src="../assets/img/phone-icon.svg" alt="icon">
                        <b>+34 602 449 671</b>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                currentLocale: this.$i18n.locale,
                mobile: false,
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

    header {
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid $main;
        background-color: $white;
        position: relative;
        z-index: 10;
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .header-title {
                display: flex;
                align-items: center;
                h3 {
                    font-size: 24px;
                    margin-right: 60px;
                }
                .menu-list {
                    display: flex;
                    align-items: center;
                    .menu-item {
                        margin-right: 50px;
                        font-size: 16px;
                        &:last-child {
                            margin-right: 0;
                        }
                        a {
                            color: $black;
                        }
                    }
                }
            }
            .change-locale{
                display: flex;
                align-items: center;
                .number-wrap{
                    display: flex;
                    align-items: center;
                    margin-right: 50px;
                    img{
                        margin-right: 7px;
                    }
                    b{
                        font-size: 16px;
                    }
                }
                .mobile{
                    display: none;
                }
            }
        }
        .mobile-header{
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: $white;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            padding: 0 0 20px 0;
            display: none;
            .mobile-header-wrap{
                .menu-list{
                    margin-bottom: 10px;
                    .menu-item{
                        height: 50px;
                        width: 100%;
                        font-size: 16px;
                        a{
                            display: flex;
                            height: 100%;
                            width: 100%;
                            align-items: center;
                            font-weight: 600;
                            color: $black;
                        }
                    }
                }
                .number-wrap{
                    display: flex;
                    align-items: center;
                    img{
                        margin-right: 7px;
                    }
                    b{
                        font-size: 16px;
                    }
                }
            }
        }
    }
    @media (max-width: 1200px) {
        header{
            .header{
                .header-title{
                    h3{
                        margin-right: 40px;
                    }
                    .menu-list{
                        .menu-item{
                            margin-right: 30px;
                        }
                    }
                }
                .change-locale{
                    .number-wrap{
                        margin-right: 30px;
                    }
                }
            }
        }
    }
    @media (max-width: 992px){
        header{
            &.open{
                border: none;
            }
            .header{
                .header-title{
                    h3{
                        margin-right: 30px;
                    }
                    .menu-list{
                        display: none;
                    }
                }
                .change-locale{
                    .mobile{
                        display: block;
                    }
                }
            }
            .mobile-header{
                display: block;
            }
        }
    }
    @media (max-width: 768px) {
        header{
            .header{
                .change-locale{
                    .number-wrap{
                        display: none;
                    }
                }
            }
        }
    }
</style>
