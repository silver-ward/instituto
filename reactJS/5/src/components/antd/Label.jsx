import React, { useState } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

export default function Label({ texto }) {

  return (
    <Text
      strong
      style={{
        fontSize: 16,
        color: '#303030'
      }}
    >
      {texto}
    </Text>
  );
}