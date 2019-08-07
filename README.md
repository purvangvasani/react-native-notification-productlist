
# Notification-ProductList App in React Native

This is a component app for the Notification and ProductList (Like Flipkart) demo. Tab navigation is used here for moving between the screens. React-Native-Elements and Native-Base library are used for the designing of the components. Pull to refresh functionality is also available here.

## Dependencies of this project:

```python
react: 16.8.3
react-native: 0.59.8
native-base: ^2.12.1
react-native-elements: ^1.1.0
react-native-gesture-handler: ^1.2.1
react-navigation: ^3.11.0
react-redux: ^7.0.3
redux: ^4.0.1
react-native-pull-refresh: ^1.0.0
react-native-pull-to-refresh: ^2.1.3
react-native-vector-icons: ^6.4.2
```

## Notification Screen

It is the component for the notification. It includes icon and notification message. When clicked on it, the notification is read. This is managed by the redux-store.

![Notification Screen](https://github.com/purvangvasani/react-native-notification-productlist/blob/master/src/ScreenShots/NotificationScreen.png?raw=true)

## ProductList Screen

ProductList screen shows the List of the products using an API. View is made like Flipkart product list by doing some changes. When clicked on the Favourite icon, simple Alert is used to show the Item number.

![ProductList Screen](https://github.com/purvangvasani/react-native-notification-productlist/blob/master/src/ScreenShots/ProductList.png?raw=true)

![](https://github.com/purvangvasani/react-native-notification-productlist/blob/master/src/ScreenShots/FavouritePopup.png?raw=true)
