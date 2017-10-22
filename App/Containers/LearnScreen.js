import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import styles from '../Containers/Styles/DefaultScreenStyle'
import { Images } from '../Themes'

class LearnScreen extends React.Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={css.flex}>
          <Image style={css.img} source={Images.lighthead} />
          <Text style={[css.flex, css.txt, css.br]}>Each game includes 10 clues for you to solve. Each clue is a sentence that contains one or more consecutive ‘keywords’. We don’t tell you which words are the keywords, but we do tell you how many there are. By re-arranging all the letters in the keyword(s), you can make a <Text style={css.em}>single-word</Text> anagram that solves the clue.</Text>
        </View>
        <Text style={css.txt}>Here’s a simple clue with a single keyword:</Text>
        <Text style={css.clue}>The cast of the play includes several felines.</Text>
        <Text style={[css.txt, css.br]}>The answer is ‘cats’, which is an anagram of the keyword ‘cast’; and of course, 'cats' are 'felines'.</Text>
        <Text style={css.txt}>Now here’s a clue that is a little harder. It contains two keywords:</Text>
        <Text style={css.clue}>The rep said only good things about his products.</Text>
        <Text style={[css.txt, css.br]}>In this case, the answer is ‘praised’ – an anagram of the keywords ‘rep said’. It's the correct answer, because 'praise' means 'to say good things about'.</Text>
        <Text style={css.txt}>Note that keywords and answers may include proper names. For example:</Text>
        <Text style={css.clue}>The book told a tale set in this north-western city.</Text>
        <Text style={[css.txt, css.br]}>The answer – Seattle – is an anagram of ‘tale set’.</Text>
      </ScrollView>
    )
  }
}

const css = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5
  },
  img: {
    width: 70,
    height: 107,
    marginRight: 20,
    marginTop: 5,
    resizeMode: 'contain'
  },
  txt: {
    fontSize: 18,
    // fontFamily: 'arial narrow',
    lineHeight: 22,
    textAlign: 'justify' // justify not supported on android
  },
  em: {
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  clue: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingLeft: 18,
    paddingVertical: 10,
    color: 'blue'
  },
  br: {
    marginBottom: 18
  }
})

export default LearnScreen
