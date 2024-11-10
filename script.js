document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Capture form data
    const photo = document.getElementById('photo').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const certification = document.getElementById('certification').value;
   
    
    // Convert each section to a bullet list
    const skills = document.getElementById('skills').value.split('\n').map(item => `<li>${item.trim()}</li>`).join('');
    const hobbies = document.getElementById('hobbies').value.split('\n').map(item => `<li>${item.trim()}</li>`).join('');
    const languages = document.getElementById('languages').value.split('\n').map(item => `<li>${item.trim()}</li>`).join('');
   

    // Create the new window and write the resume content with styling
    const resumeWindow = window.open('', '_blank');
    resumeWindow.document.write(`
        <html>
        <head>
            <title>Your Resume</title>
            <style>
                /* General styling */
                body {
                    font-family: Arial, sans-serif;
                    padding: 30px;
                    color: black;
                    background-color: darkgray; 
                }
                .resume-container {
                    max-width: 600px;
                    margin: auto;
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                }
                
                .resume-photo {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    border: 1px solid #4CAF50;
                    float: right;
                    margin-right: 0;
                    margin-bottom: 25px; /* Add space below the image */
                }
                
                .resume-details p {
                    margin: 8px 0;
                    font-size: 1rem;
                }
                .container {
                    display: flex;
                    max-width: 900px;
                    margin: 0 auto;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    overflow: hidden;
                }

                /* Left column with fixed width */
                .left-column {
                    width: 320px; /* Increase fixed width */
                    background-color: rgba(171, 122, 218, 0.8);
                    padding: 20px;
                }

                /* Right column takes the remaining space */
                .right-column {
                    flex-grow: 1; /* Expands to fill remaining width */
                    background-color: rgba(189, 167, 209, 0.8);
                    padding: 20px;
                }

                /* Partition between the columns */
                .partition {
                    width: 1px;
                    background-color: #ccc;
                }

                /* Styling for name */
                .resume-name {
                    font-size: 29px; /* Increase font size */
                    font-weight: bold;
                    margin-bottom: 20px; /* Add space after name */
                }

                /* Space between sections */
                .resume-section {
                    margin-bottom: 25px; /* Increase space between sections */
                    white-space: pre-wrap; /* Maintain line breaks */
                    font-size: 18px; /* Reduced font size for content */
                }
                
                /* Section title styling to ensure new line and color */
                .section-title {
                    display: block; /* Ensure each title starts a new line */
                    font-weight: bold;
                    text-decoration: underline;
                    text-decoration-color: black; /* Set underline color  */
                    font-size: 23px; /* Larger font size for titles */
                    margin-bottom: 5px;
                }
                    
            </style>
        </head>
        <body>
            <div class="container">
                <div class="left-column">
                    <div class="resume-section"><span class="section-title">Email:</span> ${email}</div>
                    <div class="resume-section"><span class="section-title">Mobile No:</span> ${mobile}</div>
                    <div class="resume-section"><span class="section-title">Address:</span> ${address}</div><hr>
                    <div class="resume-section"><span class="section-title">Skills:</span><ul>${skills}</ul></div><hr>
                    <div class="resume-section"><span class="section-title">Hobbies:</span><ul>${hobbies}</ul></div><hr>
                    <div class="resume-section"><span class="section-title">Languages:</span><ul>${languages}</ul></div>
                </div>
                <div class="partition"></div>
                <div class="right-column">
                    <img src="${photo}" alt="Your Photo" class="resume-photo"><br><br>
                    <div class="resume-name">${name}</div> <!-- Increase font size for name -->
                    <hr>
                    <div class="resume-section"><span class="section-title">Summary:</span><br>${summary}</div>
                    <hr>
                    <div class="resume-section"><span class="section-title">Experience:</span><br>${experience}</div>
                    <hr>
                    <div class="resume-section"><span class="section-title">Education:</span><br>${education}</div>
                    <hr>
                    <div class="resume-section"><span class="section-title">Certifications:</span><ul>${certification}</ul></div>
                </div>
            </div>
        </body>
        </html>
    `);

    resumeWindow.document.close(); // Close document to render content
});
