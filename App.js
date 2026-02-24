import { addPhoto } from './redux/photos/actions';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import store from './redux';
import styled from '@emotion/native';

const Album = styled.Text({
  color: '#000000',
  fontSize: 26,
});

const Title = styled.Text({
  color: '#090c9b',
  fontSize: 30,
});

const URL = styled.Text({
  color: '#3066be',
  fontSize: 18,
});

const ThumbnailURL = styled.Text({
  color: '#0cce6b',
  fontSize: 18,
});

const App = () => {
  const [lastPhoto, setLastPhoto] = React.useState(JSON.parse(JSON.stringify(store.getState())).photos.photos[JSON.parse(JSON.stringify(store.getState())).photos.photos.length - 1]);
  const unsubscribe = store.subscribe(() => {
    setLastPhoto(JSON.parse(JSON.stringify(store.getState())).photos.photos[JSON.parse(JSON.stringify(store.getState())).photos.photos.length - 1]);
  });
  return (
    <SafeAreaView style={styles.container}>
      <Album>{lastPhoto.albumId}</Album>
      <Title>{lastPhoto.title}</Title>
      <URL>{lastPhoto.url}</URL>
      <ThumbnailURL>{lastPhoto.thumbnailUrl}</ThumbnailURL>
      <TouchableOpacity onPress={() => onTap()} style={styles.button}>
        <Text>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const map = [
  {
    'albumId': 1,
    'id': 1,
    'thumbnailUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/A_girl_walking_across_a_bridge_%28Unsplash%29.jpg/200px-A_girl_walking_across_a_bridge_%28Unsplash%29.jpg',
    'title': 'A girl walking across a bridge',
    'url': 'https://commons.wikimedia.org/wiki/File:A_girl_walking_across_a_bridge_(Unsplash).jpg',
  },
  {
    'albumId': 1,
    'id': 2,
    'thumbnailUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/A_Golden_Airport_%28Unsplash%29.jpg/200px-A_Golden_Airport_%28Unsplash%29.jpg',
    'title': 'A Golden Airport',
    'url': 'https://commons.wikimedia.org/wiki/File:A_Golden_Airport_(Unsplash).jpg',
  },
  {
    'albumId': 1,
    'id': 3,
    'thumbnailUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/A_green_snake_coiling_a_leaf_%28Unsplash%29.jpg/200px-A_green_snake_coiling_a_leaf_%28Unsplash%29.jpg',
    'title': 'A green snake coiling a leaf',
    'url': 'https://commons.wikimedia.org/wiki/File:A_green_snake_coiling_a_leaf_(Unsplash).jpg',
  },
];

let key = 0;

onTap = () => {
  store.dispatch(addPhoto(map[key]));
  key++;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e55381',
    padding: 10,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
export default App;