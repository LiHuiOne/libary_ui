<template>
    <div class="defined_button" :class="[`defined_button-${type}`]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'definedButton',
        props:{
            type:{
                type:String,
                default:'default'
            }
        },
        data() {
            return {};
        },

        components: {},

        mounted() {},

        methods: {
            // clickBtn(){
            //     this.$emit('click')
            // }
        }
    }
</script>
<style lang='scss' scoped>
.defined_button,.defined_button-default{
    display: inline-block;
    width: 100px;
    text-align: center;
    padding:10px;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    cursor: pointer;
}
.defined_button:hover{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
.defined_button-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}
.defined_button-primary:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
}
.defined_button-success{
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover{
        background: #85ce61;
        border-color: #85ce61;
        color: #fff;
        
    }
}
.defined_button-danger{
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover{
        background: #f78989;
        border-color: #f78989;
        color: #fff;
    }
}
</style>