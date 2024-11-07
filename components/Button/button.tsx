import React from 'react';
import { Pressable, View, Text } from 'react-native';

import { styles } from './buttonStyle';

type Props = {
    text:string,
    onPress: () => void
}

export function Button(props:Props) {
  return (
    <Pressable>
        <Text>Texto do Botao</Text>
    </Pressable>
  );
}