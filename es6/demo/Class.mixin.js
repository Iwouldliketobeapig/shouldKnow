let copyProperties = (mix, mixin) => {
  for(let key of Reflect.ownKeys(mixin)) {
    if( key !== "name"
    && key !== "prototype"
    && key !== "constructor") {
      let dec = Object.getOwnPropertyDescriptor(mixin, key);
      Object.defineProperties(mix, dec);
    }
  }
}

let mixining = (...mixins) => {
  let mix = {};
  for(let mixin of mixins) {
    copyProperties(mix, mixins);
    copyProperties(mix.prototype, mixins.prototype);
  };
  return mix;
}

module.exprot = { mixining };