<template>
  <div class="container chat">
    <div class="row">
      <h2>Codingku Aplikasi Chat</h2>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/bg9.png" class="d-block w-100" alt="../assets/bg1.png" />
          </div>
          <div class="carousel-item">
            <img src="../assets/bg7.png" class="d-block w-100" alt="../assets/bg2.png" />
          </div>
          <div class="carousel-item">
            <img src="../assets/bg6.png" class="d-block w-100" alt="../assets/bg4.png" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
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
.d-block {
  width: 100%;
  max-height: 400px;
}
.card {
  max-height: 500px;
}
.chat h2 {
  font-size: 2.6em;
  margin-top: 0px;
}
.chat span {
  font-size: 1em;
  padding: 10px;
  text-align: center;
  color: black;
}
.chat .time {
  display: block;
  font-size: 0.5em;
}
.messages {
  max-height: 300px;
  overflow: auto;
  background: rgb(95, 126, 151);
}
.messages::-webkit-scrollbar {
  width: 3px;
}
.messages::-webkit-scrollbar-track {
  background: rgb(247, 102, 5);
}
.messages::-webkit-scrollbar-thumb {
  background: rgb(192, 191, 189);
}
img {
  width: 100%;
}
</style>
