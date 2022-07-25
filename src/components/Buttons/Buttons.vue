<template>
  <body>
    <div>
      <Button :color="true"><font-awesome-icon icon="gear" /> Settings</Button>
    </div>
    <div>
      <Button :color="true"
        ><font-awesome-icon icon="share-nodes" /> Share</Button
      >
    </div>
    <div>
      <Button :color="false"
        ><font-awesome-icon icon="comments" /> Comment</Button
      >
    </div>
    <div>
      <Button :color="false"
        ><font-awesome-icon icon="download" /> Download</Button
      >
    </div>
  </body>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: { Button },
};
</script>

<style scoped>
button {
  padding: 15px 20px;
  margin: auto;
}
div {
  margin: 25px;
}
body {
  border: 1px solid;
  margin-left: 800px;
  margin-right: 800px;
}
</style>
