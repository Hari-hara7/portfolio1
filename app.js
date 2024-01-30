document.addEventListener("DOMContentLoaded", function () {
    const typedText = "Hello, I'm HARI HARA NATH .A Passionate UI/UX Designer, Content Creator, and Developer With a keen eye for design and a love for crafting seamless user experiences, I bring creativity and functionality together.";
    const typingSpeed = 100; // in milliseconds
    const cursorBlinkSpeed = 500; // in milliseconds
  
    const typingElement = document.querySelector('.typing-animation');
    const cursorElement = document.querySelector('.typing-animation::after');
  
    function typeText(index) {
      typingElement.textContent = typedText.substring(0, index);
    }
  
    function startTypingAnimation() {
      for (let i = 0; i <= typedText.length; i++) {
        setTimeout(() => {
          typeText(i);
  
          // Hide cursor when text is complete
          if (i === typedText.length) {
            cursorElement.style.display = 'none';
          } else {
            cursorElement.style.display = 'inline-block';
          }
        }, i * typingSpeed);
      }
    }
  
    // Start typing animation when the page is loaded
    startTypingAnimation();
  
    // Blink cursor
    setInterval(() => {
      cursorElement.style.opacity = (cursorElement.style.opacity === '0') ? '1' : '0';
    }, cursorBlinkSpeed);
  });
  