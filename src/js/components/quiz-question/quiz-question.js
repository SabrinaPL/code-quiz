/**
 * The quiz question component module.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.1.0
 */

const template = document.createElement('template')
template.innerHTML = `
    <div id="quiz-question">
        <p id="question"><slot></slot></p>
    </div>
    <div id="answer-radio-btn">
    <div class="answers">
        <input type="radio" id="radiobtn1" class="answerRadio" name="answerRadio" value="answer1">
            <label for="radiobtn1" name="answerLabel"></label><br>
    </div>
    <div class="answers">
        <input type="radio" id="radiobtn2" class="answerRadio" name="answerRadio" value="answer2">
            <label for="radiobtn2" name="answerLabel"></label><br>
    </div>
    <div class="answers">
        <input type="radio" id="radiobtn3" class="answerRadio" name="answerRadio" value="answer3">
            <label for="radiobtn3" name="answerLabel"></label><br>
    </div>
    <div class="answers">
        <input type="radio" id="radiobtn4" class="answerRadio" name="answerRadio" value="answer4">
            <label for="radiobtn4" name="answerLabel"></label><br>
    </div>
    <div class="answers">
        <input type="radio" id="radiobtn5" class="answerRadio" name="answerRadio" value="answer5">
            <label for="radiobtn5" name="answerLabel"></label><br>
    </div>
    <div class="answers">
        <input type="radio" id="radiobtn6" class="answerRadio" name="answerRadio" value="answer6">
            <label for="radiobtn6" name="answerLabel"></label><br>
    </div>
    <div class="answers">
        <input type="radio" id="radiobtn7" class="answerRadio" name="answerRadio" value="answer7">
            <label for="radiobtn7" name="answerLabel"></label><br>
    </div>
    <div class="answers">
        <input type="radio" id="radiobtn8" class="answerRadio" name="answerRadio" value="answer8">
            <label for="radiobtn8" name="answerLabel"></label><br>
    </div>
    <div class="answers">
        <input type="radio" id="radiobtn9" class="answerRadio" name="answerRadio" value="answer9">
            <label for="radiobtn9" name="answerLabel"></label><br>
    </div>
    <div class="answers">
        <input type="radio" id="radiobtn10" class="answerRadio" name="answerRadio" value="answer10">
            <label for="radiobtn10" name="answerLabel"></label>
    </div>
    <button type="submit" class="btn" hidden>Submit</button>
    </div>
    
    <div id="answer-text">
        <form id="answer-form">
            <label for="answer-text-input">Answer:</label>
            <input type="text" id="answer-text-input" name="answer-text-input" required>
            <button type="submit" class="btn">Submit</button>
        </form>
    </div>

    <div id="try-again-btn" hidden>
        <button class="btn">Try again</button>
    </div>

    <style>
        #question {
            font-size: 1.3rem; 
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: #5FDDDB; 
        }

        #answer-radio-btn {
            display: block; 
            margin-left: 1.5rem; 
        }

        #answer-radio-btn input {
            margin-top: 0.5rem; 
            margin-bottom: 0.5rem; 
        }

        #answer-radio-btn label {
            font-size: 1.1rem; 
            color: #5FDDDB; 
        }

        #answer-text {
            font-size: 1.2rem; 
            font-weight: bold; 
            margin-top: 0.5rem; 
        }

        .btn {
            font-size: 0.8rem; 
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
customElements.define('quiz-question',
/**
 * Quiz question class that extends HTMLElement class
 * and creates a custom element.
 */
  class extends HTMLElement {
    // Get the answer form element in the shadow root.
    #answerForm

    /**
     * The quiz question element.
     *
     * @type {HTMLDivElement}
     */
    #quizQuestion

    /**
     * Constructor for quiz question class which invokes its super class constructor.
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(template.content.cloneNode(true))

      // Get the quiz question element in the shadow root.
      this.#quizQuestion = this.shadowRoot.querySelector('#quiz-question')
    }

    /**
     * Function to show the answer text input.
     *
     * @function
     */
    showTextAnswer () {
      // Display the answer text input.
      this.shadowRoot.querySelector('#answer-text').removeAttribute('hidden')
    }

    /**
     * Function to hide text answer field.
     *
     * @function
     */
    hideTextAnswer () {
      const answerText = this.shadowRoot.querySelector('#answer-text')

      // Hide the answer-text element.
      answerText.setAttribute('hidden', '')
    }

    /**
     * Function to clear the answer text input.
     *
     * @function
     */
    clearTextAnswer () {
      this.shadowRoot.querySelector('#answer-text-input').value = ''
    }

    /**
     * Function to show the radio buttons.
     *
     * @param {number} numOfRadioBtns to be shown.
     * @function
     * */
    showRadioAnswer (numOfRadioBtns) {
      const submitButton = this.shadowRoot.querySelector('.btn')

      // Display the radio buttons and submit button.
      for (let i = 0; i < numOfRadioBtns; i++) {
        this.shadowRoot.querySelector('#answer-radio-btn').children[i].removeAttribute('hidden')
      }

      submitButton.removeAttribute('hidden')
    }

    /**
     * Function to clear the radio buttons.
     *
     * @function
     */
    clearRadioBtns () {
      const radioBtns = this.shadowRoot.querySelectorAll('.answerRadio')

      // Clear the radio buttons.
      for (let i = 0; i < radioBtns.length; i++) {
        radioBtns[i].checked = false
      }
    }

    /**
     * Function to hide radio buttons.
     *
     * @function
     */
    hideRadioBtns () {
      const answerRadioBtn = this.shadowRoot.querySelector('#answer-radio-btn')
      const submitButton = this.shadowRoot.querySelector('.btn')

      // Hide the radio buttons and submit button.
      for (let i = 0; i < answerRadioBtn.children.length; i++) {
        answerRadioBtn.children[i].setAttribute('hidden', '')
      }
      submitButton.setAttribute('hidden', '')
    }

    /**
     * Show try again button.
     *
     * @function
     */
    showTryAgainBtn () {
      this.shadowRoot.querySelector('#try-again-btn').removeAttribute('hidden')
      this.shadowRoot.querySelector('#show-high-score-btn').removeAttribute('hidden')
    }

    /**
     * Connected callback for quiz question class which is invoked when the element is added to the DOM.
     *
     */
    connectedCallback () {
      // Get the answer form element in the shadow root.
      this.#answerForm = this.shadowRoot.querySelector('#answer-form')

      // Hide the answer-text element.
      this.hideTextAnswer()

      // Hide the answer radio buttons.
      this.hideRadioBtns()

      // Event listener for the answer form.
      this.#answerForm.addEventListener('submit', (event) => {
        const answer = event.target.elements['answer-text-input'].value

        // I want to prevent the browsers default behaviour here, so that the form doesn't submit (and refresh the webpage).
        event.preventDefault()

        // Hide the answer text input.
        this.hideTextAnswer()

        // Dispatch event for quiz-application to listen to and handle.
        this.dispatchEvent(new CustomEvent('answer',
          { detail: answer }))
      })

      // Event listener for the try again button.
      const tryAgainBtn = this.shadowRoot.querySelector('#try-again-btn')
      tryAgainBtn.addEventListener('click', (event) => {
        // Hide try again button.
        tryAgainBtn.setAttribute('hidden', '')

        // Dispatch event for quiz-application to listen to and handle.
        this.dispatchEvent(new CustomEvent('tryAgain', {}))
      })

      // Event listeners for the radio buttons.
      const radioBtns = this.shadowRoot.querySelectorAll('.answerRadio')
      radioBtns.forEach(radioBtn => {
        radioBtn.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            const answer = radioBtn.value

            // Dispatch event for quiz-application to listen to and handle.
            this.dispatchEvent(new CustomEvent('answer',
              { detail: answer }))

            // Hide the radio buttons.
            this.hideRadioBtns()
          }
        })

        const radioBtnSubmit = this.shadowRoot.querySelector('.btn')
        radioBtnSubmit.addEventListener('click', (event) => {
          if (radioBtn.checked) {
            const answer = radioBtn.value

            // Dispatch event for quiz-application to listen to and handle.
            this.dispatchEvent(new CustomEvent('answer',
              { detail: answer }))

            // Hide the radio buttons.
            this.hideRadioBtns()
          }
        })
      })
    }
  })
