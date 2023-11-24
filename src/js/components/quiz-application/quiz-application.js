// Define the custom element.
customElements.define('quiz-application',

  /** Quiz application class that extends HTMLElement class
   * and creates a custom element.
   */
  class extends HTMLElement {
  /**
   * Constructor for quiz application class which invokes its super class constructor.
   */
    constructor () {
      super()
    }

    /**
     * Connected callback for quiz application class which is invoked when the element is added to the DOM.
     */
    connectedCallback () {
      // Event listener for nickname event.
      document.querySelector('nickname-form').addEventListener('nickname', (event) => {
        console.log(event.detail)
      })
    }
  })
