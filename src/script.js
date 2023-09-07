// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // DOM elements
  const imageDrawer = document.querySelector('.image-drawer');
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');

  // Initialize drawing variables
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  // Set up canvas size
  canvas.width = imageDrawer.clientWidth;
  canvas.height = imageDrawer.clientHeight;

  // Function to start drawing
  function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [
      e.clientX - canvas.offsetLeft,
      e.clientY - canvas.offsetTop,
    ];
  }

  // Function to draw on the canvas
  function draw(e) {
    if (!isDrawing) return;
    context.strokeStyle = '#000'; // Set your desired stroke color
    context.lineWidth = 5; // Set your desired line width
    context.lineCap = 'round';

    context.beginPath();
    context.moveTo(lastX, lastY);
    const [x, y] = [
      e.clientX - canvas.offsetLeft,
      e.clientY - canvas.offsetTop,
    ];
    context.lineTo(x, y);
    context.stroke();

    [lastX, lastY] = [x, y];
  }

  // Function to stop drawing
  function stopDrawing() {
    isDrawing = false;
  }

  // Event listeners for drawing
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);

  // Add any additional functionality for your project here

  // Example: Save the drawn image
  const saveButton = document.querySelector('#save-button');
  saveButton.addEventListener('click', function () {
    const imageData = canvas.toDataURL(); // Get image data as base64
    // Send imageData to your server or perform any desired action
  });
});
