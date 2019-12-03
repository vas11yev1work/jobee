<template>
    <div class="main-wrap">
        <TheHeader></TheHeader>
        <main>
            <section class="main-section">
                <div class="container">
                    <div class="main-section-wrap">
                        <div class="section-text">
                            <h1>{{ $t('mainSectionText') }}</h1>
                        </div>
                        <div class="interview">
                            <Interview></Interview>
                        </div>
                    </div>
                </div>
            </section>
            <section class="main-section-mobile">
                <div class="first-screen">
                    <div class="container">
                        <div class="first-screen-wrap">
                            <h1>{{ $t('mainSectionText') }}</h1>
                        </div>
                    </div>
                </div>
                <div class="second-screen">
                    <div class="container">
                        <div class="second-screen-wrap">
                            <Interview></Interview>
                        </div>
                    </div>
                </div>
            </section>
            <section class="how-to-make">
                <div class="container">
                    <div class="how-to-make-wrap">
                        <div class="htm-title">
                            <h2>{{ $t('htm') }}</h2>
                        </div>
                        <div class="htm-wrap">
                            <div class="htm-image">
                                <img src="./assets/img/man.svg" alt="man">
                            </div>
                            <div class="htm-text">
                                <ul class="steps-list">
                                    <li class="step-item">
                                        <div class="step-index">
                                            <span>1</span>
                                        </div>
                                        <div class="text">
                                            <p>{{ $t('step1') }} <b>{{ $t('step1prefix') }}</b></p>
                                        </div>
                                    </li>
                                    <li class="step-item">
                                        <div class="step-index">
                                            <span>2</span>
                                        </div>
                                        <div class="text">
                                            <p>{{ $t('step2') }} <b>{{ $t('step2prefix') }}</b></p>
                                        </div>
                                    </li>
                                    <li class="step-item">
                                        <div class="step-index">
                                            <span>3</span>
                                        </div>
                                        <div class="text">
                                            <p>{{ $t('step3') }} <b>{{ $t('step3prefix') }}</b></p>
                                        </div>
                                    </li>
                                    <li class="step-item">
                                        <div class="step-index">
                                            <span>4</span>
                                        </div>
                                        <div class="text">
                                            <p>{{ $t('step4') }} <b>{{ $t('step4prefix') }}</b></p>
                                        </div>
                                    </li>
                                    <li class="step-item">
                                        <div class="step-index">
                                            <span>5</span>
                                        </div>
                                        <div class="text">
                                            <p>{{ $t('step5') }} <b>{{ $t('step5prefix') }}</b></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="benefits" class="benefits-section">
                <div class="container">
                    <div class="benefits-wrap">
                        <div class="benefits-title">
                            <h2>{{ $t('benefitsTitle') }}</h2>
                        </div>
                        <div class="benefits-content">
                            <ul class="benefits-list">
                                <li class="benefits-item">
                                    <div class="b-image">
                                        <img alt="time" src="./assets/img/time.svg">
                                    </div>
                                    <div class="b-title">
                                        <h3>{{ $t('scheduleTitle') }}</h3>
                                    </div>
                                    <div class="b-text">
                                        <p>{{ $t('scheduleText') }}</p>
                                    </div>
                                </li>
                                <li class="benefits-item">
                                    <div class="b-image">
                                        <img alt="list" src="./assets/img/list.svg">
                                    </div>
                                    <div class="b-title">
                                        <h3>{{ $t('listTitle') }}</h3>
                                    </div>
                                    <div class="b-text">
                                        <p>{{ $t('listText') }}</p>
                                    </div>
                                </li>
                                <li class="benefits-item">
                                    <div class="b-image">
                                        <img alt="money" src="./assets/img/money.svg">
                                    </div>
                                    <div class="b-title">
                                        <h3>{{ $t('moneyTitle') }}</h3>
                                    </div>
                                    <div class="b-text">
                                        <p>{{ $t('moneyText') }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="conditions" class="what-do-you-need-section">
                <div class="container narrow">
                    <div class="what-do-you-need-wrap">
                        <div class="section-text">
                            <h3>{{ $t('whatDoYouNeed') }}</h3>
                            <p>{{ $t('whatDoYouNeedFirst') }}</p>
                            <p>{{ $t('whatDoYouNeedSecond') }}</p>
                        </div>
                        <div class="section-image">
                            <img src="./assets/img/phone.png" alt="phone">
                        </div>
                    </div>
                </div>
            </section>
            <section id="whoCanWork" class="who-can-work-section">
                <div class="container">
                    <div class="who-can-work-wrap">
                        <div class="section-title">
                            <h3>{{ $t('whoCanWorkTitle') }}</h3>
                        </div>
                        <div class="section-description">
                            <p>{{ $t('whoCanWorkDescription') }}</p>
                        </div>
                        <div class="section-content">
                            <ul class="people-list">
                                <li class="people-item">
                                    <div class="index-circle">
                                        <span>01</span>
                                        <div class="circle"></div>
                                    </div>
                                    <div class="item-title">
                                        <h4>{{ $t('students') }}</h4>
                                    </div>
                                    <div class="item-description">
                                        <p>{{ $t('studentsText') }}</p>
                                    </div>
                                </li>
                                <li class="people-item">
                                    <div class="index-circle">
                                        <span>02</span>
                                        <div class="circle"></div>
                                    </div>
                                    <div class="item-title">
                                        <h4>{{ $t('schoolStudents') }}</h4>
                                    </div>
                                    <div class="item-description">
                                        <p>{{ $t('schoolStudentsText') }}</p>
                                    </div>
                                </li>
                                <li class="people-item">
                                    <div class="index-circle">
                                        <span>03</span>
                                        <div class="circle"></div>
                                    </div>
                                    <div class="item-title">
                                        <h4>{{ $t('retiree') }}</h4>
                                    </div>
                                    <div class="item-description">
                                        <p>{{ $t('retireeText') }}</p>
                                    </div>
                                </li>
                                <li class="people-item">
                                    <div class="index-circle">
                                        <div class="circle"></div>
                                        <span>04</span>
                                    </div>
                                    <div class="item-title">
                                        <h4>{{ $t('allPeople') }}</h4>
                                    </div>
                                    <div class="item-description">
                                        <p>{{ $t('allPeopleText') }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="wall-section">
                <div class="container">
                    <div class="wall-wrap">
                        <Interview :paper="true"></Interview>
                        <div class="wall-image"></div>
                    </div>
                </div>
            </section>
        </main>
        <TheFooter></TheFooter>
    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('./components/TheHeader'),
            Interview: () => import('./components/Interview'),
            TheFooter: () => import('./components/TheFooter'),
        },
        data() {
            return {
                currentLocale: 'ru',
                formSent: false,
            }
        },
        mounted() {
            setTimeout(() => {
                this.$gtag.event('Без отказов', {
                    'event_category': 'Без отказов',
                    'event_label': 'Сеанс без отказов'
                })
            }, 15000)
        }
    }
