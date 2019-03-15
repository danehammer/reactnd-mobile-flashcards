import {AsyncStorage} from 'react-native';

const STORAGE_KEY = 'reactnd:mobile-flashcards:decks';

const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then((results) => {
    return results === null ? {} : JSON.parse(results);
  });
};

const getDeck = (id) => {
  return AsyncStorage.getItem(STORAGE_KEY).then((results) => {
    const obj = JSON.parse(results);
    return obj[id];
  });
};

const clear = () => {
  return AsyncStorage.removeItem(STORAGE_KEY);
};

const saveDeckTitle = (title) => {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title: title,
        questions: []
      }
    })
  );
};

const addCardToDeck = (title, question) => {
  return AsyncStorage.getItem(STORAGE_KEY).then((results) => {
    const obj = JSON.parse(results);
    const deck = obj[title];
    deck.questions.push(question);
    obj[title] = deck;
    return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  });
};

export {clear, getDecks, getDeck, saveDeckTitle, addCardToDeck};
