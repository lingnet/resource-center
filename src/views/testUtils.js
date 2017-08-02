import Nightmare from 'nightmare'
require('nightmare-upload')(Nightmare)

export const visit = path => {
  const config = {
    // Try changing this to true and run the tests
    // It is pretty cool
    show: false,
    // From the docs: Note that, even though goto normally waits
    // for all the resources on a page to load, a timeout exception
    // is only raised if the DOM itself has not yet loaded.
    gotoTimeout: 4000
  }
  const nightmare = Nightmare(config)
  return nightmare.goto('http://localhost:3000' + path)
}
