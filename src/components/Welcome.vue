<template>
  <div class="container">
    <div class="row text-center">
      <div class="col-md-6 mt-5">
        <div class="card p-5">
          <h2 class="text-center">Selamat Datang Diwebsite Chating Codingku</h2>
          <div class="card-body text-center mt-5">
            <form action @submit.prevent="enterChat">
              <div class="mb-3 row">
                <label for="name" class="col-sm-3 col-form-label">Nama</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    v-model="name"
                    placeholder="Silahkan isi nama anda"
                  />
                </div>
                <p v-if="feedback" class="text-danger">{{ feedback }}</p>
              </div>
              <div class="mb-3 row text-center">
                <div class="col-sm-12">
                  <button type="submit" class="btn btn-primary btn-sm text-center">Enter Chat</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img src="../assets/bg3.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback: null,
    };
  },
  methods: {
    enterChat() {
      // console.log(this.name);
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.feedback =
          "Silahkan isi nama terlebih dahulu untuk join chat gaes!";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  text-align: center;
  width: 100%;
  font-size: 2em;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  border: 0px #fff;
  box-shadow: rgb(128, 126, 126);
}
.card h2 {
  color: rgb(250, 78, 10);
}
.card label {
  font-size: 20px;
}
img {
  width: 100%;
}
p {
  font-size: 14px;
}
</style>
