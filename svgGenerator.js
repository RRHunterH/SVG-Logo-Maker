function createSVG(userInput) {
    const { text, textColor, shape, shapeColor } = userInput;
  
    let shapeElement;
  
    switch (shape) {
      case 'circle':
        shapeElement = `<circle cx="50%" cy="50%" r="40%" fill="${shapeColor}" />`;
        break;
      case 'triangle':
        shapeElement = `<polygon points="50%,10% 90%,90% 10%,90%" fill="${shapeColor}" />`;
        break;
      case 'square':
        shapeElement = `<rect width="100%" height="100%" fill="${shapeColor}" />`;
        break;
      default:
        shapeElement = `<rect width="100%" height="100%" fill="${shapeColor}" />`;
    }
  
    const svgTemplate = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeElement}
        <text x="50%" y="50%" font-size="30" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
      </svg>
    `;
  
    return svgTemplate.trim();
  }
  
  module.exports = { createSVG };
  