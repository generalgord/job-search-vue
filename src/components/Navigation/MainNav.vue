<template>
  <header class="w-full text-sm" :class="headerHeightClass">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-xl"
          >Amiral Careers</router-link
        >

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none space-x-9">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="flex items-center justify-center h-full ml-auto space-x-5">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Sign In"
            type="primary"
            data-test="login-button"
            @click="LOGIN_USER()"
          />
        </div>
      </div>

      <subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>
<script scoped>
import { mapMutations, mapState } from "vuex";

import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import Subnav from "@/components/Navigation/Subnav.vue";

import { LOGIN_USER } from "@/store";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/locations" },
        { text: "How we hire", url: "/howwehire" },
        { text: "Students", url: "/students" },
        { text: "Jobs", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.$store.state.isLoggedIn,
        "h-32": this.$store.state.isLoggedIn,
      };
    },
    ...mapState(["isLoggedIn"]),
    // isLoggedIn() {
    //   return this.$store.state.isLoggedIn;
    // },
  },
  methods: {
    // LOGIN_USER() {
    //   this.$store.commit(LOGIN_USER);
    // },
    ...mapMutations([LOGIN_USER]),
  },
};
</script>
