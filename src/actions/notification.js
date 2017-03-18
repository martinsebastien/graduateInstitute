import sw from 'serviceworker-webpack-plugin/lib/runtime';

const publicKey = 'BO3ukuH-qu3m8j491mwFm1_MOKxqNm1dr1jIYrXaO2AJBUR0Qd3MY28FxxSHv8fsXsv0PDKHCLmUX2ckv2Xka2A';

function notificationSubscribeProcessing() {
  return {
    type: 'NOTIFICATION_SUBSCRIBE_PROCESSING',
  };
}

function notificationSubscribeFailed(error) {
  return {
    type: 'NOTIFICATION_SUBSCRIBE_FAILED',
    error,
  };
}

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export function checkNotificationAvailability() {
  return ('serviceWorker' in navigator) && {
    type: 'NOTIFICATION_IS_AVAILABLE',
  };
}

export function notificationSubscribe() {
  return async (dispach) => {
    await dispach(notificationSubscribeProcessing());
    try {
      const { pushManager } = await sw.register();
      const subscription = await pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array(publicKey),
      });
      // TODO : send subscription to the server
      return dispach({
        type: 'NOTIFICATION_SUBSCRIBED'
      });
    } catch (e) {
      return dispach(notificationSubscribeFailed(e));
    }
  };
}

export function notificationUnsubscribe() {
  return async (dispach) => {
    await dispach(notificationSubscribeProcessing());
    try {
      const { pushManager } = await sw.register();
      const subscription = await pushManager.getSubscription();
      const unsubscribtion = await subscription.unsubscribe();
      // Send unsubscription to the server
      return dispach({
        type: 'NOTIFICATION_UNSUBSCRIBED',
      });
    } catch (e) {
      console.error(e);
      return dispach(notificationSubscribeFailed(e));
    }
  };
}
