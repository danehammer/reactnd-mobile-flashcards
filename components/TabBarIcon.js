import React from 'react';
import {Icon} from 'expo';
import Colors from '../constants/Colors';

export default function TabBarIcon({focused, name}) {
  return (
    <Icon.Ionicons
      name={name}
      size={26}
      style={{marginBottom: -3}}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
