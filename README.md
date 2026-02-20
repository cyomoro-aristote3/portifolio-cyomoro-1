# Cyomoro Portfolio

Welcome to the Cyomoro Portfolio project! This portfolio showcases my skills, projects, and interests as a budding programmer. Below are the details regarding the structure and setup of the project.

## Project Structure

```
cyomoro-portfolio
├── public
│   ├── index.html        # Main entry point of the portfolio website
│   ├── about.html        # Information about me and my background
│   ├── projects.html     # List of my programming projects
│   └── contact.html      # Contact information and form
├── assets
│   ├── css
│   │   └── styles.css    # Styles for the portfolio website
│   ├── js
│   │   └── main.js       # JavaScript functionality for the website
│   └── data
│       └── hobbies.json   # JSON data for my hobbies
├── backend
│   ├── src
│   │   └── com
│   │       └── cyomoro
│   │           └── PortfolioServer.java # Java backend server code
│   └── build.gradle      # Gradle build configuration for the backend
├── README.md             # Documentation for the project
└── .gitignore            # Files and directories to ignore in version control
```

## Features

- **Responsive Design**: The portfolio is designed to be responsive and accessible on various devices.
- **Dynamic Hobbies Section**: Hobbies are loaded dynamically from a JSON file, allowing for easy updates.
- **Contact Form**: A simple contact form for visitors to reach out to me directly.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd cyomoro-portfolio
   ```

3. Open the `public/index.html` file in your web browser to view the portfolio.

4. For the backend, navigate to the `backend` directory and run:
   ```
   ./gradlew build
   ```

5. Start the server to handle form submissions and serve the portfolio.

## How to Contribute

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add. Your contributions are welcome!

## Contact

For any inquiries, please reach out to me at:
- Email: cyomororesponse@gmail.com
- Phone: 0722899814

Thank you for visiting my portfolio!