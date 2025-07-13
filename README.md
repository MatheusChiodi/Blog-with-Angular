# Blog Angular

Blog Angular is a modern, responsive blog platform built with Angular, designed for sharing articles, tutorials, and news about web development, Angular, and best practices. This project was created as a learning experience, with all development and environment management done using Docker for maximum portability and reproducibility.

## Project Purpose

This project was developed as a way to learn and practice Angular, following courses and challenges from the [DIO](https://www.dio.me/) platform. The goal was to explore Angular's component-based architecture, routing, data binding, and integration with modern frontend tools.

## Features

- Responsive and modern UI with Tailwind CSS
- Dynamic cards for articles (big and small cards)
- Floating Back-to-Top and Home buttons
- Custom menu and footer components
- Data-driven content using a TypeScript data file
- Dockerized development and production environments
- Accessibility and keyboard navigation support
- Dark color scheme and gradient backgrounds

## Technologies Used

- **Angular**: Main framework for SPA development
- **TypeScript**: Strongly-typed language for scalable code
- **Tailwind CSS**: Utility-first CSS framework for fast UI building
- **Docker**: Containerization for consistent development and deployment
- **Node.js & NPM**: Runtime and package management
- **HTML5 & CSS3**: Markup and styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12+ recommended)
- [Docker](https://www.docker.com/) (for containerized setup)
- [Angular CLI](https://angular.io/cli) (optional, for local dev)

### Running with Docker

1. Clone this repository:
   ```sh
   git clone https://github.com/MatheusChiodi/Blog-with-Angular.git
   cd Blog-with-Angular
   ```
2. Build and run the container:
   ```sh
   docker-compose up --build
   ```
3. Access the app at [http://localhost:4200](http://localhost:4200)

### Running Locally (without Docker)

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   ng serve
   ```
3. Open [http://localhost:4200](http://localhost:4200) in your browser.

## Project Structure

- `src/app/components/` - Reusable UI components (menu, cards, footer, back-to-top, etc)
- `src/app/pages/` - Main application pages (home, content, etc)
- `src/app/data/data.ts` - Data source for articles and cards
- `Dockerfile` & `docker-compose.yml` - Containerization setup

## Learning Highlights

- Component communication via @Input
- Angular routing and dynamic content loading
- Using TypeScript for data modeling
- Responsive layouts with Tailwind CSS
- Accessibility best practices
- Containerized Angular development

## Credits

Developed by Matheus Chiodi as a study project. Inspired by DIO courses and the Angular community.

## License

This project is for educational purposes. Feel free to fork and adapt!
