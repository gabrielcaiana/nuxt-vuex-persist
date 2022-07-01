// eslint-disable-next-line import/no-named-as-default
import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    storage: window.sessionStorage,
    key: 'persistedState', // optional
    modules: ['tasks'],
  }).plugin(store)
}
