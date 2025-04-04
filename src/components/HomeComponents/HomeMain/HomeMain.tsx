import { Animated, Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { useEffect, useRef, useState } from 'react';
import { User } from '../../interface/domain/User';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/_layout';
import { getUser } from '../../GetUserStorage/GetUserStorage';
import { FontAwesome } from '@expo/vector-icons';
import SvgProfile from '../../AllSvgs/SvgProfile';
import SvgPremium from '../../AllSvgs/SvgPremium';
import SvgLists from '../../AllSvgs/SvgLists';
import SvgSavedItems from '../../AllSvgs/SvgSavedItems';
import Svglightning from '../../AllSvgs/Svglightning';
import SvgCoin from '../../AllSvgs/SvgCoin';
import SvgAds from '../../AllSvgs/SvgAds';
import SvgBriefcase from '../../AllSvgs/SvgBriefcase';
import SvgConfiguration from '../../AllSvgs/SvgConfiguration';
import SvgExit from '../../AllSvgs/SvgExit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SvgHome from '../../AllSvgs/SvgHome';
import SvgMagnifyingGlass from '../../AllSvgs/SvgMagnifyingGlass';
import SvgGrok from '../../AllSvgs/SvgGrok';
import SvgBell from '../../AllSvgs/SvgBell';
import SvgEmail from '../../AllSvgs/SvgEmail';
import SvgTwoPeople from '../../AllSvgs/SvgTwoPeople';
import SvgFeather from '../../AllSvgs/SvgFeather';
import ClickedByUserIcon from '../ClickedByUserIcon/ClickedByUserIcon';

interface HomeMainProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

export default function HomeMain({ navigation }: HomeMainProps) {
  const [user, setUser] = useState<User | null>(null);

  const textRefs = useRef<(Text | null)[]>([]);
  const textList = ['Para você', 'Seguindo', 'Roach Ranch'];
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();

      if (userData) {
        setUser(userData);
      }
    };

    fetchUser();

    timeoutRef.current = setTimeout(() => {
      textRefs.current[0]?.setNativeProps({
        style: {
          color: '#fff',
          borderBottomWidth: 3,
          borderBottomColor: '#229cee',
        },
      });
    }, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const onPressExitUser = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);
    navigation.navigate('Login');
  };

  const onPressText = (index: number) => {
    textRefs.current.forEach((el) => {
      el?.setNativeProps({
        style: {
          color: '#a9a9a9',
          borderBottomWidth: 0,
          borderBottomColor: '#229cee0',
        },
      });
    });

    textRefs.current[index]?.setNativeProps({
      style: {
        color: '#fff',
        borderBottomWidth: 3,
        borderBottomColor: '#229cee',
      },
    });
  };

  const [wasClickedUser, setWasClickedUser] = useState(false);

  const onPressClickUser = () => {
    setWasClickedUser(true);
  };

  return (
    <Pressable style={styles.containerMain}>
      {user && (
        <>
          <View>
            <View style={styles.containerHeaderPublicaton}>
              <View>
                {!user.userImage && (
                  <FontAwesome
                    name="user-circle"
                    size={25}
                    color="white"
                    onPress={onPressClickUser}
                  />
                )}
                {user.userImage && (
                  <Image source={{ uri: user.userImage }} style={styles.imgUser} />
                )}
              </View>
              <Image source={require('../../img/img-twitter.png')} style={styles.imgUser} />
              <FontAwesome name="ellipsis-v" size={25} color="white" />
            </View>
            <View style={styles.containerNavigationPublication}>
              {textList.map((text, index) => (
                <Text
                  key={index}
                  ref={(el) => (textRefs.current[index] = el)}
                  onPress={() => onPressText(index)}
                  style={styles.textNavPublic}>
                  {text}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.containerFooterIcons}>
            <SvgHome width={26} height={26} fill="#fff" />
            <SvgMagnifyingGlass width={26} height={26} fill="#fff" />
            <SvgGrok width={26} height={26} fill="#fff" />
            <SvgBell width={26} height={26} fill="#fff" />
            <SvgEmail width={26} height={26} fill="#fff" />
            <SvgTwoPeople width={26} height={26} fill="#fff" />
          </View>

          <View style={styles.containerCreatePublication}>
            <SvgFeather width={24} height={24} fill="#fff" />
          </View>

          {wasClickedUser && (
            <ClickedByUserIcon
              user={user}
              navigation={navigation}
              setWasClickedUser={setWasClickedUser}
            />
          )}
        </>
      )}
    </Pressable>
  );
}
