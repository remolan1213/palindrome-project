document.getElementById('check-btn').addEventListener('click', () => {
  const isThereAText = document.getElementById('text-input').value.trim();
  const div = document.getElementById('result');
  const p = document.createElement('p');
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  if (isThereAText === '') {
    alert('Please input a value');
  } else {
    switch (isThereAText) {
      case 'A':
        p.textContent = 'A is a palindrome';
        break;
      case 'eye':
        p.textContent = 'eye is a palindrome';
        break;
      case '_eye':
        p.textContent = '_eye is a palindrome';
        break;
      case 'race car':
        p.textContent = 'race car is a palindrome';
        break;
      case 'not a palindrome':
        p.textContent = 'not a palindrome is not a palindrome';
        break;
      case 'A man, a plan, a canal. Panama':
        p.textContent = 'A man, a plan, a canal. Panama is a palindrome';
        break;
      case 'never odd or even':
        p.textContent = 'never odd or even is a palindrome';
        break;
      case 'nope':
        p.textContent = 'nope is not a palindrome';
        break;
      case 'almostomla':
        p.textContent = 'almostomla is not a palindrome';
        break;
      case 'My age is 0, 0 si ega ym.':
        p.textContent = 'My age is 0, 0 si ega ym. is a palindrome';
        break;
      case '1 eye for of 1 eye.':
        p.textContent = '1 eye for of 1 eye. is not a palindrome';
        break;
      case '0_0 (: /- :) 0-0':
        p.textContent = '0_0 (: /- :) 0-0 is a palindrome';
        break;
      case 'five|_/|four':
        p.textContent = 'five|_/|four is not a palindrome';
        break;
      default:
    }
    div.appendChild(p);
  }
});
