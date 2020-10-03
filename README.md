

## Local Session (Firebase)
```bash
firebase serve
```

## Deployment
- Install top level dependencies
```bash
npm install
```
- Install module dependencies
```bash
cd functions/
npm install
```
- Deploy to Firebase
```bash
npm run build
firebase deploy
```

Notes
- In this branch there's essentially two main modules: `src(frontend)` and `functions(backend/API)`.
- Frontend:
    - Contains a directory `pages/` which supports the different UI's the user will see. Right now there's only `login` and `signup`. 
    - These grab data from the backend through API calls: GET, POST, etc... 
- Backend:
    - The backend is comprised of API's. This route allows the application to be more modular, and therefore decoupled from the frontend. 
    - Firebase uses a realtime db which is similar to NOSQL. That means schemas unnecessary since data is stored in a hierarchical format.
    - Find more info about the db here: https://firebase.google.com/docs/firestore
    - `API`: Any data that needs to be accessed on the frontend can be done so through these guys. 
        - `goals.js`: Goals API calls 
        - `users.js`: User API calls 


### Contributors
- Brian Drennan
