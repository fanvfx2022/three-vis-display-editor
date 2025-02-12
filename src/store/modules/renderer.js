import Vue from "vue";
import {
  RendererDataSupport,
  MODULETYPE,
  CONFIGTYPE,
  generateConfig,
} from "vis-three";

const webGLRenderer = generateConfig(CONFIGTYPE.WEBGLRENDERER, {
  clearColor: "rgba(15, 15, 15, 1)",
  physicallyCorrectLights: true,
  shadowMap: {
    enabled: true,
  },
});

export const rendererDataSupport = new RendererDataSupport([webGLRenderer]);

export const module = {
  namespaced: true,
  state: {
    map: rendererDataSupport.getData(),
    module: MODULETYPE.RENDERER,
    webGLRenderer: rendererDataSupport.getData()[webGLRenderer.vid],
  },
  getters: {
    get(state) {
      return state.map;
    },
    webGLRenderer(state) {
      return state.webGLRenderer;
    },
  },
  mutations: {
    add(state, config) {
      const observeObject = Vue.observable(config);
      state.map[observeObject.vid] = observeObject;
      state.map.__ob__.dep.notify();
    },
    notify(state) {
      state.map.__ob__.dep.notify();
    },
    webGLRenderer(state, vid) {
      state.webGLRenderer = state.map[vid];
    },
  },
  actions: {},
};
