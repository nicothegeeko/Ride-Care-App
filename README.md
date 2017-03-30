# Ride-Care-App Overview 

The Ride-Care team is Nico Flicker, Therese Pacete, Yen La, and Tom Miller.

The Ride-Care team has two repositories. Nico Flicker maintained Ride-Care-App, and Tom Miller maintained Ride-Care for the presentation.

The Ride-Care repository for the presentation is at https://github.com/tomcali/Ride-Care.git 

The gh-pages website for the presentation is at

 https://tomcali.github.io/Ride-Care/

 The Ride-Care-App repository, which has the actual application is at https://nicothegeeko.github.io/Ride-Care-App/. 
 
The presentation is complete and runs in stanalone/self-running mode or in manual mode with controls at the bottom left-hand and right-hand bottom of the screen.
 
The app needs additional work. There are two JavaScript programs currently: script.js takes care of user log-in and mapscript.js takes care of the mapping portions of the app. Extensive comments in the mapscript.js code under "Future Work" indicate work that is needed to complete to have a running prototype for the mapping portion of the application. 

A key task to be completed still is the integration of the two portions of the codebase, both the html and js files.

But management user interaction and the sequence of events, with the user logging in first and then being routed to the mapping work, needs to be completed. Currently, we have two separate demonstrations, with index.html working with script.js and with mapindex.html working with mapscript.js. 

There was an initial attempt to integrate the code from index.html and mapindex.html. This seemed to work, providing a new DOM structure as shown in tomindex.html. tomindex.html called on both script.js and mapscript.js It executed the initial log-in portion, but did not move the user/rider to the new map screen after login.

## Techonologies Uses

- Firebase API/database for user verification
- LA Metro API for route information
- Google Maps API for map display
- Cascading style sheets with drop-down lists
- Bootstrap
- JavaScript functions for gathering bus information and drawing maps
- JavaScript for application logic
- JavaScript for user interaction and DOM manipulation
- Application on GitHub (ZenHub Project Management)
- Web-browser-based presentation on GitHub (reveal.js new technology)

## Application Logic

Although not fully implemented, this was the plan for user and app actions:

- Log in to application
- Pick the bus route
- Route corresponds to array of stops
- Pick the stop where you get on the bus
- Pick the destination stop
- Boarding and destination stops define direction of travel
- Identify stop immediately before the destination stop
- Track rider's position
- Sound alarm when rider is close to stop before destination stop