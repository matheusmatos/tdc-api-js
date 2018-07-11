<img src="assets/logo-tdc-horizontal.svg" height="60">

# The Developers Conference - NodeJS Client API

A simple single-file client to call the TDC Public API.

You can get information about Events, Modalities, Talks, Coordinators and Speakers.

## Postman Collection

Also, there's a public Postman Collection to play with and familiarize with the API endpoints:

https://documenter.getpostman.com/view/3913485/RWMBQVKv

## How to Use this client

To learn how to use this client, see the [example.js](example.js) file.

## Available Methods

### Access Token
`getAccessToken(CLIENT_ID, CLIENT_SECRET)`

### Events Methods
`getEvents`<br/>
`getEvent(eventId)`<br/>
`getEventModalities(eventId)`<br/>
`getEventModality(eventId, modalityId)`<br/>
`getEventCoordinators(eventId)`<br/>
`getEventSpeakers(eventId)`<br/>
`getEventTalks(eventId)`<br/>
`getEventBadge(eventId, barcode)`<br/>

### Modalities Methods
`getModalityCoordinators(eventId, modalityId)`<br/>
`getModalityTalks(eventId, modalityId)`<br/>
`getModalityBreaks(eventId, modalityId)`<br/>

### Modalities Talks Methods
`getModalityTalk(eventId, modalityId, talkId)`<br/>
`getModalityTalkSpeakers(eventId, modalityId, talkId)`<br/>

### Coordinators Methods
`getCoordinators()`<br/>
`getCoordinator(coordinatorId)`<br/>

### Speakers Methods
`getSpeakers()`<br/>
`getSpeaker(speakerId)`<br/>

## License

This project is available under the permissive MIT License. Enjoy it!
