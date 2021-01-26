import fastify from 'fastify';
import firebase from './config/firebase';

const server = fastify();

interface IEmailPassword {
  email: string;
  password: string;
}

server.get('/', async (req, res) => {
  return 'hello world';
})

server.post('/register/email', async (req, res) => {
  const {email, password} = <IEmailPassword>req.body;
  try {
    return await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        return true;
      })
      .catch(e => {
        return e;
      });
  } catch (e) {
    return false;
  }
});

server.post('/register/google' ,async (req, res) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  return await firebase.auth().signInWithPopup(provider)
    .then((res) => {
        return true;
    })
    .catch(e => {
        return e;
    });
})

server.get('/login/email', async (req, res) => {
  const {email, password} = <IEmailPassword>req.body;
  return await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(({user}) => {
      return true
    })
    .catch(e => {
      return false;
    });
});

server.get('/login/facebook', async (req, res) => {

})

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`server listening on ${address}`);
})