<template>
    <i class="icon iconfont" :class="this.$props.class"></i>
</template>

<script>
    export default {
        name:'definedIcon',
        props:{
            class:{
                type:String,
                default:''
            }
        },
        data() {
            return {};
        },

        components: {},

        mounted() {},

        methods: {}
    }
</script>
<style lang='scss' scoped>
i{
    display: inline-block;
    width: 24px;
    height: 24px;
}
</style>