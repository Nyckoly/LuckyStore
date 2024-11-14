import React from 'react';

import { Stack } from 'expo-router';

export default function WhoWeAreLayout() {
  return (
    <Stack>
        <Stack.Screen name="Who we are"
            options={{title:"Quem somos"}}
        />


    </Stack>
  );
}