- Header
- Routing of app
- Login up form 
- Sign up form 
- Form Validartion
- useRef hook 
- Firebase setup
- Deploying our app to production 
- Creat signupuser account 
- Impliment Sign In user api 
- Created redux store with userSlice
- Impliment sign out
- Update profile
- BugFix - Sign up user displayName and profilr pic update
- BugFix - if the user is not logged in redirect / browse to Login Page and vice-versa
- Unsubscribe to the onAuthStateChanged callback
- Add hardcoded valuesto the constants file
- Regiter TMDB API & create an app & get access tocken
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fatch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind Classes to make main Conatiner look awesome
- Build Secondary Container
- Build Movies List 
- Build Movie Card 
- TMDB Image CDN URl 
- Made the Browsre page amazing with Tailwind css
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS)Multi-language Feature in our App
- Gemini API Key
- Gemini Search Call
- Fetched geminiMovieSuggestion
- created geminiSlice and add data
- Resused Movie List component to make movie suggestion conatainer
- Memoization
- Create .env file
- Added .env file to gitignore
- Made our site responsive






first i have created a header which consist of a logo 

then i create login 
 - give background image (property absolute)
 - then i create a form (takes email and password)
    -this from has dual functionality
    -sign in for alreagy existing user 
    -sign up for new user 
    this is done by creating a state variable and giving me a toggle functionality
- then i check for validation of email and password
    - use rejex for validation {rejex code is in validate js file}
    - take refrence using react hook useRef()

- we have also host our website on firebase
    for that 
    1 install firebase CLI - `npm install -g firebase-tools`
    2 firebse login - `firebase login`
    3 initilize firebse - `firebase init` then select hosting
    4 deploy command - `firebase deploy`
    
- create a SignUp user account


during routing we have to dispatch on sign in , sign out , sign up (to avoide writing dispatch again and again we use onAuthStateChange) onAuthStateChange is a utility given by firebase

all firebase api (sign in, sign up,onAuthStateChange ) you will find on fire base website in authentication under web (manage user)