function konamiCode() {
  return new Promise((resolve) => {
    const up = 'ARROWUP';
    const down = 'ARROWDOWN';
    const left = 'ARROWLEFT';
    const right = 'ARROWRIGHT';
    const a = 'A';
    const b = 'B';
    const start = 'ENTER';
    const code = [up, up, down, down, left, right, left, right, b, a, start];
    let user = [];
    const keydown = evt => {
      const idx = user.length;
      const key = evt.key.toUpperCase();
      user.push(key);
      if (user[idx] !== code[idx]) {
        user = [];
        if (key === code[0]) {
          user.push(key);
        }
      } else if (user.length === code.length) {
        resolve();
      }
    };
    window.addEventListener('keydown', keydown);
  });
}
