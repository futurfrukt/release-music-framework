(() => {
  const nodes = document.querySelectorAll('.main .media img');
  setInterval(() => {
    nodes.forEach((node) => {
      node.src = node.src.indexOf('_1.png') >= 0
        ? node.src.replace('_1.png', '_2.png')
        : node.src.replace('_2.png', '_1.png');
    });
  }, 1100);
})();