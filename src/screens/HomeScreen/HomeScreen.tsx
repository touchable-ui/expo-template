import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, Text, View} from 'react-native';
import {t} from '../../localization';
import {RootStackParamsList} from '../../navigation/stacks';

interface HomeScreenProps
  extends NativeStackScreenProps<RootStackParamsList, 'HomeScreen'> {}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('SettingsScreen')}>
        <Text>Go to {t('settings')}</Text>
      </Pressable>
    </View>
  );
};
