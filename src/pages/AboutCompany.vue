<template>
  <div class="about-company">
    <Banner :img="banner" :text="lang === 'ru' ? 'О компании' : 'About the company'" />
    <About />
    <Objects />
    <Questions />
    <OurPartners />
  </div>
</template>

<script>
import Objects from "../components/Objects.vue";
import Questions from "../components/Questions.vue";
import OurPartners from "../components/OurPartners.vue";
import Banner from "../components/ui/Banner.vue";
import About from "../components/About.vue";
import { mapGetters } from 'vuex';
export default {
  name: "AboutCompany",
  components: { Objects, Questions, OurPartners, Banner, About },
  computed: {
    ...mapGetters({
      lang: "info/getLang",
    })
  },
  data() {
    return {
      banner: require("../assets/img/objects-banner.png"),
    };
  },
};
</script>

<style scoped>
</style>