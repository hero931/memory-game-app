<template>  
    <div class="box">
      <div class="welcome" v-if="hello" @click="startGame"><wel-come></wel-come></div>      
      <div class="myForm" v-if="personQuest"><new-friend @add-username="addUName"></new-friend></div>         
      <div class="myList" v-if="personQuest"><my-friends              
          v-for="name in names"
          :key="name.id"
          :id="name.id"
          :username="name.username"
          @delete="delName"      
        ></my-friends></div>        
        <div class="quest" v-if="startQuiz" @add-quest=""><my-quest></my-quest></div>
        <div class="person" v-if="personQ"><person-card></person-card></div>                                          
    </div>  
</template>

<script>

export default { 
  data() {
    return {      
      count: '',         
      names: [],
      answers: [],
      startQuiz: false,
      hello: true,
      personQuest: false,
      personQ: false
    }
  },   
  methods: {
    addUName(username) {
      const newUName = {
        id: new Date().toISOString(),
        username: username
      };
      this.names.push(newUName);
    },
    delName(nameId) {
      this.names = this.names.filter(username => username.id !== nameId);
    },
    startGame() {
      this.hello = false;
      this.personQuest = true;
      this.personQ = true;
      this.countStart();            
    },    
    countStart() {
      setTimeout(this.countDown, 1000);
    },
    countDown() {
      this.personQ = false;
      this.startQuiz = true;
      this.personQuest = true;
    },
    getAnswers(age,hair,belt,pocket,smile,shirt) {
      const getAnswer = {
        id: new Date().toISOString(),
        age: age,
        hair: hair,
        belt: belt,
        pocket: pocket,
        smile: smile,
        shirt: shirt
      };
      this.answers.push(getAnswer);
    }
    
  },
  
}
</script>
  
<style>
  * {
  box-sizing: border-box;
  }

  .box {    
    display: grid;
    grid-template-columns: 1.5fr 2fr 2fr 1fr;
    grid-template-rows: repeat(4, 13rem);
    grid-template-areas: "alef bet bet dal"
                       "hey beta gimel dal"
                        "hey beta gimel lam"
                       "hey nun reish kuf";
    grid-auto-flow: dense;
    grid-gap: 1rem;
    color: white;
    text-align: center;
    background-color: rgb(180, 207, 207);
  }
  
  .myForm {
    grid-area: alef;           
  }

  .welcome {
    grid-area: bet/beta;        
  }

  .myList {
    grid-area: hey;      
  }

  .person {
    grid-area: bet/beta;
  }

  .quest {
    grid-area: bet/beta;
  }  
</style>




