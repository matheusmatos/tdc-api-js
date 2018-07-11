const axios = require('axios')
const apisauce = require('apisauce')

/**
 * Stackoverflow formatUnicorn implementation
 */
/* eslint-disable no-extend-native */
String.prototype.formatUnicorn = String.prototype.formatUnicorn || function () {
  'use strict'
  var str = this.toString()
  if (arguments.length) {
    var t = typeof arguments[0]
    var key
    var args = (t === 'string' || t === 'number')
      ? Array.prototype.slice.call(arguments)
      : arguments[0]

    for (key in args) {
      str = str.replace(new RegExp('\\{' + key + '\\}', 'gi'), args[key])
    }
  }

  return str
}

const getAccessToken = (clientId, clientSecret) => {
  return axios.request({
    baseURL: 'https://api.globalcode.com.br/v1',
    url: '/oauth2/token',
    method: 'get',
    auth: {
      username: clientId,
      password: clientSecret
    }
  })
}

const create = (accessToken) => {
  const api = apisauce.create({
    baseURL: 'https://api.globalcode.com.br/v1/publico',
    headers: {
      'Cache-Control': 'no-cache',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    },
    timeout: 10000
  })

  /* Events Methods */
  const getEvents = () => {
    let endpoint = '/eventos'
    return api.get(endpoint)
  }
  const getEvent = (eventId) => {
    let endpoint = '/evento/{0}'
    return api.get(endpoint.formatUnicorn(eventId))
  }
  const getEventModalities = (eventId) => {
    let endpoint = '/evento/{0}/modalidades'
    return api.get(endpoint.formatUnicorn(eventId))
  }
  const getEventModality = (eventId, modalityId) => {
    let endpoint = '/evento/{0}/modalidade/{1}'
    return api.get(endpoint.formatUnicorn(eventId, modalityId))
  }
  const getEventCoordinators = (eventId) => {
    let endpoint = '/evento/{0}/coordenadores'
    return api.get(endpoint.formatUnicorn(eventId))
  }
  const getEventSpeakers = (eventId) => {
    let endpoint = '/evento/{0}/palestrantes'
    return api.get(endpoint.formatUnicorn(eventId))
  }
  const getEventTalks = (eventId) => {
    let endpoint = '/evento/{0}/palestras'
    return api.get(endpoint.formatUnicorn(eventId))
  }
  const getEventBadge = (eventId, barcode) => {
    let endpoint = '/evento/{0}/cracha/{1}'
    return api.get(endpoint.formatUnicorn(eventId, barcode))
  }

  /* Modalities Methods */
  const getModalityCoordinators = (eventId, modalityId) => {
    let endpoint = '/evento/{0}/modalidade/{1}/coordenadores'
    return api.get(endpoint.formatUnicorn(eventId, modalityId))
  }
  const getModalityTalks = (eventId, modalityId) => {
    let endpoint = '/evento/{0}/modalidade/{1}/palestras'
    return api.get(endpoint.formatUnicorn(eventId, modalityId))
  }
  const getModalityBreaks = (eventId, modalityId) => {
    let endpoint = '/evento/{0}/modalidade/{1}/intervalos'
    return api.get(endpoint.formatUnicorn(eventId, modalityId))
  }

  /* Modalities Talks Methods */
  const getModalityTalk = (eventId, modalityId, talkId) => {
    let endpoint = '/evento/{0}/modalidade/{1}/palestra/{2}'
    return api.get(endpoint.formatUnicorn(eventId, modalityId, talkId))
  }
  const getModalityTalkSpeakers = (eventId, modalityId, talkId) => {
    let endpoint = '/evento/{0}/modalidade/{1}/palestra/{2}/palestrantes'
    return api.get(endpoint.formatUnicorn(eventId, modalityId, talkId))
  }

  /* Coordinators Methods */
  const getCoordinators = () => {
    let endpoint = '/coordenadores'
    return api.get(endpoint)
  }
  const getCoordinator = (coordinatorId) => {
    let endpoint = '/coordenador/{0}'
    return api.get(endpoint.formatUnicorn(coordinatorId))
  }

  /* Speakers Methods */
  const getSpeakers = () => {
    let endpoint = '/palestrantes'
    return api.get(endpoint)
  }
  const getSpeaker = (speakerId) => {
    let endpoint = '/palestrante/{0}'
    return api.get(endpoint.formatUnicorn(speakerId))
  }

  return {
    getEvents,
    getEvent,
    getEventModalities,
    getEventModality,
    getEventCoordinators,
    getEventSpeakers,
    getEventTalks,
    getEventBadge,
    getModalityCoordinators,
    getModalityTalks,
    getModalityBreaks,
    getModalityTalk,
    getModalityTalkSpeakers,
    getCoordinators,
    getCoordinator,
    getSpeakers,
    getSpeaker
  }
}

module.exports = {
  getAccessToken,
  create
}
