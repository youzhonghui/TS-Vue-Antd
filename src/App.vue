<template>
    <a-locale-provider :locale="zh_CN">
        <div id="app">
            <MessageBox />
        </div>
    </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
// import HelloWorld from './components/HelloWorld.vue';
import MessageBox from './components/MessageBox.vue';

export default {
    name: 'app',
    data() {
        return {
            zh_CN,
        };
    },
    components: {
        MessageBox,
    },
};
</script>

<style>
#app {
    /* font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50; */
    margin-top: 60px;
}
</style>
