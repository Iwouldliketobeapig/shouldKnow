const {
  NodeJsInputFileSystem,
  CachedInputFileSystem,
  ResolverFactory 
} = require('enhanced-resolve');

// create a resolver
const myResolver = ResolverFactory.createResolver({
  // Typical usage will consume the `NodeJsInputFileSystem` + `CachedInputFileSystem`, which wraps the Node.js `fs` wrapper to add resilience + caching.
  fileSystem: new CachedInputFileSystem(new NodeJsInputFileSystem(), 4000),
  extensions: ['.js', '.json']
  /* any other resolver options here. Options/defaults can be seen below */
});

// resolve a file with the new resolver
const context = {};
const lookupStartPath = '/Users/webpack/some/root/dir';
const request = './path/to-look-up.js';
myResolver.resolve({}, lookupStartPath, request, (err/*Error*/, filepath/*string*/) => {
  // Do something with the path
});