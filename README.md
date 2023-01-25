# Ontwerp en ontwikkel een <br>hernieuwde product page voor funda 
<!-- Geef je project een titel en schrijf in één zin wat het is -->
<img width="1080" alt="Schermafbeelding 2023-01-25 om 11 39 01" src="https://user-images.githubusercontent.com/89298385/214543219-6be175f3-c014-430d-ba18-a68159fafa0a.png">

## Index
  * [Beschrijving](#beschrijving)
  * [Opdrachtgever](#opdrachtgever)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Dit project is een hernieuwde product pagina voor de vastgoed organisatie funda.
Op deze pagina kunnen huizen worden ingeladen die te koop of te huur staan. De site valt onder het statische web, zodoende is alle content direct in de html te vinden en word het niet ingeladen door een server.

Het project had als doel een detail pagina te herbouwen met alle informatie en vaardigheden die ik afgelopen maanden heb geleerd. 
Grote onderwerpen als responsive webdesign en toegankelijkheid heb ik er in weten te verwerken.

## Opdrachtgever
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
De opdrachtgever voor dit project was de vastgoed organisatie funda.

Funda verbindt vraag en aanbod op de vastgoedmarkt. Ze helpen kopers en verkopers, huurders en verhuurders, en makelaars op weg. Al 20 jaar. Inmiddels zijn ze een van de grootste websites van Nederland waar iedere maand gemiddeld 5 miljoen mensen samenkomen. Naar de opdrachtnemers zijn mening een monopolie posititie. Op zoek naar een nieuw thuis of plek voor zakelijke ambities. Of om even binnen te kijken bij de buren.

[Bezoek de website van funda](https://funda.nl)

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->

Voor dit project heb ik de volgende programmeertalen gebruikt:
* [HTML](#html)
* [CSS](#css)
* [Javascript](#javascript)

Voor de CSS en Javascript heb ik veel gebruik gemaakt van comments om aan te geven wat bij welk html element hoort. 
Deze twee talen zijn vaak complexer en moeten mede-ontwikkelaars context geven wat het inhoud.

### html
De pagina is opgedeeld in een reeks hoofdelementen: `header`, `main` & `footer`.
Binnen deze elementen word er gebruik gemaakt van de indeling `section` en daar in `article` om hiërachrie consistent te houden.

https://github.com/Stefan-Espant/funda-detail-page/blob/df0a971ab9279f56e1e032ddd6590423ebd8c0d5/index.html#L55-L63

### css
In de css heb ik ook een indeling op gemaakt. De volgorde in mijn code bestaat uit een aantal `custom properties` om herhaling van waardes in mijn code te voorkomen. Gevolgd door een reeks `standaard` instellingen, een sectie `keyframes` die de animaties verzorgen en een sectie `media-queries` die de `standaard` instellingen manipuleren om op ieder scherm visueel aantrekkelijk te houden. Wat betreft naamgeving ben ik daar zuinig mee om gegaan en heb ik veel code genest. 

https://github.com/Stefan-Espant/funda-detail-page/blob/e9385f7d1539a1b8aa6204391d1823a523ec1af8/main.css#L1-L55

https://github.com/Stefan-Espant/funda-detail-page/blob/e9385f7d1539a1b8aa6204391d1823a523ec1af8/main.css#L833-L846

https://github.com/Stefan-Espant/funda-detail-page/blob/e9385f7d1539a1b8aa6204391d1823a523ec1af8/main.css#L849-L928

https://github.com/Stefan-Espant/funda-detail-page/blob/e9385f7d1539a1b8aa6204391d1823a523ec1af8/main.css#L929-L931

### javascript
In Javascript heb ik een sectie met instellingen die de `dialog` mogelijk maken. Daaronder een sectie die de carousel met thumbnails verzorgen.
De Javascript heb ik gecodeerd met de methode: selecteren `document.querySelector()`, actie herkennen `addEventListener()` en uitvoeren `classList()`. 

Tot slot heb ik een eenvoudige instelling gemaakt die het kleurcontrast vergroot.

https://github.com/Stefan-Espant/funda-detail-page/blob/df0a971ab9279f56e1e032ddd6590423ebd8c0d5/script/index.js#L1-L9

## Bronnen
[12 principes of animation according to Disney](https://www.interaction-design.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design?utm_campaign=evergreen&utm_source=linkedin&utm_medium=post&utm_content=article_post)

[SVG optimizer](https://jakearchibald.github.io/svgomg/)

[Funda · Voorbeeldpagina](https://www.funda.nl/koop/zoetermeer/huis-42086186-vechtstroom-20/)

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
