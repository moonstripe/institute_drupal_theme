icde_theme/
├── icde_theme.info.yml # Theme information and dependencies
├── icde_theme.libraries.yml # CSS/JS library definitions
├── icde_theme.theme # Theme hooks and preprocess functions
├── icde_theme.breakpoints.yml # Responsive breakpoint definitions
├── config/
│ ├── install/ # Configuration to be installed with theme
│ └── optional/ # Optional configuration
├── css/
│ ├── base/
│ │ ├── \_variables.scss # SCSS variables
│ │ ├── \_typography.scss # Typography styles
│ │ └── \_base.scss # Base element styles
│ ├── components/
│ │ ├── \_header.scss # Header styles
│ │ ├── \_footer.scss # Footer styles
│ │ ├── \_navigation.scss # Navigation styles
│ │ ├── \_article.scss # Article styles
│ │ └── \_restricted.scss # Restricted content styles
│ ├── layouts/
│ │ ├── \_grid.scss # Grid system
│ │ └── \_regions.scss # Region-specific layouts
│ └── style.scss # Main SCSS file
├── js/
│ ├── components/
│ │ ├── article-enhance.js # Article-specific enhancements
│ │ └── access-control.js # Access control functionality
│ └── global.js # Global JavaScript functions
├── images/
│ ├── icons/ # Theme icons
│ └── backgrounds/ # Background images
├── templates/
│ ├── content/
│ │ ├── node--article.html.twig # Article template
│ │ └── node--restricted.html.twig # Restricted content template
│ ├── layout/
│ │ ├── page.html.twig # Main page template
│ │ ├── region--header.html.twig # Header region
│ │ └── region--footer.html.twig # Footer region
│ ├── navigation/
│ │ └── menu--main.html.twig # Main navigation template
│ └── user/
│ └── user--restricted.html.twig # Authorized user template
└── assets/
└── dist/ # Compiled assets (generated)
├── css/ # Compiled CSS
└── js/ # Compiled JavaScript
