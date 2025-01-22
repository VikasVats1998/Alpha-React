# Crestron CH5 React Application

This project is a React application designed for Crestron CH5. It serves as a template for building interactive applications using the Crestron platform.

## Project Structure

```
├── node_modules             # Directory for npm packages
├── public
│   └── index.html           # HTML template for the application
├── src
│   ├── assets
│   │   └── images
│   │       └── luca11.jpg   # Example image file
│   ├── components
│   │   ├── App.jsx          # Main React component
│   │   ├── Card.jsx         # Card component
│   │   ├── Dashboard1.jsx   # Dashboard1 component
│   │   ├── SourceControl.jsx# SourceControl component
│   │   └── VolumeControl.jsx# VolumeControl component
│   ├── context
│   │   ├── SourceContext.js # Source context
│   │   └── VolumeContext.js # Volume context
│   ├── styles
│   │   ├── App.css          # CSS styles for the App component
│   │   ├── Dashboard1.css   # CSS styles for the Dashboard1 component
│   │   └── SourceControl.css# CSS styles for the SourceControl component
│   ├── utils
│   │   └── crestronUtils.js # Utility functions for Crestron integration
│   └── index.jsx            # Entry point of the application
├── .gitignore               # Git ignore file
├── package.json             # npm configuration file
├── README.md                # Project documentation
└── webpack.config.js        # Webpack configuration file
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd crestron-react-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```
4. Update the package.json file to include the following scripts
   ```   
  "scripts": {
    "start": "webpack serve --config webpack.config.js",
    "build": "webpack --config webpack.config.js",
    "build:archive": "ch5-cli archive -p basics -d dist -o tsw"
  },
  ```

5. Open the following file: node_modules/@crestron/ch5-crcomlib/package. json and replace the following lines:
   ```
   "types": "build_bundles/umd/@types/index.d.ts"

   with

  "types": "build_bundles/cjs/@types/index.d.ts",
  "main": "build_bundles/cjs/cr-com-lib.js",

   ```

6. Start the development server:
   ```
   npm start
   ```
7. Add files to .gitignore
   ```
   /node_modules
   /dist
   /.cache
   /tsw

   ```
8. Creating TSW file
   ```
   npm run build
   npm run build:archive
   ```

## Building the Application

To build the application for production, run:
```
npm run build
```

This will create an optimized build in the `dist` directory.

## License

This project is licensed under the ISC License.



