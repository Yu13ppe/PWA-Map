import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import routes from '../Config/routes'

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
        <h1 className='Logo'>InfoTPM</h1>
        <ul className='buttons'>
        {routes.reverse().map((route) => (
              <li>
                  <Link className='btn' to={route.path}>{route.title}</Link>
              </li>
              ))}
            {isReadyForInstall && <li className='btn download-btn' onClick={downloadApp}>Download</li>}
        </ul>
    </div>
  )
}

export {NavBar}