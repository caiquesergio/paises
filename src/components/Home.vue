<template>
  <div width="100%">
    <div class="header">
      <img src="../assets/logo_principal.png" class="logo" />
      <img src="../assets/return_button.png" class="btn-return" />
    </div>
    <div>
      <label class="label-filter">Filtrar por</label>
      <select v-model="selectedFilter" class="filter">
        <option disabled value="">Escolha uma opção</option>
        <option>Região</option>
        <option>Capital</option>
        <option>Língua</option>
        <option>País</option>
        <option>Código de ligação</option>
      </select>

      <label v-if="selectedFilter == 'Região'" class="label-option"
        >Região</label
      >
      <select
        class="option-select"
        v-if="selectedFilter == 'Região'"
        v-model="regionSelected"
      >
        <option :key="index" v-for="(item, index) in regionsFiltered">
          {{ item }}
        </option>
      </select>

      <label v-if="selectedFilter == 'Capital'" class="label-option"
        >Capital</label
      >
      <select
        class="option-select"
        v-if="selectedFilter == 'Capital'"
        v-model="capitalSelected"
      >
        <option :key="index" v-for="(item, index) in capitalsValue">
          {{ item }}
        </option>
      </select>

      <label v-if="selectedFilter == 'Língua'" class="label-option"
        >Língua</label
      >
      <select
        class="option-select"
        v-if="selectedFilter == 'Língua'"
        v-model="languageSelected"
      >
        <option :key="index" v-for="(item, index) in languagesValue">
          {{ item }}
        </option>
      </select>

      <label v-if="selectedFilter == 'País'" class="label-option">País</label>
      <select
        class="option-select"
        v-if="selectedFilter == 'País'"
        v-model="countriesSelected"
      >
        <option :key="index" v-for="(item, index) in countriesFiltered">
          {{ item }}
        </option>
      </select>

      <label v-if="selectedFilter == 'Código de ligação'" class="label-option"
        >Código de ligação</label
      >
      <select
        class="option-select"
        v-if="selectedFilter == 'Código de ligação'"
        v-model="codeSelected"
      >
        <option :key="index" v-for="(item, index) in codesFiltered">
          {{ item }}
        </option>
      </select>

      <button class="btn-pesquisar" @click="get()">PESQUISAR</button>

      <div class="overflow-auto" style="margin-top: 340px">
        <div style="display: flex">
          <div
            :key="index"
            v-for="(item, index) in renderedFlags"
            @click="shareDetailsFlag(index)"
            class="col-md-4"
          >
            <img :src="item" alt="" class="flags" style="padding: 20px" />
          </div>
        </div>
      </div>

      <jw-pagination
        :items="flags"
        :pageSize="12"
        @changePage="onChangePage"
      ></jw-pagination>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      regionSelected: "",
      capitalSelected: "",
      languageSelected: "",
      countriesSelected: "",
      codeSelected: "",
      flags: [],
      renderedFlags: [],
      infos: [],
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
    axios.defaults.baseURL = "https://restcountries.com/v3.1";
    this.get();
  },
  methods: {
    shareDetailsFlag(index) {
      let parameter = this.infos[index];
      this.$router.push({
        name: "DetailsCountries",
        params: { data: parameter },
      });
    },

    onChangePage(flags) {
      this.renderedFlags = flags;
    },
    getRegions() {
      axios.get(`/region/${this.regionSelected}`).then((response) => {
        this.infos = [];
        response.data.forEach((item) => {
          this.infos.push(item);
        });

        if (this.flags.length > 0) {
          this.flags = [];
        }

        this.flags = this.infos.map((value) => value.flags.png);
      });
    },
    getCountries() {
      axios.get(`/name/${this.countriesSelected}`).then((response) => {
        this.infos = [];
        response.data.forEach((item) => {
          this.infos.push(item);
        });

        if (this.flags.length > 0) {
          this.flags = [];
        }

        this.flags = this.infos.map((value) => value.flags.png);
      });
    },
    getLanguages() {
      axios.get(`/lang/${this.languageSelected}`).then((response) => {
        this.infos = [];
        response.data.forEach((item) => {
          this.infos.push(item);
        });

        if (this.flags.length > 0) {
          this.flags = [];
        }

        this.flags = this.infos.map((value) => value.flags.png);
      });
    },
    getCodes() {
      axios.get(`/alpha/${this.codesFiltered}`).then((response) => {
        this.infos = [];
        response.data.forEach((item) => {
          this.infos.push(item);
        });

        if (this.flags.length > 0) {
          this.flags = [];
        }

        this.flags = this.infos.map((value) => value.flags.png);
      });
    },
    getCapitals() {
      axios.get(`/capital/${this.capitalSelected}`).then((response) => {
        this.infos = [];
        response.data.forEach((item) => {
          this.infos.push(item);
        });

        if (this.flags.length > 0) {
          this.flags = [];
        }

        this.flags = this.infos.map((value) => value.flags.png);
      });
    },
    getAll() {
      axios.get(`/all`).then((response) => {
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
    get() {
      if (this.selectedFilter == "Região") {
        this.getRegions();
      } else if (this.selectedFilter == "Capital") {
        this.getCapitals();
      } else if (this.selectedFilter == "Língua") {
        this.getLanguages();
      } else if (this.selectedFilter == "País") {
        this.getCountries();
      } else if (this.selectedFilter == "Código de ligação") {
        this.getCodes();
      } else {
        this.getAll();
      }
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
.label-filter {
  color: #6d2080;
  position: absolute;
  top: 190px;
  left: 175px;
}
.label-option {
  color: #6d2080;
  position: absolute;
  top: 190px;
  left: 565px;
}
.pagination {
  margin-top: 50px;
  place-content: center;
  display: flex;
  padding-left: 0;
  list-style: none;
}
.pagination first {
  display: none;
}
@media (max-width: 900px) {
  .label-option {
    color: #6d2080;
    position: absolute;
    top: 200px;
    left: 26px;
  }
  .label-filter {
    color: #6d2080;
    position: absolute;
    top: 130px;
    left: 25px;
  }
  .filter[data-v-8dc7cce2] {
    position: absolute;
    width: 316px;
    height: 41.01px;
    left: 26px;
    top: 155px;
  }
  .btn-pesquisar[data-v-8dc7cce2] {
    position: absolute;
    width: 156px;
    height: 36px;
    top: 293px;
    left: 218px;
    background: #6d2080;
    color: #ffffff;
    border-radius: 10px;
    cursor: pointer;
  }
  .btn-return[data-v-8dc7cce2] {
    position: absolute;
    left: 61.6%;
    right: 4.47%;
    top: 32%;
    bottom: 32%;
    cursor: pointer;
  }
  .option-select[data-v-8dc7cce2] {
    position: absolute;
    width: 316px;
    height: 41.01px;
    left: 27px;
    top: 225px;
  }
}
</style>
