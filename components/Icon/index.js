import React from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome';

export default function Icon({ name, ...props }) {
  return <Ionicons name={name} {...props} />;
}
