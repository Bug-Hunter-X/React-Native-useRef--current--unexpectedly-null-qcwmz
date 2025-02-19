import React, { useRef, useEffect, useState } from 'react';
import { TextInput, View, Text } from 'react-native';

const UnexpectedNullRefSolution = () => {
  const textInputRef = useRef(null);
  const [text, setText] = useState('');

  useEffect(() => {
    // Wait until the component is fully mounted
  }, []);

  const handleTextChange = (newText) => {
    setText(newText);
    if (textInputRef.current) {
      console.log('Text input value:', textInputRef.current.value);
    } else {
      console.log('Text input ref is null');
    }
  };

  return (
    <View>
      <TextInput
        ref={textInputRef}
        onChangeText={handleTextChange}
        value={text}
      />
      <Text>Text Input Value: {text}</Text>     
    </View>
  );
};

export default UnexpectedNullRefSolution;