/**
 * The Web Component accepts attributes (question, options, votes).
🔹 It fires a custom event when a user votes.
🔹 It updates its UI when the votes attribute changes.
 */



class LivePoll extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }); // Encapsulated styles
      this.votes = {};
    }
  
    connectedCallback() {
      this.render();
    }
  
    static get observedAttributes() {
      return ["question", "options", "votes"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "votes") {
        this.votes = JSON.parse(newValue);
        this.render();
      }
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .poll { font-family: Arial, sans-serif; border: 1px solid #ccc; padding: 10px; border-radius: 5px; }
          button { margin: 5px; cursor: pointer; }
        </style>
        <div class="poll">
          <h3>${this.getAttribute("question") || "Vote Now!"}</h3>
          ${JSON.parse(this.getAttribute("options") || "[]")
            .map(
              (option) => `
              <button data-option="${option}">${option} (${this.votes[option] || 0})</button>
            `
            )
            .join("")}
        </div>
      `;
  
      this.shadowRoot.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
          this.dispatchEvent(
            new CustomEvent("vote-cast", {
              detail: { option: button.getAttribute("data-option") },
              bubbles: true,
              composed: true, // Allows React to listen to it
            })
          );
        });
      });
    }
  }
  
  customElements.define("live-poll", LivePoll);
  