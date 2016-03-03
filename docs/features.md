## Open War Engine Features

--------------------
# This is not a spec
--------------------

## Purpose:

- Describe core open war engine features from a high level to be used as a basis for the technical specification.
- Collaborative place where new features can be added / removed as OWE progress continues.
- Based on OWE's Mindmup: https://www.mindmup.com/#m:cg10B_xUMDemqIVHSnFMVWRwU1F0TlE

## Features:

### Core Gameplay features
- Grid: OWE games should be grid based (this makes no assumptions over hex / square based grids, just 
provides the architecture for a game client to create a Grid (The Gameboard)
- Tiles: A Grid is made up of any number of Tiles. A Tile can store terrain, unit and other gameplay information.
As well as give a mechanism for entry and exit from.
- Units: The play pieces of an OWE game. These can have health | hit points | experience | weapons | action points | AI
- Actions: An action type a Unit can make.  This could be Attack / Move / Defensive manouvers etc.
- AI: Some Units may be controlled by AI.  There should be multiple strategies the AI can adopt and must be changeable 
during gameplay.
- In Game Events: Some game moves can cause pre-scripted Events to occur.  These should be definable at the engine level. 
(discuss)
- Game State: Any current game state should be stored and retrievable on client request (Eg. reload should ask for
current state). (see Game State API).
- Turn Manager - game will run turns in sequence and be  

### Database Support
- Engine could provide hooks to store game state on a database (to allow clients to do "cloud" saving)
- Gameplay analytics could also be savable on a db.
- User details can be stored on db together with games in progress, or a record of in game statistics.

### Game State API
- user should be able to query game state.
- they can render the game how they want in their app (e.g. 3d, 2d, w/e)
- user should be able to ask to modify game state (e.g. adding a unit to the world) (via Commands)

### Turn Manager API
- Turns are basically sequences of commands either emitted by OWE to the client or sent by client to OWE
- This will probably be managed by a CommandQueue.

### Web API
- A restful web API should be created, either in Core OWE - or as a Web Module.. which allows comms with OWE from 
a web enabled client 
- Should support simultaneous Multiplayer gubbins.