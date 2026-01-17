module.exports = {
    compress: {
      drop_console: true,  // Remove console logs
    },
    mangle: {
      toplevel: true,      // Mangle top-level variable names
    },
    output: {
      comments: false,     // Remove comments
    },
  };
  