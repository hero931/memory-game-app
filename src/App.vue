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
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 178px);
    grid-template-areas: "alef bet gimel dal"
                       "hey vav zain het"
                        "hey kaf haf lam"
                       "hey nun reish kuf";
    grid-auto-flow: dense;
    grid-gap: 1rem;
    color: white;
    text-align: center;
    background-color: rgb(162, 199, 199);
  }
  
  .myForm {
    grid-area: alef;
    margin: 1rem;
    border: 1px solid lightgray;
    border-radius: 6px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 5px 10px rgb(151, 138, 138);
    background: rgb(191, 221, 201)       
  }

  .myList {
    grid-area: hey;
    margin: 1rem;       
  }
</style>




