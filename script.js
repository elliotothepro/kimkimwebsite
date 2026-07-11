/* Disable right click and common developer tools shortcuts */
(function() {
  function blockMouse(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  function blockKeys(event) {
    const key = event.key.toUpperCase();
    if (
      key === 'F12' ||
      (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(key)) ||
      (event.ctrlKey && key === 'U') ||
      (event.ctrlKey && key === 'S') ||
      (event.ctrlKey && key === 'A') ||
      (event.ctrlKey && key === 'E')
    ) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }

  document.addEventListener('contextmenu', blockMouse);
  document.addEventListener('mousedown', function(event) {
    if (event.button === 2) {
      blockMouse(event);
    }
  });
  document.addEventListener('keydown', blockKeys);
  window.addEventListener('keydown', blockKeys);
})();
