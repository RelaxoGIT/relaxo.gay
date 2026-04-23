renderHero();
renderSocials();
renderProjects();

(function () {
  var els = document.querySelectorAll('[data-a]');
  els.forEach(function (el, i) {
    el.style.transition = 'opacity .45s ease ' + (i * 0.06) + 's, transform .45s ease ' + (i * 0.06) + 's';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        el.style.opacity   = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  });
})();

// Copy on Click — Discord Handle
document.getElementById('dc-handle').style.cursor = 'pointer';
document.getElementById('dc-handle').addEventListener('click', function () {
  var text = this.textContent.replace('@', '');
  navigator.clipboard.writeText(text);
  var toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(function () { toast.classList.remove('show'); }, 2000);
});

// Mouse Glow
var glow = document.getElementById('mouse-glow');
document.addEventListener('mousemove', function (e) {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});

// Konami Code
(function () {
  var sequence = [38,38,40,40,37,39,37,39,66,65];
  var index = 0;

  document.addEventListener('keydown', function (e) {
    if (e.keyCode === sequence[index]) {
      index++;
      if (index === sequence.length) {
        index = 0;
        triggerEasterEgg();
      }
    } else {
      index = 0;
    }
  });

  function triggerEasterEgg() {
    // Burst aus Partikeln
    var colors = ['#00e5a0', '#005c41', '#ffffff', '#00ffb3'];
    for (var i = 0; i < 60; i++) {
      spawnParticle(colors[Math.floor(Math.random() * colors.length)]);
    }

    // Kurzer Screen-Flash
    var flash = document.createElement('div');
    flash.style.cssText = 'position:fixed;inset:0;background:rgba(0,229,160,0.08);pointer-events:none;z-index:999;transition:opacity 0.6s ease;';
    document.body.appendChild(flash);
    setTimeout(function () { flash.style.opacity = '0'; }, 50);
    setTimeout(function () { flash.remove(); }, 700);

    // Toast
    var toast = document.getElementById('toast');
    toast.textContent = '🎉 du kennst den code!';
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
      toast.textContent = 'Copied!';
    }, 3000);
  }

  function spawnParticle(color) {
    var p = document.createElement('div');
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var angle = Math.random() * 360;
    var distance = 80 + Math.random() * 120;
    var size = 4 + Math.random() * 6;
    var duration = 600 + Math.random() * 600;

    p.style.cssText = 
      'position:fixed;width:' + size + 'px;height:' + size + 'px;' +
      'border-radius:50%;background:' + color + ';' +
      'left:' + x + 'px;top:' + y + 'px;pointer-events:none;z-index:998;' +
      'transition:transform ' + duration + 'ms ease-out, opacity ' + duration + 'ms ease-out;';

    document.body.appendChild(p);

    requestAnimationFrame(function () {
      var rad = angle * Math.PI / 180;
      p.style.transform = 'translate(' + (Math.cos(rad) * distance) + 'px, ' + (Math.sin(rad) * distance) + 'px)';
      p.style.opacity = '0';
    });

    setTimeout(function () { p.remove(); }, duration + 50);
  }
})();