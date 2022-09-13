<template>
  <div width="100%">
    <div class="header d-flex">
      <div class="pt-3 d-flex header-disposition">
        <img src="../assets/logo.png" alt="" class="icon-header" />
        <h3 class="text-white header-disposition">Github Userboard</h3>
      </div>
      <div class="pt-3 div-input-search">
        <input
          type="text"
          name="Search"
          placeholder="Search..."
          v-model="search"
        />" />
      </div>
    </div>
    <div>
      <p class="title">Top Users</p>
    </div>
    <article>
      <ul id="result">
        <li :key="index" v-for="(item, index) in serachUsername">
          <img :src="item.avatar_url" alt="" class="avatar" />
          <p class="username" @click="usernameDetails(index)">
            {{ item.login }}
          </p>
          <a :href="item.html_url">
            <div class="div-text">
              <img src="../assets/link.png" class="link" />
              <p class="github">github</p>
            </div>
          </a>
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      search: "",
    };
  },
  name: "HelloWorld",
  computed: {
    serachUsername() {
      if (this.search === "") {
        return this.users;        
      }
      return this.users.filter((entry) => {
        return entry.login.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get(`https://api.github.com/users?per_page=<USERS_AMOUNT>`)
        .then((response) => {
          this.users = response.data;
        });
    },
    usernameDetails(index) {
      let parameter = this.users[index];
      this.$router.push({
        name: "Username",
        params: { data: parameter },
      });
    },
  },
};
</script>
<style scoped>
.div-input-search {
  width: 78%;
  text-align: end;
}
.icon-header {
  width: 35px;
  height: 35px;
}
.header-disposition {
  padding-left: 20px;
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
  cursor: pointer;
}
.link {
  width: 20px;
  height: fit-content;
}
.github {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 14px;
  color: #54a3ff;
}
.div-text {
  place-content: center;
  display: flex;
  margin-top: 30px;
}
a {
  color: #0d6efd;
  text-decoration: auto;
}
a:hover {
  color: #0d6efd;
  text-decoration: underline;
}
body {
  margin: 0;
  background-color: #444;
  font-size: 16px;
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
