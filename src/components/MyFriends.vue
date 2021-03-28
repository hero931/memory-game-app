<template>
    <div class="list">
        <b-list-group>            
            <b-list-group-item button class="myItem">                            
                {{username}}                                
                <b-button @click="deleteName" class="mybtn" size="sm" variant="outline-danger">Delete</b-button>
            </b-list-group-item>            
        </b-list-group> 
    </div>            
</template>

<script>
export default {
   emits: ['delete'],
   props: ['username', 'id'],
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
        background-color: rgb(202, 230, 227);
    }
    .mybtn {
        display: flex;        
    } 
    .list {
        margin: 1rem;
    }   
</style>


