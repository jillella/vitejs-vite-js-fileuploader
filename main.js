import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
const fileInput = document.getElementById('fileInput');
const filePreview = document.getElementById('filePreview');

fileInput.addEventListener('change', function () {
  filePreview.innerHTML = '';
  if (fileInput.files.length > 0) {
    filePreview.classList.add('active');
    for (const file of fileInput.files) {
      const fileName = document.createElement('span');
      fileName.textContent = file.name;
      const closeIcon = document.createElement('span');
      closeIcon.textContent = 'x';
      closeIcon.classList.add('close-icon');
      closeIcon.addEventListener('click', function () {
        fileInput.value = '';
        filePreview.classList.remove('active');
      });
      filePreview.appendChild(fileName);
      filePreview.appendChild(closeIcon);
    }
  } else {
    filePreview.classList.remove('active');
  }
});
