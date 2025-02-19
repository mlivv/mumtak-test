## REACT NATIVE QUIZ APP

## Features

Un'app semplice e interattiva sviluppata con l'utilizzo di React Native.
L'API di riferimento per le domande è la seguente: https://opentdb.com/api_config.php

L'app è suddivisa in 3 pagine diverse:
-Home: Presenta un testo di benvenuto e un pulsante per iniziare l'effettivo test.
-Quiz Page: Contiene il quiz vero e proprio con timer, una domanda visualizzata per volta a risposta multipla e un pulsante per passare alla domanda successiva.
-Results Page: Mostra un messaggio dinamico in base al risultato dell'utente, una finestra dove visualizzare le domande del quiz e le risposte date, con eventuale risposta corretta nel caso in cui quella dell'utente fosse sbagliata, e un pulsante per ritornare alla home.

## Installazione

Requisiti necessari per avviare l'applicazione:
-Android Studio

Step 1 - Aprire Android Studio e creare un nuovo dispositivo virtuale. Prestare particolare attenzione all'immagine di sistema, che deve essere "UpsideDownCake" (API 34).
Step 2 - Avviare il dispositivo virtuale.
Step 3 - Avviare l'applicazione con il comando $ npx expo start --clear
Step 4 - Attendere che l'app si connetta al dispositivo, quindi premere "a" nel terminale per collegarlo.

## Tecnologie utilizzate

Oltre a React Native 0.73 e React Navigation, ho aggiunto queste librerie/tecnologie di terze parti:

-Expo: Per la comodità di setup.
-html entities: L'API di Open Trivia DB restituisce delle domande in formato HTML, che è stato necessario formattare.
-TypeScript: Per garantire la correttezza dei tipi utilizzati durante lo sviluppo.

## Bug e difficoltà

La difficoltà che mi ha impegnato più tempo è stato il setup del progetto, non avendo molta esperienza con React Native e Android Studio.
Ci sono ancora alcuni bug (ad esempio, problemi di visualizzazione della risposta corretta nel caso in cui un utente saltasse una domanda nella pagina di riepilogo) che non sono riuscita a risolvere per ragioni di tempistiche.
Sempre per ragioni di tempistiche, avrei voluto gestire meglio la modellazione dei dati ricevuti dall'API, magari con una mappatura più strutturata.
