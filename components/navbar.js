class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 50;
        }
        nav {
          background-color: white;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
        }
        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem;
        }
        .logo {
          font-weight: 700;
          font-size: 1.25rem;
          color: #3B82F6;
        }
        .nav-link {
          color: #4B5563;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #3B82F6;
        }
        .mobile-menu-button {
          display: none;
        }
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }
          .nav-links {
            display: none;
          }
        }
      </style>
      <nav>
        <div class="nav-container px-4 flex items-center justify-between">
          <a href="/" class="logo flex items-center space-x-2">
            <i data-feather="activity"></i>
            <span>FitForm</span>
          </a>
          
          <div class="nav-links hidden md:flex items-center space-x-6">
            <a href="/" class="nav-link">Home</a>
            <a href="#" class="nav-link">How It Works</a>
            <a href="#" class="nav-link">Exercises</a>
            <a href="#" class="nav-link">Pricing</a>
            <a href="#" class="bg-primary text-white px-4 py-2 rounded-lg">Get Started</a>
          </div>
          
          <button class="mobile-menu-button p-2 rounded-md text-gray-700">
            <i data-feather="menu"></i>
          </button>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);