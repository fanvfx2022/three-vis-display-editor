<template>
  <div id="app">
    <editor-frame v-if="inited"></editor-frame>
    <loading-manager></loading-manager>
    <workbench ref="workbench"></workbench>
  </div>
</template>

<script>
import editorFrame from "./views/editorFrame";
import workbench from "./views/workbench.vue";

const loadingManager = () => import("./views/loadingManager");
export default {
  components: {
    editorFrame,
    loadingManager,
    workbench,
  },
  computed: {
    inited() {
      return this.$store.getters.id;
    },
  },
  methods: {},
  mounted() {
    this.$refs.workbench.visible = true;
  },
};
</script>

<style lang="less" scoped>
#app {
  .boxSetting();
}
</style>
