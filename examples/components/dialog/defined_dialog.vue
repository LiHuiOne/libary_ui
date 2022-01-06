<template>
    <div class="defined-dialog-wapper" v-show="dialogVisible" @click="handCloseDia">
        <div class="defined-dialog-content" :style="{width}">
            <div class="defined-dialog-header">
                <!-- 没有传name的slot的插槽就会整个替换掉，反之就会显示当前的 -->
                <slot name="title">
                    <div class="defined-dialog-header-title">
                        {{title}}
                    </div>
                </slot>
                <div class="defined-dialog-header-icon" @click.stop="handCloseDia">x</div>
            </div>
            <div class="defined-dialog-body">
                <!-- 默认插槽显示内容 -->
                <slot></slot>
            </div>
            <!-- v-if="$slots.footer" 是否传递footer这个插槽，没传则不显示 -->
            <div class="defined-dialog-footer" v-if="$slots.footer">
                <slot name="footer"></slot>
                <!-- <defined-button>取消</defined-button>
                <defined-button class="sure_btn">确定</defined-button> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'definedDialog',
        props:{
            title:{
                type:String,
                default:'标题'
            },
            width:{
                type:String,
                default:'50%'
            },
            dialogVisible:{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {};
        },

        components: {},

        mounted() {},

        methods: {
            handCloseDia(){
                //sync
                this.$emit('update:dialogVisible',false)
            }
        }
    }
</script>
<style lang='scss' scoped>
.defined-dialog{
    &-wapper{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        z-index: 2005;
        background-color: rgba(0, 0, 0, 0.5);
    }
    &-content{
        position: relative;
        margin-top:15vh !important;
        // width: 50%;
        margin: 0 auto;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
        padding:20px;
    }
    &-header{
        height: 40px;
        display: flex;
        justify-content: space-between;
        justify-items: center;
        align-items: center;
        &-title{
            font-size: 18px;
            color: #303133;
        }
        &-icon{
            font-size: 20px;
            color: #909399;
            cursor: pointer;
        }
    }
    &-footer{
        display: flex;
        justify-content: flex-end;
        :first-child{
            margin-right: 20px;
        }
    }
}
</style>