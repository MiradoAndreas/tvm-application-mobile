import { VideoView, useVideoPlayer } from "expo-video";
import { StyleSheet, View } from "react-native";

const videoSource = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

export function LivePlayer() {
  const player = useVideoPlayer(videoSource, (player) => {
    player.play();
  });

  return (
    <View style={styles.container}>
      <VideoView
        player={player}
        style={styles.video}
        nativeControls
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: 250,
  },
});
