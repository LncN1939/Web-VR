AFRAME.registerComponent('hoverable', {
    init: function () {
      var el = this.el;
      el.addEventListener('mouseenter', function () {
        el.setAttribute('scale', {x: 1.2, y: 1.2, z: 1.2});
      });
      el.addEventListener('mouseleave', function () {
        el.setAttribute('scale', {x: 1, y: 1, z: 1});
      });
    }
  });