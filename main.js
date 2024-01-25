import "./style.css";

let selectedFiles = []; // Array to keep track of selected files

fileInput.addEventListener('change', function () {
  filePreview.innerHTML = '';
  selectedFiles = Array.from(fileInput.files); // Update selectedFiles with the new FileList
  updateFilePreview();
});

function updateFilePreview() {
  filePreview.innerHTML = '';
  if (selectedFiles.length > 0) {
    filePreview.classList.add('active');
    selectedFiles.forEach((file, index) => {
      const fileWrapper = document.createElement('div');
      fileWrapper.classList.add('file-wrapper');
      const fileName = document.createElement('span');
      fileName.textContent = file.name;
      const closeIcon = document.createElement('span');
      closeIcon.textContent = 'x';
      closeIcon.classList.add('close-icon');
      closeIcon.addEventListener('click', function () {
        selectedFiles.splice(index, 1); // Remove the file from selectedFiles
        updateFilePreview(); // Update the file preview
      });
      fileWrapper.appendChild(fileName);
      fileWrapper.appendChild(closeIcon);
      filePreview.appendChild(fileWrapper);
    });
  } else {
    filePreview.classList.remove('active');
  }
}
