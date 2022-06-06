<template>
  <div>
    <div class="header">
      <img src="../assets/logo_principal.png" class="logo" />
      <img
        src="../assets/return_button.png"
        class="btn-return"
        @click="returnHome"
      />
    </div>
    <div>
      <div>
        <img :src="flasgSelected.flags.png" alt="" class="flag" />
      </div>
      <div class="infos">
        <p>Nome: {{ flasgSelected.name.common }}</p>
        <p>Capital: {{ flasgSelected.capital[0] }}</p>
        <p>Região: {{ flasgSelected.region }}</p>
        <p>Sub Região: {{ flasgSelected.subregion }}</p>
        <p>População: {{ flasgSelected.population }}</p>
        <p>Línguas: {{ Object.values(flasgSelected.languages)[0] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flasgSelected: [],     
    };
  },
  name: "DetailsCountries",
  created() {
    this.flasgSelected = this.$route.params.data;
  },
  methods: {
    returnHome() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style>
.header {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 85%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
}
.btn-return {
  position: absolute;
  left: 86.6%;
  right: 4.47%;
  top: 32%;
  bottom: 32%;
  cursor: pointer;
}
.logo {
  position: absolute;
  left: 3.07%;
  right: 90.8%;
  top: 19%;
  bottom: 19.34%;
}
.flag {
  position: absolute;
  left: 10%;
  top: 30%;
  bottom: 0%;
  width: 353px;
}
.infos {
  position: absolute;
  left: 39.68%;
  right: 0%;
  top: 30%;
  bottom: 3.1%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #454545;
}
@media (max-width: 900px) {
  .header {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 85%;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  }
  .btn-return {
    position: absolute;
    left: 62.6%;
    right: 4.47%;
    top: 32%;
    bottom: 32%;
    cursor: pointer;
  }
  .flag {
    position: absolute;
    left: 5%;
    top: 20%;
    bottom: 0%;
    width: 353px;
  }
  .infos {
    position: absolute;
    left: 26.68%;
    right: 0%;
    top: 50%;
    bottom: 3.1%;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #454545;
  }
}
</style>