### What is react-native-ui-kitten?

*React Native UI Kitten* is a mobile framework with a set of easily customizable elements. 
It aims at boosting your mobile application development and allows you to focus on business logic instead of view composition. 
It helps you to bring your MVP to life in a shorter period of time.

### What is the main benefit of using this kitten?

Using React Native UI Kitten you will be able to create style configurations of components you use the most (buttons, inputs etc.). 
These styles can be reused then in the process of development. Configure them once and use anywhere!

### Can I use this kitten with other react libraries?

Yes, it's just set of UI components. It doesn't force you to use any specific library for business logic implementation.

### How to install

Simply add it as an npm dependency:

```
npm install --save react-native-ui-kitten
```

And include the component you need into your application:
```
import {RkButton} from 'react-native-ui-kitten';
```

Then just use:

```
render() {
  return (
    <View>
      <RkButton>Click me!</RkButton>
    </View>
  )
}
```

### Customization
All components are flexible and can be customized.
More detailed about stylization of components you can find [here](#/docs/quick-start/customization)
