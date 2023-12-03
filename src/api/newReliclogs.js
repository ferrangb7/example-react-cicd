import axios from 'axios'

const apiUrl = 'https://log-api.eu.newrelic.com/log/v1';

export const newReliclogs = async (logMessage) => {

  const level = logMessage.includes('failed') ? "ERROR" : "INFO";

  const logData = {
    "timestamp": Date.now(),
    "message": logMessage,
    "logtype": "Browser-logs",
    "service": "geodiscover",
    "log.level": level,
  }

  // const logData = {
  //     "common": {
  //       "attributes": {       
  //         "logtype": "browserlogs",
  //         "service.name": "geodiscover",
  //       }
  //     },
  //     "logs": [
  //       {
  //         "timestamp": Date.now(),
  //         "attributes": {
  //           "message": logMessage,
  //           "log.level": level,
  //         }
  //       }
  //     ]
  //   };

  try {
    const response = await axios.post(apiUrl, logData, {
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': import.meta.env.VITE_NEWRELIC_KEY,
      }
    });
    console.log('Log enviado a New Relic:', response.status);
  } catch (err) {
    console.error('Error al enviar log a New Relic:', err);
  }
}
