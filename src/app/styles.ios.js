import { StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  input: {
    height: 20,
    top: 40,
    left : 80,
    width: 130,
  },
  box: {
    backgroundColor: '#2b4163',
    width: 20,
    height: 20,
    position: 'absolute',
    top: 40,
    left: 30,
    borderRadius: 30
  },
  buttonTextAdd: {
    color: '#9df279',
    fontSize: 13,
    fontWeight: 'bold'
  },
  buttonTextClear: {
    color: '#e53b3b',
    fontSize: 10,
    top: 3.5,
    fontWeight: 'bold'
  },
  buttonAdd: {
    borderWidth: 2,
    borderColor: '#9df279',
    padding: 2,
    width: 25,
    height: 25,
    borderRadius: 30,
    left: 240,
    top: 20,
    alignItems: 'center',
  },
  buttonClear: {
    left: 300,
    borderWidth: 2,
    borderColor: '#e53b3b',
    borderRadius: 20,
    width: 40,
    height: 25,
    alignItems: 'center',
    top: -5
  },
  listItems: {
    top: 80,
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
    left: 10

  },
  itemBox: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    padding: 10,
  },
  itemComplete: {
    width: 50,
    height: 10,
    left: 240
  },
  notDone: {
    fontSize: 11,
    fontWeight: 'bold'
  },
  done: {
    textDecorationLine: 'line-through',
    fontSize: 11,
    fontWeight: 'bold',
    color: 'lightgrey'
  },
  optionText: {
    fontSize: 10
  },
  itemDelete: {
    width: 50,
    height: 10,
    left: 290
  }
})
