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
    // Partikel aus dem Avatar
    var av     = document.getElementById('s-initial');
    var rect   = av.getBoundingClientRect();
    var cx     = rect.left + rect.width  / 2;
    var cy     = rect.top  + rect.height / 2;
    var colors = ['#00e5a0', '#00ffb3', '#005c41', '#ffffff'];

    for (var i = 0; i < 80; i++) {
      spawnParticle(colors[i % colors.length], cx, cy);
    }

    // Name glitch
    var nameEl = document.getElementById('s-name');
    nameEl.classList.add('glitch');
    setTimeout(function () { nameEl.classList.remove('glitch'); }, 800);

    // Screen flash
    var flash = document.createElement('div');
    flash.style.cssText = 'position:fixed;inset:0;background:rgba(0,229,160,0.07);pointer-events:none;z-index:999;transition:opacity 0.5s ease;';
    document.body.appendChild(flash);
    setTimeout(function () { flash.style.opacity = '0'; }, 60);
    setTimeout(function () { flash.remove(); }, 600);
  }

  function spawnParticle(color, cx, cy) {
    var p        = document.createElement('div');
    var angle    = Math.random() * 360;
    var distance = 100 + Math.random() * 200;
    var size     = 3 + Math.random() * 7;
    var duration = 700 + Math.random() * 700;

    p.style.cssText =
      'position:fixed;width:' + size + 'px;height:' + size + 'px;' +
      'border-radius:50%;background:' + color + ';' +
      'left:' + cx + 'px;top:' + cy + 'px;pointer-events:none;z-index:998;' +
      'transform:translate(-50%,-50%);' +
      'transition:transform ' + duration + 'ms cubic-bezier(.2,1,.3,1), opacity ' + duration + 'ms ease-out;';

    document.body.appendChild(p);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var rad = angle * Math.PI / 180;
        var dx  = Math.cos(rad) * distance;
        var dy  = Math.sin(rad) * distance;
        p.style.transform = 'translate(calc(-50% + ' + dx + 'px), calc(-50% + ' + dy + 'px))';
        p.style.opacity   = '0';
      });
    });

    setTimeout(function () { p.remove(); }, duration + 50);
  }
})();

// Avatar Klick
document.getElementById('s-initial').addEventListener('click', function () {
  var av = this;
  av.classList.remove('popping');
  void av.offsetWidth; // reflow trick damit animation neu startet
  av.classList.add('popping');
  setTimeout(function () { av.classList.remove('popping'); }, 400);
});

// Twitch Live Badge
(function () {

  fetch('https://decapi.me/twitch/uptime/' + CONFIG.twitchUser)
    .then(function (r) { return r.text(); })
    .then(function (text) {
      var isLive = !text.toLowerCase().includes('offline') && !text.toLowerCase().includes('not live');
      if (!isLive) return;

      var twitchLink = document.querySelector('a[href*="twitch.tv"]');
      if (!twitchLink) return;

      var badge = document.createElement('span');
      badge.textContent = '● LIVE';
      badge.style.cssText =
        'position:absolute;top:-6px;right:-6px;' +
        'background:#e53935;color:#fff;font-size:9px;font-weight:700;' +
        'padding:2px 5px;border-radius:99px;letter-spacing:0.05em;' +
        'border:1.5px solid var(--bg);pointer-events:none;';

      twitchLink.parentElement.style.position = 'relative';
      twitchLink.parentElement.appendChild(badge);
    })
    .catch(function () {});
})();

// Custom Cursor
(function () {
  var cursor = document.getElementById('cursor');
  
  // Transition nur für size, NICHT für position
  cursor.style.transition = 'width 0.15s ease, height 0.15s ease, opacity 0.2s ease';

  document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mouseover', function (e) {
    if (e.target.closest('a, button, [role="button"]')) {
      cursor.style.width  = '28px';
      cursor.style.height = '28px';
    }
  });

  document.addEventListener('mouseout', function (e) {
    if (e.target.closest('a, button, [role="button"]')) {
      cursor.style.width  = '20px';
      cursor.style.height = '20px';
    }
  });

  document.addEventListener('mouseleave', function () { cursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', function () { cursor.style.opacity = '1'; });
})();

// Animated Title + Come Back
(function () {
  var frames   = ['Relaxo', 'R e l a x o', 'relaxo~', '( relaxo )'];
  var idx      = 0;
  var interval = null;

  function startAnimation() {
    interval = setInterval(function () {
      idx = (idx + 1) % frames.length;
      document.title = frames[idx];
    }, 2000);
  }

  function stopAnimation() {
    clearInterval(interval);
    document.title = CONFIG.name;
  }

  startAnimation();

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      stopAnimation();
      document.title = '👋 come back!';
    } else {
      document.title = CONFIG.name;
      startAnimation();
    }
  });
})();

