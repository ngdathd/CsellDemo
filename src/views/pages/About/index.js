import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {aboutStyles as Styles} from '../../../styles/pages';

function About() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={Styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={Styles.engine}>
              <Text style={Styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={Styles.body}>
            <View style={Styles.sectionContainer}>
              <Text style={Styles.sectionTitle}>Step One</Text>
              <Text style={Styles.sectionDescription}>
                Edit <Text style={Styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={Styles.sectionContainer}>
              <Text style={Styles.sectionTitle}>See Your Changes</Text>
              <Text style={Styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={Styles.sectionContainer}>
              <Text style={Styles.sectionTitle}>Debug</Text>
              <Text style={Styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={Styles.sectionContainer}>
              <Text style={Styles.sectionTitle}>Learn More</Text>
              <Text style={Styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default About;
