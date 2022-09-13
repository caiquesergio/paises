<template>
  <div>
    <div class="header">
      <div class="pt-3 d-flex header-disposition">
        <img src="../assets/logo.png" alt="" />
        <h3 class="text-white header-disposition">Github Userboard</h3>
      </div>
    </div>
    <div class="details">
      <img src="../assets/back.png" alt="" class="icon-return" @click="returnHome"/>
      <article>
        <ul>
          <li>
            <img :src="detailsUsername.avatar_url" alt="" class="avatar" />
            <p class="username">
              {{ detailsUsername.login }}
            </p>
          </li>
        </ul>
      </article>
    </div>
    <div class="p-5">
      <div
        class="div-details"
        :key="index"
        v-for="(item, index) in detailsRepo"
      >
        <div class="container text-center">
          <a :href="item.svn_url" target="_blank" class="text-login">
            {{ item.name }}
          </a>
        </div>
        <div class="container disposition">
          <div class="box">
            <img src="../assets/binoculars.png" alt="" class="icon" />
            {{ item.watchers }}
          </div>
          <div class="box d-flex">
            <img src="../assets/star.png" alt="" class="icon-star" />
            {{ item.stargazers_count }}
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="pt-3 div-footer">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="text-white div-footer pt-3">© All rights reserved, 2022</div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      detailsUsername: [],
      detailsRepo: [],
    };
  },
  name: "Username",
  created() {
    this.detailsUsername = this.$route.params.data;
  },
  mounted() {
    this.getDetailsUser();
  },
  methods: {
    returnHome() {
      this.$router.push({
        path: "/",
      });
    },
    getDetailsUser() {
      axios
        .get(`https://api.github.com/users/${this.detailsUsername.login}/repos`)
        .then((response) => {
          this.detailsRepo = response.data;
        });
    },
  },
};
</script>

<style scoped>
.icon-return {
  margin-top: -120px;
  margin-left: 120px;
  cursor: pointer;
}
.header-disposition {
  padding-left: 20px;
}
.div-footer {
  text-align-last: center;
}
.disposition {
  padding-left: 500px;
}
.box {
  float: left;
  width: 12%;
}
.header {
  width: auto;
  height: 80px;
  left: 0px;
  top: 0px;
  background: #24292f;
  box-shadow: 0px 12px 36px rgba(204, 204, 204, 0.25);
}
.title {
  margin-top: 100px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  text-align: center;
}
.username {
  margin-top: 50px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 23px;
  color: #000000;
}
.details {
  margin-top: 150px;
}
.div-details {
  place-content: space-evenly;
  display: flex;
}
.icon {
  height: fit-content;
}
.icon-star {
  margin-left: 20px;
  margin-right: 15px;
  height: fit-content;
}
.text {
  margin-left: 15px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.text-login {
  color: #000000;
}
.text-login:hover {
  color: #0d6efd;
}
footer {
  height: 120px;
  left: 0px;
  top: 862px;

  background: #24292f;
  box-shadow: 0px -12px 36px rgba(0, 0, 0, 0.25);
}
body {
  margin: 0;
  background-color: #444;
  font-size: 16px;
}
a {
  color: #0d6efd;
  text-decoration: auto;
}
a:hover {
  color: #0d6efd;
  text-decoration: underline;
}
article ul {
  font-size: 0;
  background-color: #fff;
}

article ul li .avatar {
  width: 70%;
  border-radius: 250px;
}

article ul,
article ul li {
  text-align: -webkit-center;
  list-style: none;
  margin: 0;
  padding: 0;
}

article ul li {
  display: inline-block;
  width: 21%;
  box-sizing: border-box;
  text-align: center;
  padding: 15px;
  font-size: 16px;
  vertical-align: top;
}
</style>