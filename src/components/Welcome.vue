<template>
  <div class="container">
    <div class="row text-center">
      <div class="col-md-12 mt-2">
        <h2 class="text-center">Selamat Datang diwebsite Chating Codingku</h2>
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/bg.png" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/bg3.png" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/bg5.png" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body text-center mt-5">
            <form action @submit.prevent="enterChat">
              <div class="mb-3 row">
                <h3 class="text-center">Silahkan Chat Sekarang</h3>
                <label for="name" class="col-sm-3 col-form-label text-left">Nama</label>
                <div class="col-sm-6">
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
                  <button type="submit" class="btn btn-success btn-sm text-center">
                    <i class="fa fa-paper-plane">&nbsp;&nbsp;Enter Chat</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
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
.container {
  background-image: url("../assets/bg11.png");
  background-size: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  max-height: 500px;
}
.d-block {
  max-width: 100%;
  max-height: 400px;
}
.card {
  text-align: center;

  font-size: 2em;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  border: 0px #fff;
  box-shadow: rgb(128, 126, 126);
  background: transparent;
}
h2 {
  color: rgb(250, 78, 10);
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.card {
  max-height: 200px;
}
.card label {
  font-size: 20px;
}
img {
  width: 100%;
  border-radius: 10px;
}
p {
  font-size: 14px;
}
</style>
