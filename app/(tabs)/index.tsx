import { vars } from 'nativewind';
import { Pressable, Text, View } from 'react-native';

import '../../global.css';

const theme = vars({
  '--theme-fg': 'green',
});

const App = () => {
  return (
    <View className="flex-1 justify-center items-center gap-10" style={theme}>
      <Text className="text-5xl text-[--theme-fg]">Variables!!!</Text>
      <Pressable
        onPress={() => {}}
        tvParallaxProperties={{ enabled: false }}
        className="transition duration-500 focus:scale-125 active:scale-150"
      >
        {({ focused, pressed }) => {
          return (
            <Text className="text-5xl">{`Transitions button${
              pressed ? ' pressed' : focused ? ' focused' : ''
            }`}</Text>
          );
        }}
      </Pressable>
      <Text className="text-5xl animate-bounce">Animations!!!</Text>
    </View>
  );
};

export default App;
