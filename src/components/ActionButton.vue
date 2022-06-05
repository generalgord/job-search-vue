<template>
  <button :class="{ primary: primary }">
    {{ text }}
  </button>
  <button :class="{ primary: primary }" @click="doubleHeight">
    {{ area }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
      default: "Action",
    },
  },
  data() {
    return {
      primary: true,
      width: 10,
      height: 5,
    };
  },
  computed: {
    area() {
      return this.width * this.height;
    },
  },
  methods: {
    doubleHeight() {
      this.height = this.height * 2;
    },
  },
};
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium rounded;
}

.primary {
  @apply text-white border-0 bg-brand-blue-1 hover:shadow-blue;
}
</style>
