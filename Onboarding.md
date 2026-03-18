# Velkommen til Hulen sitt Web-team

Her kommer en liten oversikt med ting som er nyttig å vite:
Alle i kanalen her er, eller har vært, aktive hos Hulen og har nå et verv om å vedlikeholde Hulen sin nettside. Vi var veldig heldige og fikk Bjørn Hellesøy til å redesigne nettsiden fra bunn med Next & Sanity. Nå gjelder det å videreutvikle og vedlikeholde det vi har slik at vi dekker behovene til nettsiden.

Hovedoppgaven vår er nettsiden. Andre prosjekter vi eventuelt holder på med er ikke en prioritet, men er selvfølgelig hjertelig velkommen. Vi bruker github til å holde orden på ulike prosjekter og issues.

Les igjennom dette dokumentet, gjør deg selv oppmerksom på Gotchas, og les README for frontend og sanity prosjektet, så er du godt på vei. Hjertelig velkommen skal du være!

Klem, Hulens Web Team

## Teknologier

Det vi bruker så langt er i hovedsak TypeScript med Sanity-database, som hostes med Vercel. Det er begrenset hvem som har tilgang til å se test-deployment av nye pushes til Main. Så hør gjerne med @Nikolai eller @Erik G. Ingebrigtsen (?) om det funker som det skal.

## Gotchas

Det er noen ting du må være obs på. Spesielt den første her:

1. Når du endrer på data i Sanity, så endrer du data globalt. Uansett. Selve sanity "databasen" (content lake) er global. Dersom du vil endre data kun for deg for å teste, så kjører du sanity-prosjektet lokalt. I et av sanity "Dokumentene", så lager du din egen versjon av dokumentet. Se f.eks "Halvor Test" i "Join Us. I din lokale build, så setter du din egen versjon som hoved.
2. Om du endrer på allerede etablerte Sanity definisjoner i koden, forvent at ting kan brekke sammen av flere ulike årsaker. Da er det viktig at det testes lokalt.

## Prosjekter

Her er en liste med lenke som kan være nyttig:

- Hulen sin organisasjon på github: https://github.com/Stiftelsen-Hulen/
  - ta kontakt med @Nikolai for å legges til her
- https://github.com/Stiftelsen-Hulen/hulen_frontend > vårt hoved repository. Her legges inn issues for både frontend og for sanity. Enklere å ha alt på ett sted da det ofte kreves endringer i begge repositoryene samtidig (min (Halvor) sin mening, fight me).
- https://github.com/Stiftelsen-Hulen/hulen_sanity > Sanity prosjektet.
- https://github.com/Stiftelsen-Hulen/personaldatabase > et prosjekt som handler om å erstatte Hulen sitt nåværende bruk av Excel osv til å ha kontroll på interne og pampe-poeng osv.
- https://github.com/nikolaihg/hulenderen3 > et prosjekt for å ha en internkalender for events, møter osv på hulen

## Ressurser

1. https://www.hulen.no/
2. https://github.com/Stiftelsen-Hulen/ > GitHub Org
3. README i både: /hulen_frontend og i /hulen_sanity for hvordan bygge og kjøre prosjektet lokalt
4. Bli kjent med sanity: sanity
5. https://hulen.sanity.studio/desk/ > webapp for å endre data i CMS (sanity)
   1. https://hulen.sanity.studio/vision > test Groq queries
   2. https://www.sanity.io/organizations/oUdB0tIch/project/gdx7kxvn?orgId=oUdB0tIch > oversikt over requests, API-kall, ++, på Sanity
