# PSEUDOCODE

## SMAC LIST:
1. Understand the problems
2. Break the issues into smaller parts
3. Consider
    - Atomic design
    - Bootstrap
    - State
    - Axios
4. What is left that is happening that we don't see? Possibilities:
    - zipcode
    - text instead of #
    - have to hit the button not enter?
    - server down?
    - Would these all be shown in the same display box?
5. Psuedocode!

## Brainstorm/Initial Thoughts:

### User Story:
"As an anonymous user, I want to check the weather so that I can be informed..."

### Analyzing the Wireframe Preview:
- overall looks like a card layout?
- has an input field corresponding button
- display information in 'display boxes' only after valid zipcode entered + data is fetched
- a display box could be reused for the multiple displays
- 2nd display box has 3 pieces of information to display instead of 1
- displayed information is populated using javascript
- will need placeholder information until pulled data is displayed

### Questions to Ask While Pseudocoding:

[!NOTE]
Keep the user's experience in mind!
What is the best solution?
Consider defensive programming.

- What do I need to initialize in the beginning?
    - variables
    - function to init?

- How do we use state?
    - what are the best data types for this state?
    - how can I manage this state?

- What if the whole layout is changed to consider a better option for mobile/desktop?

[!NOTE]
Consider **MSCW** - **M**ust have, **S**hould have, **C**ould have, **W**ould have

- If we use an error message to display when a zipcode has been entered incorrectly - is that displayed in the same display box? or as a popup?
    - what is annoying to a user? - popup
    - what other types of errors could occur?
        - server down
        - text entered instead of numbers

- How does the user know where to type?
    - placeholder text/images

- If coding defensively - is there a limit to how many times the button is clicked (called to the api)?
    - then how would you let the user know that?

- Do I need to let the user know that the page is still loading when the api is called?
