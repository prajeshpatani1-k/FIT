class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #1F2937;
          color: #F3F4F6;
        }
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 3rem 1rem;
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
        }
        .footer-link {
          color: #9CA3AF;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #FFFFFF;
        }
        .social-icon {
          width: 10px;
          height: 10px;
          color: #9CA3AF;
          transition: color 0.2s;
        }
        .social-icon:hover {
          color: #FFFFFF;
        }
        .copyright {
          border-top: 1px solid #374151;
          margin-top: 3rem;
          padding-top: 2rem;
        }
      </style>
      <footer>
        <div class="footer-container px-4">
          <div class="footer-links">
            <div>
              <h3 class="font-bold text-lg mb-4">Product</h3>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link">Features</a></li>
                <li><a href="#" class="footer-link">Pricing</a></li>
                <li><a href="#" class="footer-link">API</a></li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-4">Company</h3>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link">About</a></li>
                <li><a href="#" class="footer-link">Careers</a></li>
                <li><a href="#" class="footer-link">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold text-lg mb-4">Resources</h3>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link">Blog</a></li>
                <li><a href="#" class="footer-link">Guides</a></li>
                <li><a href="#" class="footer-link">Help Center</a></li>
              </ul>
            </div>
          </div>
          
          <div class="copyright text-center text-gray-500 text-sm">
            <p>© 2023 FitForm Analyzer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);