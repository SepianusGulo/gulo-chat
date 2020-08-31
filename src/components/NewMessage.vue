<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form @submit.prevent="addMessage"></form>
        <label for="new-message">New Message (enter new chat)</label>
        <input
          type="text"
          name="new-message"
          v-model="newMessage"
          class="form-control"
          placeholder="Silahkan isi chat"
        />
        <p v-if="feedback" class="text-danger">{{ feedback }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "NewMessage",
  props: "name",

  data() {
    return {
      newMessage: null,
      feedback: null,
    };
  },
  methods: {
    addMessage() {
      // console.log(this.newMessage, this.name, Date.now());
      if (this.newMessage) {
        db.collection("message")
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now(),
          })
          .catch((err) => {
            console.log(err);
          });
        (this.newMessage = null), (this.feedback = null);
      } else {
        this.feedback = "Silahkan isi chat terlebih dahulu ya gaes";
      }
    },
  },
};
</script>
