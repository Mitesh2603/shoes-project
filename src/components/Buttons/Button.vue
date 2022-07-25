<template>
  <button
    :class="[
      color ? 'bg-grey-100 hover:bg-gray-100' : 'bg-teal-500 hover:bg-teal-600',
      'text-gray-800 font-semibold py-2 px-4 rounded shadow',
    ]"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    color: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>
