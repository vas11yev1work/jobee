<template>
    <div class="interview-main-wrap">
        <div class="interview-block">
            <div class="interview-title">
                <h3>{{ $t('interview') }}</h3>
            </div>
            <div class="form">
                <div class="fields">
                    <input :placeholder="this.$t('yourName')" type="text" v-model="name">
                    <input :placeholder="this.$t('phone')" type="text" v-model="phone">
                </div>
                <div class="send-button">
                    <button @click="emitForm">{{ $t('signUp') }}</button>
                </div>
            </div>
        </div>
        <div class="papers" v-if="paper">
            <img src="../assets/img/paper.svg" alt="paper">
            <img src="../assets/img/paper.svg" alt="paper">
            <img src="../assets/img/paper.svg" alt="paper">
            <img src="../assets/img/paper.svg" alt="paper">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            paper: {
                type: Boolean
            }
        },
        data() {
            return {
                name: '',
                phone: '',
            }
        },
        methods: {
            emitForm() {
                if (this.name.trim() && this.phone.trim()) {
                    alert(`${this.name} ${this.phone}`);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/colors";
    @import "../assets/buttons";

    .interview-main-wrap{
        position: relative;
        display: flex;
        justify-content: center;
    }

    .papers{
        img{
            position: absolute;
            z-index: -1;
            &:nth-child(1){
                top: 0;
                left: 0;
                transform: translate(-20px, 0) rotate(-35deg);
            }
            &:nth-child(2){
                top: 0;
                right: 0;
                transform: translate(25px, 5px) rotate(45deg);
            }
            &:nth-child(3){
                bottom: 0;
                left: 0;
                transform: translate(-25px, 0) rotate(-130deg);
            }
            &:nth-child(4){
                bottom: 0;
                right: 0;
                transform: translate(20px, 0) rotate(145deg);
            }
        }
    }

    .interview-block {
        background-color: $white;
        max-width: 483px;
        width: 100%;
        padding: 30px 60px 50px 60px;
        border: 1px solid $main;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        z-index: 1;
        .interview-title {
            margin-bottom: 24px;

            h3 {
                font-size: 24px;
                text-align: center;
            }
        }

        .form {
            .fields {
                input {
                    height: 52px;
                    width: 100%;
                    margin-bottom: 10px;
                    padding: 0 15px;
                    font-size: 16px;
                    &::placeholder {
                        color: $black;
                    }
                    border: none;
                    background-color: $field;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
                margin-bottom: 24px;
            }
        }
    }
    @media (max-width: 1200px) {
        .interview-block{
            padding: 30px 30px 50px 30px;
            max-width: 400px;
        }
    }
    @media (max-width: 992px) {
        .interview-block{
            padding: 30px 15px 50px 15px;
            max-width: 330px;
            .interview-title{
                h3{
                    font-size: 20px;
                }
            }
        }
    }
    @media (max-width: 768px) {
        .interview-block{
            padding: 30px 30px 50px 30px;
            max-width: 400px;
        }
    }
    @media (max-width: 575px) {
        .interview-block{
            padding: 30px 0 50px;
            border: none;
            box-shadow: none;
        }
        .papers{
            display: none;
        }
    }
</style>
