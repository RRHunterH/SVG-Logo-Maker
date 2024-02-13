function createSVG(userInput) {
    const { text, textColor, shape, shapeColor } = userInput;
  
    let shapeElement;
    let textElement;
  
    switch (shape) {
      case 'circle':
        shapeElement = `<circle cx="50%" cy="50%" r="40%" fill="${shapeColor}" />`;
        textElement = `<text x="50%" y="50%" font-size="20" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>`;
        break;
      case 'triangle':
        shapeElement = `<polygon points="50,10 90,90 10,90" fill="${shapeColor}" />`;
        textElement = `<text x="50%" y="50%" font-size="20" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>`;
        break;
      case 'square':
        shapeElement = `<rect width="100%" height="100%" fill="${shapeColor}" />`;
        textElement = `<text x="50%" y="50%" font-size="20" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>`;
        break;
      default:
        shapeElement = `<rect width="100%" height="100%" fill="${shapeColor}" />`;
    }

    const svgTemplate = `
      <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        ${shapeElement}
        ${textElement || ''} <!-- Add the text element if it exists -->
      </svg>
    `;
  
    return svgTemplate.trim();
  }
  
  module.exports = { createSVG };
  