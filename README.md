# VendPal Dashboard

https://vendpal.netlify.app/
A responsive React dashboard application built with TypeScript, React Router, and Tailwind CSS. This project demonstrates modern React development practices, including component composition, mock API integration, and responsive design.
[Visit VendPal](https://vendpal.netlify.app/)

## 🚀 Approach & Architecture

### Component Design

- **Layout-First Approach**: Built a responsive layout system using CSS Grid and Flexbox that adapts seamlessly across different screen sizes.
- **Component Hierarchy**:
  ```
  App
  └── Layout
      ├── Navigation
      ├── Sidebar
      │   └── SidebarContent (User Profile, Teams, Links)
      └── Main Content
          └── Dashboard
              └── Department Cards
  ```
- **Reusable Components**: Created modular components like Button and Cards that maintain consistent styling and behavior throughout the application.

### State Management

- Utilized React's built-in hooks (useState, useEffect) for local state management
- Implemented a mock API service to simulate real-world data fetching
- Added loading and error states for better user experience

### Mock API Integration

- Created a service layer that simulates API endpoints with realistic delays
- Implemented proper TypeScript interfaces for type safety
- Added error handling and loading states
- Structured data models for:
  - User Profile
  - Departments
  - Teams

### Not Found Routes

- Created a component to catch all routes that are not specified

### Styling & Responsiveness

- Used Tailwind CSS for utility-first styling
- Implemented a mobile-first responsive design
- Created a consistent color scheme and spacing system
- Added smooth transitions for interactive elements

### Performance Optimizations

- Lazy loading of routes
- Optimized images
- Minimized re-renders using proper React patterns
- Implemented proper loading states to prevent layout shifts

### TypeScript Integration

- Added comprehensive type definitions
- Implemented interfaces for API responses and data models
- Enhanced code reliability with strict type checking

## 🛠️ Tech Stack

- **React 18**: For building the user interface
- **TypeScript**: For type safety and better developer experience
- **React Router**: For client-side routing
- **Tailwind CSS**: For styling
- **Lucide Icons**: For UI icons

## 🏃‍♂️ Running the Project

1. Clone the repository:

```bash
git clone https://github.com/melissacinta/vendpal.git
```

2. Install dependencies:

```bash
cd vendpal
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── services/           # API and other services
├── utils/              # Utility functions
├── assets/             # Static assets
├── App.tsx             # Main App component
└── main.tsx           # Entry point
└── index.css           # main css file
```

## 🎯 Future Improvements

1. **State Management**:

   - Implement React Query for better data fetching
   - Add global state management if needed (e.g., Zustand)

2. **Performance**:

   - Implement virtual scrolling for large lists
   - Add image optimization
   - Implement proper code splitting

3. **Features**:

   - Add department creation functionality
   - Implement search and filtering
   - Add user settings
   - Implement dark mode

4. **Testing**:
   - Add unit tests with Jest/Vitest
   - Add integration tests
   - Implement E2E tests with Cypress

## 📝 Development Decisions

1. **Why TypeScript?**

   - Improved developer experience
   - Better code maintainability
   - Catch errors early in development

2. **Why Tailwind CSS?**

   - Rapid development
   - Consistent styling
   - Built-in responsive design
   - No need for separate CSS files

3. **Why Mock API?**
   - Simulate real-world conditions
   - Develop without backend dependency
   - Test error handling
   - Demonstrate proper API integration patterns

Feel free to reach out if you have any questions or need clarification on any part of the implementation!
