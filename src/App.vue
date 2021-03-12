<template>
  <div>
    <new-friend @add-name="addName"></new-friend>
   <my-friends
    v-for="name in names"
    :key="name.id"
    :id="name.id"
    :firstName="name.firstName"
   ></my-friends> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: [
        {
          id: 'G',
          firstName: 'Greg'
        },
        {
          id: 'B',
          firstName: 'Beri'
        }
      ]
    }
  },
  methods: {
    addName(name) {
      const newBody = {
        id: new Date().toISOString(),
        firstName: name
      };
      this.names.push(newBody);
    }
  },
}
</script>




