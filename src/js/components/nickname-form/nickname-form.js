/**
 * The nickname-form component module.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.1.0
 */

const template = document.createElement('template')
template.innerHTML = `
<form id="nickname-form">
  <label for="playerName" id="playerLabel">Enter a nickname to start the quiz:</label><br>
  <input type="text" id="playerName" name="playerName" required><br>
  <button type="submit" class="btn">Let's play!</button>
</form>

<style>
#playerLabel {
  font-size: 1.3rem; 
}

#playerName {
  font-size: 1rem; 
  margin-top: 0.5rem; 
  margin-bottom: 0.5rem; 
}

.btn {
font-size: 1.1rem; 
background-color: #FF66B3; 
color: white; 
padding: 5px; 
margin-top: 0.5rem; 
border-radius: 5px; 
}

.btn:active {
background-color: #42BFDD;  
}
</style>
`

// Define the custom element.
customElements.define('nickname-form',
/** Nickname form class that extends HTMLElement class
 * and creates a custom element.
 */
  class extends HTMLElement {
  /**
   * The nickname form element.
   *
   * @type {HTMLDivElement}
   */
    #nicknameForm

    /**
     * Player nickname
     *
     * @type {string}
     */
    #nickname

    /**
     * Constructor for nicknameForm class which invokes its super class constructor.
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(template.content.cloneNode(true))

      // Get the nickname form element in the shadow root.
      this.#nicknameForm = this.shadowRoot.querySelector('#nickname-form')
    }

    /**
     * Connected callback that is invoked when the element is added to the DOM.
     *
     * @function
     */
    connectedCallback () {
      // Event handler for the nickname form.
      this.#nicknameForm.addEventListener('submit', (event) => {
        this.#nickname = this.shadowRoot.querySelector('#playerName').value
        // I want to prevent the browsers default behaviour here, so that the form doesn't submit (and refresh the webpage).
        event.preventDefault()

        // Dispatch event for quiz-application to listen to and handle.
        this.dispatchEvent(new CustomEvent('nickname', {
          detail: this.#nickname
        }))
      })
    }
  })
