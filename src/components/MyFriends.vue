<template>
    <b-list-group>            
        <b-list-group-item button class="myItem">                            
            {{firstName}}                                
            <b-button @click="deleteName" class="mybtn" size="sm" variant="outline-danger">Delete</b-button>
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
    .myItem {
        box-shadow: 3px 6px rgb(151, 138, 138);
        margin: 6px;
        background-color: rgb(202, 230, 227);
    }
    .mybtn {
        display: flex;        
    }    
</style>


