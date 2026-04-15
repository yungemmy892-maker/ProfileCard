 const epochEl = document.getElementById('epoch-time');

  function updateTime() {
    epochEl.textContent = Date.now().toString();
  }

  updateTime();
  setInterval(updateTime, 1000);

  document.getElementById('avatar-file-input').addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.getElementById('user-avatar');
      img.src = e.target.result;
      img.alt = 'User uploaded avatar';
    };
    reader.readAsDataURL(file);
  });