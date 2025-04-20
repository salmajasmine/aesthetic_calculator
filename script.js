function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  }
  
  $(document).ready(function () {
    $("button").click(function () {
      $(this).fadeOut(100).fadeIn(100); // cute click animation
    });
  });
  