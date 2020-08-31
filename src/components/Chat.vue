<template>
  <div class="container chat">
    <div class="row">
      <h2>Codingku Aplikasi Chat</h2>
      <div class="col-md-12 text-center">
        <div class="card">
          <div class="card-body">
            <div class="messages">
              <p v-for="message in messages" :key="message.id">
                <span class="text-teal">{{ message.name }}</span>
                <br />
                <span class="text-grey">{{ message.content }}</span>
                <br />
                <span class="text-grey time">{{ message.timestamp }}</span>
              </p>
            </div>
          </div>
          <div class="card-footer">
            <NewMessage :name="name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from "@/components/NewMessage";
import db from "@/firebase/init";
import moment from "moment";

export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage,
  },
  data() {
    return {
      messages: [],
    };
  },
  created() {
    let ref = db.collection("messages").orderBy("timestamp");
    ref.onSnapshot((snapshot) => {
      // console.log(snapshot.docChanges());
      snapshot.docChanges().forEach((change) => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("llll"),
          });
        }
      });
    });
  },
};
</script>

<style scoped>
.card {
  max-height: 500px;
}
.chat h2 {
  font-size: 2.6em;
  margin-top: 20px;
}
.chat span {
  font-size: 1em;
  padding: 10px;
  text-align: center;
}
.chat .time {
  display: block;
  font-size: 0.5em;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 3px;
}
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
  background: #fff;
}
</style>
