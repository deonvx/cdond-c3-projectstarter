import { History, createHashHistory } from 'history';

const history: History = createHashHistory({
  hashType: 'slash',
});

export default history;
