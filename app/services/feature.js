import Service from '@ember/service';

export default Service.extend({
  enabledFeatures: ['foo'],

  enabled(feature) {
    return this.get('enabledFeatures').indexOf(feature) >= 0;
  },

  unknownProperty(key) {
    return this.enabled(key);
  }
});
