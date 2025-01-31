const sinaslingoMap = {
  'A': '①', 'B': '②', 'C': '③', 'D': '④', 'E': '⑤', 
  'F': '⑥', 'G': '⑦', 'H': '⑧', 'I': '⑨', 'J': '⑩', 
  'K': '⓪', 'L': '♡', 'M': '☆', 'N': '♤', 'O': '♧', 
  'P': '♢', 'Q': '♠', 'R': '♣', 'S': '♦', 'T': '♥', 
  'U': '♨', 'V': '⚓', 'W': '⚔', 'X': '⚖', 'Y': '⚘', 
  'Z': '⚙'
};

const normalMap = Object.fromEntries(
  Object.entries(sinaslingoMap).map(([key, value]) => [value, key])
);

function translateToSinaslingo() {
  let inputText = document.getElementById('inputText').value.toUpperCase();
  let outputText = '';

  for (let i = 0; i < inputText.length; i++) {
    let char = inputText[i];
    outputText += sinaslingoMap[char] || char;
  }

  document.getElementById('outputText').textContent = outputText;
}

function translateToNormal() {
  let inputText = document.getElementById('inputText').value;
  let outputText = '';

  for (let i = 0; i < inputText.length; i++) {
    let char = inputText[i];
    outputText += normalMap[char] || char;
  }

  document.getElementById('outputText').textContent = outputText;
}