</script>

<style lang="scss">
    @import "./assets/colors";

    body {
        background-color: $bg;
        color: $black;
        h1::selection,
        h2::selection,
        h3::selection,
        h4::selection,
        span::selection,
        p::selection,
        b::selection,
        button::selection,
        img::selection,
        input::selection,
        a::selection{
            background-color: $yellow;
        }
    }

    .main-wrap {
        main {
            .how-to-make {
                padding: 30px 0;
                background-color: $white;
                .how-to-make-wrap{
                    .htm-title{
                        text-align: center;
                        margin-bottom: 30px;
                        h2{
                            font-size: 36px;
                        }
                    }
                    .htm-wrap{
                        display: flex;
                        align-items: center;
                        .htm-image,
                        .htm-text{
                            width: 50%;
                        }
                        .htm-image{
                            img{
                                width: 90%;
                            }
                        }
                        .htm-text{
                            .steps-list{
                                position: relative;
                                &::before{
                                    content: '';
                                    position: absolute;
                                    height: 90%;
                                    width: 1px;
                                    background-color: $black;
                                    top: 15px;
                                    left: 24px;
                                    z-index: 0;
                                }
                                .step-item{
                                    display: flex;
                                    align-items: center;
                                    margin-bottom: 50px;
                                    &:last-child{
                                        margin-bottom: 0;
                                    }
                                    .step-index{
                                        z-index: 99;
                                        margin-right: 20px;
                                        height: 48px;
                                        width: 48px;
                                        background-color: $yellow;
                                        border-radius: 50%;
                                        border: 1px solid $black;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        font-size: 24px;
                                        min-width: 48px;
                                        font-weight: 700;
                                    }
                                    .text{
                                        p{
                                            font-size: 20px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .main-section {
                background-image: url('./assets/img/main-screen.png');
                height: 520px;
                width: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                border-bottom: 1px solid $main;

                .main-section-wrap {
                    display: flex;
                    justify-content: space-between;

                    .section-text {
                        width: 50%;
                        margin-top: 80px;

                        h1 {
                            font-size: 46px;
                            padding-right: 30px;
                        }
                    }

                    .interview {
                        width: 50%;
                        display: flex;
                        justify-content: flex-end;
                        margin-top: 80px;
                    }
                }
            }
            .main-section-mobile{
                display: none;
            }
            .benefits-section {
                padding: 60px 0;

                .benefits-title {
                    h2 {
                        font-size: 36px;
                        text-align: center;
                    }
                }

                .benefits-content {
                    margin-top: 50px;

                    .benefits-list {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-gap: 40px;
                        @media (max-width: 768px) {
                            grid-template-columns: 1fr;
                            grid-gap: 60px;
                            .benefits-item{
                                max-width: 100% !important;
                            }
                        }
                        .benefits-item {
                            max-width: 320px;
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            text-align: center;
                            .b-image{
                                margin-bottom: 34px;
                            }
                            .b-title {
                                margin-bottom: 10px;

                                h3 {
                                    font-size: 24px;
                                }
                            }
                            .b-text{
                                p{
                                    font-size: 16px;
                                    font-family: 'Montserrat', sans-serif;
                                }
                            }
                        }
                    }
                }
            }
            .what-do-you-need-section{
                background-color: $white;
                padding: 40px 0;
                .what-do-you-need-wrap{
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    @media (max-width: 768px) {
                        flex-direction: column;
                        align-items: flex-start;
                        .section-text{
                            max-width: 100% !important;
                            margin-bottom: 40px;
                        }
                        .section-image{
                            width: 100%;
                            display: flex;
                            justify-content: flex-end;
                            img{
                                width: 420px !important;
                            }
                        }
                    }
                    .section-text{
                        max-width: 390px;
                        width: 100%;
                        padding-right: 30px;
                        h3{
                            font-size: 36px;
                            margin-bottom: 40px;
                        }
                        p{
                            font-size: 16px;
                            margin-bottom: 10px;
                            font-family: 'Montserrat', sans-serif;
                            &:last-child{
                                margin-bottom: 0;
                            }
                        }
                    }
                    .section-image{
                        img{
                            height: auto;
                            width: 400px;
                            @media (max-width: 992px) {
                                width: 320px;
                            }
                            @media (max-width: 575px) {
                                width: 280px !important;
                                height: 213px;
                                object-fit: cover;
                            }
                        }
                    }
                }
            }
            .who-can-work-section{
                padding: 60px 0;
                .who-can-work-wrap{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .section-title{
                        margin-bottom: 20px;
                        h3{
                            text-align: center;
                            font-size: 36px;
                        }
                    }
                    .section-description{
                        margin-bottom: 50px;
                        max-width: 700px;
                        width: 100%;
                        p{
                            text-align: center;
                            font-size: 16px;
                            font-family: 'Montserrat', sans-serif;
                        }
                    }
                    .section-content{
                        .people-list{
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            grid-column-gap: 160px;
                            grid-row-gap: 50px;
                            @media (max-width: 575px) {
                                grid-template-columns: 1fr;
                            }
                            .people-item{
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                .item-title,
                                .item-description{
                                    max-width: 420px;
                                }
                                .item-title{
                                    margin-bottom: 20px;
                                    text-align: center;
                                    h4{
                                        font-size: 20px;
                                    }
                                }
                                .item-description{
                                    text-align: center;
                                    p{
                                        font-size: 16px;
                                        font-family: 'Montserrat', sans-serif;
                                    }
                                }
                                .index-circle{
                                    position: relative;
                                    margin-bottom: 40px;
                                    left: -8px;
                                    span{
                                        font-size: 46px;
                                        z-index: 5;
                                        position: relative;
                                        top: 7px;
                                        left: -10px;
                                    }
                                    .circle{
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        height: 74px;
                                        width: 74px;
                                        border-radius: 50%;
                                        background-color: $yellow;
                                        z-index: -1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .wall-section{
                margin-bottom: 100px;
                .wall-wrap{
                    position: relative;
                    display: flex;
                    justify-content: center;
                    .wall-image{
                        height: 260px;
                        width: 100%;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        left: 0;
                        background-image: url('./assets/img/wall.png');
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center center;
                        z-index: -3;
                    }
                }
            }
        }
    }
    @media (max-width: 1200px){

    }
    @media (max-width: 992px) {
        .main-wrap{
            main{
                .main-section{
                    .main-section-wrap{
                        .section-text{
                            margin-top: 40px;
                            h1{
                                font-size: 40px;
                            }
                        }
                        .interview{
                            margin-top: 40px;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 768px){
        .main-wrap{
            main{
                .main-section{
                    display: none;
                }
                .main-section-mobile{
                    display: block;
                    .first-screen{
                        max-height: 450px;
                        min-height: 450px;
                        height: 100%;
                        background-image: url('./assets/img/main-bg-first.png');
                        width: 100%;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center center;
                        .first-screen-wrap{
                            padding-top: 40px;
                            h1{
                                font-size: 46px;
                            }
                        }
                    }
                    .second-screen{
                        max-height: 450px;
                        min-height: 450px;
                        height: 100%;
                        background-image: url('./assets/img/main-photo.png');
                        width: 100%;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center center;
                        display: flex;
                        align-items: center;
                    }
                }
            }
        }
    }
    @media(max-width: 575px){
        .main-wrap{
            main{
                .main-section-mobile{
                    .first-screen{
                        .first-screen-wrap{
                            h1{
                                font-size: 32px;
                            }
                        }
                    }
                    .second-screen{
                        background-image: none;
                        background-color: $white;
                        min-height: auto;
                        border-top: 1px solid $main;
                        border-bottom: 1px solid $main;
                    }
                }
                .wall-section{
                    background-color: $white;
                    border-top: 1px solid $main;
                    border-bottom: 1px solid $main;
                    margin-bottom: 60px;
                }
            }
        }
    }
</style>
