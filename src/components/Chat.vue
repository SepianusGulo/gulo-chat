<template>
  <div class="container chat">
    <div class="row">
      <h2>Codingku Aplikasi Chat</h2>
      <div class="col-md-12 text-center">
        <div class="card p-5">
          <div class="card-body">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb messages">
                <li class="breadcrumb-item active" aria-current="page">
                  <span class="text-teal">Name</span>
                  <span class="text-grey">Messages</span>
                  <span class="text-grey time">Time</span>
                </li>
              </ol>
            </nav>
          </div>
          <div class="card-footef">
            <NewMessage :name="name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from "@/components/NewMessage";

export default {
  name: "Chat",
  props: ["name"],
  component: {
    NewMessage,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.chat h2 {
  font-size: 2.6em;
  margin-top: 20px;
}
.chat span {
  font-size: 1em;
  padding: 10px;
  text-align: center;
}
.chat time {
  display: block;
  font-size: 1.2em;
}
</style>
