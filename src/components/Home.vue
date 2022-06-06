<template>
  <div width="100%">
    <div class="header">
      <img src="../assets/logo_principal.png" class="logo" />
      <img src="../assets/return_button.png" class="btn-return" />
    </div>
    <div>
      <select v-model="selectedFilter" class="filter">
        <option disabled value="">Escolha uma opção</option>
        <option>Região</option>
        <option>Capital</option>
        <option>Língua</option>
        <option>País</option>
        <option>Código de ligação</option>
      </select>

      <select
        class="option-select"
        v-if="selectedFilter == 'Região'"
        v-model="regionSelected"
      >
        <option :key="index" v-for="(item, index) in regionsFiltered">
          {{ item }}
        </option>
      </select>

      <select
        class="option-select"
        v-if="selectedFilter == 'Capital'"
        v-model="capitalSelected"
      >
        <option :key="index" v-for="(item, index) in capitalsValue">
          {{ item }}
        </option>
      </select>

      <select
        class="option-select"
        v-if="selectedFilter == 'Língua'"
        v-model="languageSelected"
      >
        <option :key="index" v-for="(item, index) in languagesValue">
          {{ item }}
        </option>
      </select>

      <select
        class="option-select"
        v-if="selectedFilter == 'País'"
        v-model="countriesSelected"
      >
        <option :key="index" v-for="(item, index) in countriesFiltered">
          {{ item }}
        </option>
      </select>

      <select
        class="option-select"
        v-if="selectedFilter == 'Código de ligação'"
        v-model="codeSelected"
      >
        <option :key="index" v-for="(item, index) in codesFiltered">
          {{ item }}
        </option>
      </select>

      <button class="btn-pesquisar" @click="getCountries()">PESQUISAR</button>

      <div class="overflow-auto" style="margin-top: 340px">
        <div>
          <router-link to="/countrie-selected" style="display: flex">
            <div :key="index" v-for="(item, index) in flags">
              <img :src="item" alt="" class="flags" style="padding: 20px" />
            </div>
          </router-link>
        </div>
      </div>

      <jw-pagination
        :items="exampleItems"
        :pageSize="12"
        @changePage="onChangePage"
      ></jw-pagination>
    </div>
  </div>
</template>
<script>
import axios from "axios";

let exampleItems = [...Array(150).keys()].map((i) => ({
  id: i + 1,
  name: "item " + (i + 1),
  flags: this.flags,
}));

export default {
  data() {
    return {
      exampleItems,
      baseUrl: "",
      regionSelected: "",
      capitalSelected: "",
      languageSelected: "",
      countriesSelected: "",
      codeSelected: "",
      flags: [],
      //infos: [],
      regions: [],
      capitals: [],
      languages: [],
      countries: [],
      codes: [],
      regionsFiltered: [],
      capitalsFiltered: [],
      languagesFiltered: [],
      countriesFiltered: [],
      codesFiltered: [],
      flagsFiltered: [],
      languagesValue: [],
      capitalsValue: [],
      selectedFilter: "",
    };
  },
  name: "HelloWorld",
  computed: {},
  mounted() {
    this.getCountries();
  },
  methods: {
    onChangePage(flags) {
      this.flags = flags;
      console.log("AQUI", this.flags);
    },

    getCountries() {
      if (this.selectedFilter == "Região") {
        this.baseUrl = `https://restcountries.com/v3.1/region/${this.regionSelected}`;
      } else if (this.selectedFilter == "Capital") {
        this.baseUrl = `https://restcountries.com/v3.1/capital/${this.capitalSelected}`;
      } else if (this.selectedFilter == "Língua") {
        this.baseUrl = `https://restcountries.com/v3.1/lang/${this.languageSelected}`;
      } else if (this.selectedFilter == "País") {
        this.baseUrl = `https://restcountries.com/v3.1/name/${this.countriesSelected}`;
      } else if (this.selectedFilter == "Código de ligação") {
        this.baseUrl = `https://restcountries.com/v3.1/alpha/${this.codesFiltered}`;
      } else {
        this.baseUrl = `https://restcountries.com/v3.1/all`;
      }

      axios.get(this.baseUrl).then((response) => {
        this.infos = [];
        response.data.forEach((item) => {
          this.infos.push(item);
        });

        if (this.flags.length > 0) {
          this.flags = [];
        }

        this.flags = this.infos.map((value) => value.flags.png);
        this.regions = this.infos.map((value) => value.region);
        this.capitals = this.infos.map((value) => value.capital);
        this.languages = this.infos.map((value) => value.languages);
        this.countries = this.infos.map((value) => value.name.common);
        this.codes = this.infos.map((value) => value.ccn3);

        this.regionsFiltered = [...new Set(this.regions)];
        this.capitalsFiltered = [...new Set(this.capitals)];
        this.languagesFiltered = [...new Set(this.languages)];
        this.countriesFiltered = [...new Set(this.countries)];
        this.codesFiltered = [...new Set(this.codes)];

        this.languagesFiltered.forEach((item) => {
          if (item != undefined && item != null) {
            let value = Object.values(item)[0];
            if (!this.languagesValue.includes(value)) {
              this.languagesValue.push(value);
            }
          }
        });

        this.capitalsFiltered.forEach((item) => {
          if (item != undefined && item != null && item.length > 0) {
            let value = item[0];
            if (!this.capitalsValue.includes(value)) {
              this.capitalsValue.push(value);
            }
          }
        });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.filter {
  position: absolute;
  width: 316px;
  height: 41.01px;
  left: 176px;
  top: 218px;
}
.btn-pesquisar {
  position: absolute;
  width: 156px;
  height: 36px;
  top: 223px;
  left: 988px;
  background: #6d2080;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
}
.option-select {
  position: absolute;
  width: 316px;
  height: 41.01px;
  left: 567px;
  top: 218px;
}
.flags {
  width: 316px;
  height: 181px;
}
</style>
