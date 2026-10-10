
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StatusBar,
} from 'react-native';

type Screen = 'home' | 'player' | 'search';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');

  const goHome = () => setScreen('home');

  if (screen === 'player') {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Text style={styles.logo}>VISION<Text style={styles.accent}>TV</Text></Text>
        <Text style={styles.eyebrow}>NOW PLAYING</Text>
        <Text style={styles.pageTitle}>A Walk Through Hampi</Text>
        <Text style={styles.description}>
          Our cultural discovery experience starts here.
        </Text>
        <View style={styles.videoPlaceholder}>
          <Text style={styles.playIcon}>▶</Text>
          <Text style={styles.videoLabel}>DEMO VIDEO PLAYER</Text>
          <Text style={styles.mutedText}>Video playback comes next</Text>
        </View>
        <Pressable
          onPress={() => setScreen('search')}
          style={({ focused }) => [
            styles.primaryButton,
            focused && styles.focusedButton,
          ]}
        >
          {({ focused }) => (
            <Text style={styles.primaryButtonText}>
              ◉  Visual Search {focused ? '  ›' : ''}
            </Text>
          )}
        </Pressable>
        <Pressable
          onPress={goHome}
          style={({ focused }) => [
            styles.secondaryButton,
            focused && styles.focusedButton,
          ]}
        >
          <Text style={styles.secondaryButtonText}>Back to Home</Text>
        </Pressable>
      </View>
    );
  }

  if (screen === 'search') {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Text style={styles.logo}>VISION<Text style={styles.accent}>TV</Text></Text>
        <Text style={styles.eyebrow}>VISUAL DISCOVERY</Text>
        <Text style={styles.pageTitle}>Curious about something?</Text>
        <Text style={styles.description}>
          Pause the video, select an object, and discover the story behind it.
        </Text>
        <View style={styles.videoPlaceholder}>
          <View style={styles.selectionBox}>
            <Text style={styles.selectionText}>SELECT</Text>
          </View>
          <Text style={styles.videoLabel}>OBJECT SELECTION PREVIEW</Text>
        </View>
        <Text style={styles.mutedText}>
          Image analysis will be added in a later milestone.
        </Text>
        <Pressable
          onPress={() => setScreen('player')}
          style={({ focused }) => [
            styles.primaryButton,
            focused && styles.focusedButton,
          ]}
        >
          <Text style={styles.primaryButtonText}>Back to Video</Text>
        </Pressable>
        <Pressable
          onPress={goHome}
          style={({ focused }) => [
            styles.secondaryButton,
            focused && styles.focusedButton,
          ]}
        >
          <Text style={styles.secondaryButtonText}>Back to Home</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.topBar}>
        <Text style={styles.logo}>VISION<Text style={styles.accent}>TV</Text></Text>
        <Text style={styles.topTag}>SEE MORE. KNOW MORE.</Text>
      </View>

      <View style={styles.hero}>
        <Text style={styles.eyebrow}>YOUR WORLD, IN FOCUS</Text>
        <Text style={styles.heroTitle}>
          There's more to{'\n'}every frame.
        </Text>
        <Text style={styles.description}>
          Explore the stories behind the things you see.
          Your curiosity, on the big screen.
        </Text>

        <View style={styles.featureCard}>
          <View style={styles.featureIcon}>
            <Text style={styles.templeIcon}>⌂</Text>
          </View>
          <View style={styles.featureText}>
            <Text style={styles.eyebrow}>FEATURED EXPERIENCE</Text>
            <Text style={styles.featureTitle}>A Walk Through Hampi</Text>
            <Text style={styles.mutedText}>
              Discover India's living heritage
            </Text>
          </View>
          <Text style={styles.cardArrow}>›</Text>
        </View>

        <View style={styles.buttonRow}>
          <Pressable
            hasTVPreferredFocus
            onPress={() => setScreen('player')}
            style={({ focused }) => [
              styles.primaryButton,
              styles.homeButton,
              focused && styles.focusedButton,
            ]}
          >
            {({ focused }) => (
              <Text style={styles.primaryButtonText}>
                ▶  Start Watching {focused ? '  ›' : ''}
              </Text>
            )}
          </Pressable>

          <Pressable
            onPress={() => setScreen('search')}
            style={({ focused }) => [
              styles.secondaryButton,
              styles.homeButton,
              focused && styles.focusedButton,
            ]}
          >
            <Text style={styles.secondaryButtonText}>⌕  Visual Search</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.mutedText}>DISCOVER SOMETHING NEW</Text>
        <Text style={styles.mutedText}>VISIONTV  •  DEMO</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08111F',
    paddingHorizontal: 48,
    paddingVertical: 28,
    justifyContent: 'center',
  },
  topBar: {
    position: 'absolute',
    top: 28,
    left: 48,
    right: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#F4F7FC',
    fontSize: 27,
    fontWeight: '900',
    letterSpacing: 2,
  },
  accent: {
    color: '#50E3C2',
  },
  topTag: {
    color: '#94A5BC',
    fontSize: 11,
    letterSpacing: 2,
  },
  hero: {
    width: '82%',
    maxWidth: 850,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  eyebrow: {
    color: '#50E3C2',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 12,
  },
  heroTitle: {
    color: '#F4F7FC',
    fontSize: 46,
    lineHeight: 53,
    fontWeight: '800',
    marginBottom: 12,
  },
  pageTitle: {
    color: '#F4F7FC',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 10,
  },
  description: {
    color: '#B0BDD0',
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 570,
    marginBottom: 22,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121F31',
    borderColor: '#26384D',
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
  },
  featureIcon: {
    width: 62,
    height: 62,
    borderRadius: 12,
    backgroundColor: '#203E49',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  templeIcon: {
    color: '#50E3C2',
    fontSize: 38,
    fontWeight: '700',
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    color: '#F4F7FC',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 5,
  },
  cardArrow: {
    color: '#50E3C2',
    fontSize: 30,
    marginLeft: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  primaryButton: {
    backgroundColor: '#50E3C2',
    paddingVertical: 15,
    paddingHorizontal: 22,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 54,
  },
  secondaryButton: {
    backgroundColor: '#152236',
    borderWidth: 1,
    borderColor: '#41536A',
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 54,
  },
  homeButton: {
    minWidth: 205,
  },
  primaryButtonText: {
    color: '#06151A',
    fontSize: 16,
    fontWeight: '800',
  },
  secondaryButtonText: {
    color: '#F4F7FC',
    fontSize: 16,
    fontWeight: '700',
  },
  focusedButton: {
    borderColor: '#FFFFFF',
    borderWidth: 3,
    transform: [{ scale: 1.04 }],
  },
  videoPlaceholder: {
    minHeight: 150,
    backgroundColor: '#111F30',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#26384D',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 16,
  },
  playIcon: {
    color: '#50E3C2',
    fontSize: 34,
    marginBottom: 8,
  },
  videoLabel: {
    color: '#F4F7FC',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 8,
  },
  mutedText: {
    color: '#91A2B8',
    fontSize: 13,
  },
  selectionBox: {
    width: 100,
    height: 60,
    borderColor: '#50E3C2',
    borderWidth: 3,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  selectionText: {
    color: '#50E3C2',
    fontSize: 11,
    fontWeight: '800',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 48,
    right: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
