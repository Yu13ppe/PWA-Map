import React, {useEffect} from 'react'

function NavBar() {

  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

useEffect(() => {
  window.addEventListener("beforeinstallprompt", (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    event.preventDefault();
    console.log("👍", "beforeinstallprompt", event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container.
    setIsReadyForInstall(true);
  });
}, []);

async function downloadApp() {
  console.log("👍", "butInstall-clicked");
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    console.log("oops, no prompt event guardado en window");
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Log the result
  const result = await promptEvent.userChoice;
  console.log("👍", "userChoice", result);
  // Reset the deferred prompt variable, since
  // prompt() can only be called once.
  window.deferredPrompt = null;
  // Hide the install button.
  setIsReadyForInstall(false);
}

  return (
    <div className='NavBar'>
        <h1 className='Logo'>NavBar</h1>
        <ul className='buttons'>
            <li className='btn home-btn'>Home</li>
            <li className='btn about-btn'>About</li>
            <li className='btn contact-btn'>Contact</li>
            {isReadyForInstall && <li className='btn download-btn' onClick={downloadApp}>Download</li>}
        </ul>
    </div>
  )
}

export {NavBar}