import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { styles } from './productItemStyle';
import { Link } from 'expo-router';

type Props = {
    productData:Product
}

export function ProductItem({productData}:Props) {
  return (
    <Link href={`/product/${productData.id}`} style={styles.container} asChild>
        <Pressable>
            <Image
            style={styles.image}
            source={{uri:productData.image}}
            />
            <View>
                <Text>{productData.title}</Text>
                <Text>{productData.description}</Text>
                <Text>{productData.price}</Text>
            </View>
        </Pressable>
    </Link>
  );
}