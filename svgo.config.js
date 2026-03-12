export default {
  multipass: true,
  plugins: [
    "removeDimensions",
    "collapseGroups",
    "convertTransform",
    "convertPathData",
    "mergePaths",
    {
      name: "removeAttrs",
      params: {
        attrs: "(fill|stroke|style|class|id)"
      }
    }
  ]
};
