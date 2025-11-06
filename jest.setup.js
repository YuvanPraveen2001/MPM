import 'react-native-gesture-handler/jestSetup';

const mockActualInteractionManager = jest.requireActual(
  'react-native/Libraries/Interaction/InteractionManager',
);

jest.mock('react-native/Libraries/Interaction/InteractionManager', () => ({
  ...mockActualInteractionManager,
  runAfterInteractions: jest.fn(f => {
    f();
    return {
      cancel: jest.fn(),
    };
  }),
  createInteractionHandle: jest.fn(() => 1),
  clearInteractionHandle: jest.fn(),
}));

jest.mock('react-native-track-player', () => ({
  useTrackPlayerEvents: jest.fn(),
  setupPlayer: jest.fn(),
  add: jest.fn(),
  skip: jest.fn(),
  play: jest.fn(),
  pause: jest.fn(),
  skipToNext: jest.fn(),
  skipToPrevious: jest.fn(),
  reset: jest.fn(),
  Event: {},
  State: {},
}));
