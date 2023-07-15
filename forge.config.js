module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
        config: {
            icon: "./assets/icon.icns"
        }
    },
    {
      name: '@electron-forge/maker-dmg',
      platforms: ['darwin'],
        config: {
            icon: "./assets/icon.icns"
        }
    },
    {
      name: '@electron-forge/maker-deb',
        config: {
            icon: "./assets/icon.icns"
        }
    },
    {
      name: '@electron-forge/maker-rpm',
        config: {
            icon: "./assets/icon.icns"
        }
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
        config: {
            icon: "./assets/icon.icns"
        }
    },
  ],
};
