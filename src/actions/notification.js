import {NotificationManager} from 'react-notifications';
 
export const createNotification = (type, title) => {
    switch (type) {
    case 'info':
        NotificationManager.info(title);
        break;
    case 'success':
        NotificationManager.success('Success', title);
        break;
    case 'warning':
        NotificationManager.warning('Warning', title, 3000);
        break;
    case 'error':
        NotificationManager.error('Error', title, 5000);
        break;
    default:
        NotificationManager.info(title);
    }
  };