<template>
    <div class="home bg">
        <div class="top flex">
            <div class="head bg flex">
                <img src="../assets/images/home_bg.png" alt="头像" class="head-img"/>
                <span class="name">小白同学</span>
            </div>
            <div class="set-container flex">
                <img src="../assets/images/set.png" alt="" class="set-img"/>
                <img src="../assets/images/more.png" alt="" class="more-img"/>
            </div>
        </div>
        <div class="bottom flex">
            <div class="left flex">
                <img src="../assets/images/box.png" alt="" class="box-img">
                <img src="../assets/images/class.png" alt="" class="class-img">
            </div>
            <div class="center flex">
                <img src="../assets/images/dragon.png" alt="" class="dragon-img">
                <img src="../assets/images/btn.png" alt="" class="btn-img">
            </div>
            <div class="right">
                <div class="garden">
                    <img alt="" src="../assets/images/home.png" class="garden-img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped lang="scss">
    .bg {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }

    .flex {
        display: flex;
    }
    .home {
        position: relative;
        height: 100vh;
        overflow: hidden;
        background-image: url('../assets/images/home_bg.png');

        .top {
            margin-top: vw(20);
            margin-left: vw(20);
            align-items: center;
            justify-content: space-between;
        }

        .head {
            width: vw(78);
            height: vw(34);
            background-image: url('../assets/images/head_bg.png');
            justify-content: space-between;
            align-items: center;
            overflow: hidden;
        }

        .name {
            color: #5157A5;
            font-size: vw(8);
            height: vw(34);
            line-height: vw(34);
            margin-right: vw(8);
        }

        .head-img {
            width: vw(26);
            height: vw(26);
            border-radius: 50%;
            margin-left: vw(4);
        }

        .set-img, .more-img {
            width: vw(22);
            height: vw(33);
            margin-right: vw(18);
        }

        .more-img {
            margin-right: vw(14);
        }

        .bottom  {
            justify-content: space-between;
            margin-left: vw(20);
            margin-right: vw(19);

            .left,.center {
                flex-direction: column;
            }
        }

        .class-img, .garden-img, .box-img {
            width: vw(42);
            height: vw(43);
        }
        .box-img {
            margin-top: vw(30);
        }
        .garden-img {
            margin-top: vw(32);
        }
        .class-img {
            margin-top: vw(12);
        }
        .dragon-img {
            width: vw(100);
            height: vw(140);
            position: relative;
            z-index: 9;
            margin-top: vw(-25);
            margin-left: vw(20);
        }
        .btn-img {
            width: vw(103);
            height: vw(40);
            position: absolute;
            bottom: vw(20);
        }
    }
</style>
