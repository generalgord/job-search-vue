<template>
  <header class="w-full py-2 text-sm border-b border-solid border-brand-gray-1">
    <div class="w-full bg-white">
      <div class="flex flex-nowrap items-center h-full px-8 mx-auto">
        <a :href="url" class="flex h-full text-xl">{{ company }}</a>

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none space-x-9">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex h-full py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>

        <div class="flex h-full ml-auto space-x-5">
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
    </div>
  </header>
</template>
<script scoped>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: "Amiral Careers",
      url: "https://careers.google.com",
      menuItems: ["Teams", "Locations", "How we hire", "Students", "Jobs"],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
