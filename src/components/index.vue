<template>
    <div class="hellow">
        <button @click="out" type="info">退出 </button>
    </div>
</template>
<script>
export default {
    methods:{
         out(){
             this.$router.push("/")
         }
    }
    
}
</script>
<style lang="less" scoped>

</style>>
