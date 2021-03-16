<template>                                   
    <b-list-group class="myList">
        <b-list-group-item button @click="deleteName" class="myItem">
            {{firstName}}
        </b-list-group-item>
    </b-list-group>  
</template>

<script>
export default {
   emits: ['delete'],
   props: ['firstName', 'id'],
   methods: {
       deleteName() {
           this.$emit('delete', this.id);
       }
   },   
}
</script>

<style scoped>   
    .myList {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        text-align: center;
    }    
</style>