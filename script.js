
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId + '-section').style.display = 'block';

    // Update active link
    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.classList.remove('active');
    });
    document.querySelector('a[href="#' + sectionId + '"]').classList.add('active');
}


function downloadFile(event) {
    event.preventDefault();  // Prevent the default link behavior
    const link = document.createElement('a');
    link.href = 'files/CV_Ruhan.pdf';  // Path to your PDF file
    link.download = 'CV_Ruhan.pdf';  // The name for the downloaded file
    document.body.appendChild(link);
    link.click();  // Trigger the download
    document.body.removeChild(link);  // Clean up the link element
}