<template>  
    <div class="box">      
      <div class="myForm"><new-friend @add-name="addName"></new-friend></div>         
      <div class="myList"><my-friends
          class="names"      
          v-for="name in names"
          :key="name.id"
          :id="name.id"
          :firstName="name.firstName"
          @delete="delName"      
        ></my-friends></div>         
    </div>  
</template>

<script>
export default {
  data() {
    return {
      names: []
    }
  },
  methods: {
    addName(name) {
      const newName = {
        id: new Date().toISOString(),
        firstName: name
      };
      this.names.push(newName);
    },
    delName(nameId) {
      this.names = this.names.filter(name => name.id !== nameId);
    }    
  },
}
</script>
  
<style>
  .box {    
    display: grid;
    grid-template-columns: 5rem 15rem 15rem 15rem 20rem;
    grid-template-rows: 2rem 10rem 15rem 10rem;
  }
  
  .myForm {
    grid-area: 2/2/3/2;
    border: 1px solid lightgray;
    border-radius: 6px;
    display: flex;
    justify-content: space-around;
    align-items: center;    
  }

  .myList {
    grid-area: 4/2/4/2;    
  }
</style>




