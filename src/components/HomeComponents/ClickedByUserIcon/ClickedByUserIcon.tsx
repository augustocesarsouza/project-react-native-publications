import { useEffect, useRef, useState } from 'react';
import { Animated, Image, Pressable, Text, View } from 'react-native';
import { styles } from './styled';
import { User } from '../../interface/domain/User';
import { FontAwesome5 } from '@expo/vector-icons';
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
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/_layout';

interface ClickedByUserIconProps {
  user: User;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  setWasClickedUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ClickedByUserIcon({
  user,
  navigation,
  setWasClickedUser,
}: ClickedByUserIconProps) {
  const containerClickedByUserFirstRef = useRef<View | null>(null);
  const containerClickedByUserSecondRef = useRef<View | null>(null);

  const containerFirstWidth = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(containerFirstWidth, {
      toValue: 80,
      duration: 300,
      useNativeDriver: false,
    }).start();

    const containerSecond = containerClickedByUserSecondRef.current as View;

    containerSecond.setNativeProps({
      style: {
        width: '20%',
      },
    });
  }, []);

  const onPressExitUser = async () => {
    await AsyncStorage.removeItem('user');
    // setUser(null);
    navigation.navigate('Login');
  };

  const onPressCloseClickUser = () => {
    Animated.timing(containerFirstWidth, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setWasClickedUser(false));

    const containerSecond = containerClickedByUserSecondRef.current as View;

    containerSecond.setNativeProps({
      style: {
        width: '0%',
      },
    });
  };

  return (
    <>
      <Animated.View
        style={[
          styles.containerClickedByUserFirst,
          {
            width: containerFirstWidth.interpolate({
              inputRange: [0, 80],
              outputRange: ['0%', '80%'],
            }),
          },
        ]}
        ref={containerClickedByUserFirstRef}>
        <View style={styles.containerImgUserAndName}>
          <View style={styles.containerImgNameAndDellipsis}>
            <View>
              {!user.userImage && (
                <Image
                  source={require('../../img/img-after-clicked-img-user.png')}
                  style={styles.imgUserAfterClicked}
                />
              )}
              {user.userImage && (
                <Image source={{ uri: user.userImage }} style={styles.imgUserAfterClicked} />
              )}
            </View>
            <View style={styles.containerSvgEllipsis}>
              <FontAwesome5 name="ellipsis-v" size={12} color="white" />
            </View>
          </View>

          <Text style={styles.textInnerClickedByUser}>{user.name}</Text>
        </View>

        <View style={styles.containerNaveAfterClickedImgUser}>
          <View style={styles.containerSvgAndTextNave}>
            <SvgProfile width={22} height={22} fill="#fff" style={styles.svgNave} />
            <Text style={styles.textNaveAfterClicked}>Perfil</Text>
          </View>
          <View style={styles.containerSvgAndTextNave}>
            <SvgPremium width={22} height={22} fill="#fff" style={styles.svgNave} />
            <Text style={styles.textNaveAfterClicked}>Premium</Text>
          </View>
          <View style={styles.containerSvgAndTextNave}>
            <SvgLists width={22} height={22} fill="#fff" style={styles.svgNave} />
            <Text style={styles.textNaveAfterClicked}>Listas</Text>
          </View>
          <View style={styles.containerSvgAndTextNave}>
            <SvgSavedItems width={22} height={22} fill="#fff" style={styles.svgNave} />
            <Text style={styles.textNaveAfterClicked}>Itens salvos</Text>
          </View>
          <View style={styles.containerSvgAndTextNave}>
            <Svglightning width={22} height={22} fill="#fff" style={styles.svgNave} />
            <Text style={styles.textNaveAfterClicked}>Organizações Verificadas</Text>
          </View>
          <View style={styles.containerSvgAndTextNave}>
            <SvgCoin width={22} height={22} fill="#fff" style={styles.svgNave} />
            <Text style={styles.textNaveAfterClicked}>Monetização</Text>
          </View>
          <View style={styles.containerSvgAndTextNave}>
            <SvgAds width={22} height={22} fill="#fff" style={styles.svgNave} />
            <Text style={styles.textNaveAfterClicked}>Ads</Text>
          </View>
          <View style={styles.containerSvgAndTextNave}>
            <SvgBriefcase width={22} height={22} fill="#fff" style={styles.svgNave} />
            <Text style={styles.textNaveAfterClicked}>Empregos</Text>
          </View>
          <View style={styles.containerSvgAndTextNave}>
            <SvgConfiguration width={22} height={22} fill="#fff" style={styles.svgNave} />
            <Text style={styles.textNaveAfterClicked}>Configurações e privacidade</Text>
          </View>
          <Pressable style={styles.containerSvgAndTextNave} onPress={onPressExitUser}>
            <SvgExit width={22} height={22} fill="#fff" style={styles.svgNave} />
            <Text style={styles.textNaveAfterClicked}>Sair</Text>
          </Pressable>
        </View>
      </Animated.View>

      <View style={styles.containerClickedByUserSecond} ref={containerClickedByUserSecondRef}>
        <Pressable
          style={styles.containerPressableClickedByUser}
          onPress={() => onPressCloseClickUser()}></Pressable>
      </View>
    </>
  );
}
