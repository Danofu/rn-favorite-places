module.exports = (api) => {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        { extensions: ['.android.js', '.android.jsx', '.ios.js', '.ios.jsx', '.js', '.jsx'], root: ['.'] },
      ],
    ],
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
  };
};
