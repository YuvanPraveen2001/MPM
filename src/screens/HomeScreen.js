import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {songs} from '../data/songs';

const HomeScreen = ({navigation}) => {
  const renderSong = ({item}) => (
    <TouchableOpacity
      style={styles.songContainer}
      onPress={() => navigation.navigate('Player', {song: item})}>
      <Image source={{uri: item.artwork}} style={styles.artwork} />
      <View style={styles.songInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.artist}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={songs}
        renderItem={renderSong}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  songContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  artwork: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  songInfo: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
