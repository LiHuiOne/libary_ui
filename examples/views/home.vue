<template>
    <div>
        <defined-button type="primary">默认按钮</defined-button>
        <defined-button type="success">成功按钮</defined-button>
        <defined-button type="danger">危险按钮</defined-button>
        <defined-button type="primary" @click="showDialog">显示弹框</defined-button>
        <defined-icon class="icon-_xitongcaidan-xitong"></defined-icon>
    </div>
    <div>
        <!-- 可以传递div元素的插槽 -->
        <!-- <defined-dialog>
            <template v-slot:title>
                <h3>插槽</h3>
            </template>
        </defined-dialog> -->

        <!--默认插槽和具名插槽的使用 使用sync，v-model下面是3.x的语法，2.x的语法，:dialogVisible.sync 具体参考官网-->
        <defined-dialog title='弹框标题' width="60%" v-model:dialogVisible="dialogVisible">
            <ul>
                <li>1</li>
            </ul>
            <template v-slot:footer>
                <defined-button @click="dialogVisible=false">取消</defined-button>
                <defined-button type="primary" @click="dialogVisible=false">确定</defined-button>
            </template>
        </defined-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialogVisible:false
            };
        },

        components: {},

        mounted() {},

        methods: {
            showDialog(){
                this.dialogVisible = true
            }
        }
    }
</script>
<style lang='scss' scoped>
</style>
