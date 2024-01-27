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
      fileName.textContent = `${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
      const closeIcon = document.createElement('span');
      closeIcon.textContent = 'x';
      closeIcon.classList.add('close-icon');
      closeIcon.addEventListener('click', function () {
        selectedFiles.splice(index, 1);
        updateFilePreview();
      });
      fileWrapper.appendChild(fileName);
      fileWrapper.appendChild(closeIcon);
      filePreview.appendChild(fileWrapper);
    });
  } else {
    filePreview.classList.remove('active');
  }
}


// drag and drop file upload feature

let dropArea = document.getElementById('filePreview'); // Assuming 'filePreview' is the drop area

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

// Highlight drop area when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
  dropArea.classList.add('highlight');
}

function unhighlight(e) {
  dropArea.classList.remove('highlight');
}

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;

  handleFiles(files);
}

function handleFiles(files) {
  files = [...files];
  files.forEach(uploadFile);
}

function uploadFile(file) {
  selectedFiles.push(file); // Add the dropped file to selectedFiles
  updateFilePreview(); // Update the file preview
}

