import {ADD_EVENTS, APPEND_EVENTS} from '../actions/index'

export const events = [
  {
    "startDate": 1413384452,
    "endDate": 1413394452,
    "isOneDay": false,
    "releases": [],
    "description": "Optional description",
    "name": "Example event",
    "id": "4f47d1fe-f25a-4f9e-a91a-c8fb0668e99g",
    "version": 0,
    "dateCreated": 1421692929323
  },
  {
    "startDate": 1413384452,
    "endDate": 1413394452,
    "isOneDay": false,
    "releases": [],
    "description": "Optional description",
    "name": "Example event 1",
    "id": "4f47d1fe-f25a-4f9e-a91a-c8fb0668e99f",
    "version": 0,
    "dateCreated": 1421692929323
  },
  {
    "startDate": 1413384452,
    "endDate": 1413394452,
    "isOneDay": false,
    "releases": [],
    "description": "Optional description",
    "name": "Example event 2",
    "id": "4f47d1fe-f25a-4f9e-a91a-c8fb0668e99a",
    "version": 0,
    "dateCreated": 1421692929323
  },
  {
    "startDate": 1413384452,
    "endDate": 1413394452,
    "isOneDay": false,
    "releases": [],
    "description": "Optional description",
    "name": "Example event 3",
    "id": "4f47d1fe-f25a-4f9e-a91a-c8fb0668e99b",
    "version": 0,
    "dateCreated": 1421692929323
  },
  {
    "startDate": 1413384452,
    "endDate": 1413394452,
    "isOneDay": false,
    "releases": [],
    "description": "Optional description",
    "name": "Example event 4",
    "id": "4f47d1fe-f25a-4f9e-a91a-c8fb0668e99c",
    "version": 0,
    "dateCreated": 1421692929323
  },
  {
    "startDate": 1413384452,
    "endDate": 1413394452,
    "isOneDay": false,
    "releases": [],
    "description": "Optional description",
    "name": "Example event 5",
    "id": "4f47d1fe-f25a-4f9e-a91a-c8fb0668e99d",
    "version": 0,
    "dateCreated": 1421692929323
  },
]

export default function (state = [], action) {
  switch (action.type) {
    case ADD_EVENTS:
      return action.payload
    case APPEND_EVENTS:
      return [...action.payload, ...state]
    default:
      return state
  }
}
