import { PORTALS_KEY } from '@env';
import { addPortal, register } from '@ionic/portals-react-native';

export const initialize = async () => {
  await register(PORTALS_KEY);
  await addPortal({ name: 'debug', startDir: 'debug' });
};