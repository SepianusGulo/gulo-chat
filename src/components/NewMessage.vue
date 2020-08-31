<template>
  <div class="container chat">
    <div class="row">
      <form @submit.prevent="addMessage">
        <div class="mb-3 row mt-2">
          <label for="new-message" class="text-left mb-3 col-sm-4">New Message (enter new chat)</label>
          <div class="col-sm-8">
            <input
              type="text"
              name="new-message"
              v-model="NewMessage"
              class="form-control"
              placeholder="Silahkan isi chat"
            />
            <p v-if="feedback" class="text-danger">{{ feedback }}</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "NewMessage",
  props: ["name"],

  data() {
    return {
      NewMessage: null,
      feedback: null,
    };
  },
  methods: {
    addMessage() {
      // console.log(this.NewMessage, this.name, Date.now());
      if (this.NewMessage) {
        db.collection("messages")
          .add({
            content: this.NewMessage,
            name: this.name,
            timestamp: Date.now(),
          })
          .catch((err) => {
            console.log(err);
          });
        (this.NewMessage = null), (this.feedback = null);
      } else {
        this.feedback = "Silahkan isi chat terlebih dahulu ya gaes";
      }
    },
  },
};
</script>
