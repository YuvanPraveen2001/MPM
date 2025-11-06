import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  State,
} from 'react-native-track-player';
import {songs} from '../data/songs';

const PlayerScreen = ({route}) => {
  const {song} = route.params;
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const setupPlayer = async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(songs);
      await TrackPlayer.skip(songs.findIndex(s => s.id === song.id));
      TrackPlayer.play();
      setIsPlaying(true);
    };

    setupPlayer();

    return () => {
      TrackPlayer.reset();
    };
  }, [song]);

  useTrackPlayerEvents([Event.PlaybackState], event => {
    if (event.state === State.Playing) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  });

  const onPlayPause = () => {
    if (isPlaying) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  };

  const onNext = () => {
    TrackPlayer.skipToNext();
  };

  const onPrev = () => {
    TrackPlayer.skipToPrevious();
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: song.artwork}} style={styles.artwork} />
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.artist}>{song.artist}</Text>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton} onPress={onPrev}>
          <Text>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={onPlayPause}>
          <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={onNext}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  artwork: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
  },
  controlButton: {
    padding: 20,
    margin: 10,
    backgroundColor: '#eee',
  },
});

export default PlayerScreen;
