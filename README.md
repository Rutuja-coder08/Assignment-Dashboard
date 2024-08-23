# Dashboard

A customizable and dynamic widget management dashboard built using **React** and **Vite**. This project allows users to manage multiple categories of widgets, search across all widgets, and dynamically add or remove widgets from categories. The project also features a modal for adding new widgets, with a user-friendly interface and a blurred background effect when the modal is open.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Navbar**: Includes a breadcrumb navigation on the left and a search bar on the right.
- **Widget Management**: Add, remove, and manage widgets within categories.
- **Category Tabs**: Easily switch between different categories using tabs.
- **Search Functionality**: Search for widgets across all categories.
- **Add Widget Modal**: A modal for adding new widgets with a blur effect on the background.
- **Responsive Design**: The dashboard layout is flexible and adapts to different screen sizes.

## Getting Started

### Prerequisites

- **Node.js** (v14.0.0 or later)
- **npm** (v6.0.0 or later) or **yarn** (v1.22.0 or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/cnapp-dashboard.git
   cd cnapp-dashboard
   ```

2. **Install the dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

3. **Start the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Using yarn:

   ```bash
   yarn dev
   ```

   This will start the development server, and you can view the dashboard in your browser at `http://localhost:3000`.

## Project Structure

```bash
├── public
│   └── index.html         # The main HTML file
├── src
│   ├── components
│   │   ├── Navbar.jsx     # Navbar component
│   │   ├── AddWidgetModal.jsx # Modal component for adding widgets
│   │   └── Dashboard.jsx  # Main dashboard component
│   ├── data
│   │   └── index.js       # Sample data for categories and widgets
│   ├── App.jsx            # Main application file
│   ├── main.jsx           # Vite entry point
│   └── index.css          # Global styles
├── package.json
└── vite.config.js         # Vite configuration
```

## Usage

1. **Navigating the Dashboard**:
   - Use the breadcrumb navigation to return to the home or dashboard sections.
   - Use the search bar to filter widgets across all categories.

2. **Managing Widgets**:
   - Click on the `+ Add Widget` button in any category to open the modal.
   - Add a new widget by entering its name and content, and it will be added to the active category.
   - Remove widgets using the `×` icon in the top right corner of each widget.

3. **Switching Categories**:
   - Use the tabs in the modal to switch between different categories and manage widgets accordingly.

## Customization

- **Adding New Categories**: Modify the `dashboardData` in the `src/data/index.js` file to add new categories and widgets.
- **Styling**: Customize the styles in `src/index.css` or create new CSS modules for more specific components.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you would like to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This **README** template should help you get started with your project documentation on GitHub. Customize the details as needed!
