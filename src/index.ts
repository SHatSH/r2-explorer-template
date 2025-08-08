import { R2Explorer } from 'r2-explorer';

export default R2Explorer({ readonly: false, basicAuth: [{
    username: 'lsh',
    password: 'lsh3210'
  },{
    username: 'anotherUser',
    password: '123567'
  }]
});
