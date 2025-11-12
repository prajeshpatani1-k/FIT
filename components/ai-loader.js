class AILoader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(255,255,255,0.9);
          border-radius: 8px;
        }
        .loader {
          width: 48px;
          height: 48px;
          border: 5px solid #3B82F6;
          border-bottom-color: transparent;
          border-radius: 50%;
          display: inline-block;
          box-sizing: border-box;
          animation: rotation 1s linear infinite;
        }
        @keyframes rotation {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .text {
          margin-top: 1rem;
          color: #3B82F6;
          font-weight: 500;
        }
      </style>
      <div class="loader-container">
        <div class="loader"></div>
        <div class="text">Analyzing your form...</div>
      </div>
    `;
  }
}
customElements.define('ai-loader', AILoader);