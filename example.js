const tdcApi = require('./apiClient')

const CLIENT_ID = 'YOUR_CLIENT_ID'
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET'

tdcApi.getAccessToken(CLIENT_ID, CLIENT_SECRET).then(response => {
  // First of all, let's get the access token.
  let accessToken = response.data['Access-Token']
  const client = tdcApi.create(accessToken)

  // Now, we can call the api.
  client.getEvent('104').then(response => {
    const tdcSaoPaulo2018 = response.data[0]
    console.log(tdcSaoPaulo2018)
  })

  /**
    All the available methods are self-descritive and also documented at the README file.
    After getting the client instance, you can call any of this methods:

    getEvents()
    getEvent(eventId)
    getEventModalities(eventId)
    getEventModality(eventId, modalityId)
    getEventCoordinators(eventId)
    getEventSpeakers(eventId)
    getEventTalks(eventId)
    getEventBadge(eventId, barcode)
    getModalityCoordinators(eventId, modalityId)
    getModalityTalks(eventId, modalityId)
    getModalityBreaks(eventId, modalityId)
    getModalityTalk(eventId, modalityId, talkId)
    getModalityTalkSpeakers(eventId, modalityId, talkId)
    getCoordinators()
    getCoordinator(coordinatorId)
    getSpeakers()
    getSpeaker(speakerId)
  */
}).catch(err => {
  console.log(err)
})
