<template>
  <header class="w-full text-sm" :class="headerHeightClass">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" class="flex h-full items-center text-xl">{{
          company
        }}</a>

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none space-x-9">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
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
            @click="loginUser"
          />
        </div>
      </div>

      <subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>
<script scoped>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import Subnav from "@/components/Subnav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      company: "Amiral Careers",
      url: "https://careers.google.com",
      menuItems: ["Teams", "Locations", "How we hire", "Students", "Jobs"],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
