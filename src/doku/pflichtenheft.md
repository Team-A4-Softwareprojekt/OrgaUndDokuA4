# Anforderungs- und Entwurfsspezifikation ("Pflichtenheft")

# 0 Titelseite

* Senpai
* Autoren:
    * Tobias Wegner
    * Leonie Terlutter
    * Oliver Mann
    * Kevin Zuber
    * Lewin Wanzek
* Link zum Source Code Repository (KOMMT)
    * Datenbank:
    * Server:
    * Webanwendung:
* Inhaltsverzeichnis (KOMMT)

# 1 Einführung

## 1.1 Beschreibung

* Text der Produktidee einfügen

# 2 Anforderungen

## 2.1 Stakeholder

| Funktion / Relevanz | Name             | Kontakt / Verfügbarkeit                                   | Wissen                             | Interessen / Ziele                      |
|---------------------|------------------|-----------------------------------------------------------|------------------------------------|-----------------------------------------|
| Product-Owner       | Projektteam      | s. individuelle Mails der Product-Owner                   |                                    |                                         |
| Serveradministrator | Lewin Wanzek     | lewin.antonius_wanzek@hsbi.de / 30% Minden, 70% Bückeburg | Grundlegende Kenntnisse JavaScript | Webentwicklung / stabile Serverumgebung |
| Datenbank           | Leonie Terlutter | leonie.terlutter@hsbi.de                                  |                                    |                                         |
| Webanwendung        | Oliver Mann      | oliver.mann@hsbi.de                                       |                                    |                                         |
| Logik               | Tobias Wegner    | tobias.wegner@hsbi.de                                     |                                    |                                         |
| Logik               | Kevin Zuber      | kevin.zuber@hsbi.de                                       |                                    |                                         |
| User (extern)       | /                | erreichbar über angelegte Accounts                        |                                    |                                         |
| Tutor (extern)      | /                | erreichbar über angelegte Accounts                        |                                    |                                         |

## 2.2 Funktionale Anforderungen

* ggfs. Use-Case Diagramme (Kevin)
* Strukturierung der Diagramme in funktionale Gruppen (Kevin)

### Definition der Akteure
**User (Lernender oder Tutor)**
* Lernender:
  * Nutzt die unterschiedlichen Spiel-Modi (konstenlos oder mit dem Abonnemenet-Modell)
* Tutor:
  * Veröffentlicht Inhalte 
  * bewertet "Excercise"-Abgaben
  
**Server**
* Enthält die Spiellogik und regelt die Spielmechanik,
  * Ausführen von Aktionen
  * Aktualisieren des Spielstatus
* Der Server kann
  * Daten abrufen, aktualisieren und löschen
  * Spielaktionen ausführen (Lobbys erstellen, auflösen, Aufgaben verteilen)
  * Spielzustände verwalten
 
**Datenbank**
* Speichert spielrelevante Informationen
  * Benutzerprofile
  * Spielstände
  * andere spielbezogene Daten


**VsCode (API)**
* Stellt eine Schnittstelle bereit, die es der Webanwendung ermöglicht, Code zu kompilieren
  * Bereitstellung von Methoden und Funktionen zum Einreichen von Code

**ChatGPT (API)**
* Stellt eine Schnittstelle bereit, über die die Einreichungen an die KI gesendet werden können, um sie zu bewerten 
  * Bereitstellung von Methoden und Funktionen zum Senden von Texteingaben und zum Empfangen von Bewertungsergebnissen.

* Akteure sowie andere Begriffe der implementierten Fachdomäne definieren
* Begriffe konsistent in der Spezifikation verwenden
* Begriffe im Glossar am Ende des Dokuments darstellen

## 2.3 Nicht-funktionale Anforderungen

**Leistungsanforderungen:**

**Realitätsanforderungen:**

**Qualitätsanforderungen:**


* Zeitverhalten: Die Webanwendung soll schnelle Reaktionszeit aufweisen, sodass eine flüssige Nutzung der Anwendung möglich wird
* IT-Sicherheit: Die Webanwendung soll nicht von außen beeinflussbar sein, in der Datenbank gespeicherte Daten sind für Außenstehende unzugänglich
* Robustheit: Das System biete für eine längere Periode ein kontinuierliches Spielerlebnis ohne Neustarten zu müssen.
* Benutzerzahl:
* Datenumfang: Die Anwendung verfügt über genug Daten, sodass alle Spielmodi funktional lauffähig sind
* Richtlinien:
* Dokumentation:



### 2.3.1 Rahmenbedingungen

* Das System muss spätestens im Juli (15.07 Beginn der Klausurenphase) fertiggestellt sein

### 2.3.2 Betriebsbedingungen

* Der Kunde kann die Software bequem über den Webbrowser nutzen und ist dabei an kein spezifisches Endgerät gebunden. Voraussetzung ist eine stabile Internetverbindung.

### 2.3.3 Qualitätsmerkmale

* Externe Qualitätsanforderungen (z.B. Performance, Sicherheit, Zuverlässigkeit, Benutzerfreundlichkeit)

| Qualitätsmerkmal           | sehr gut | gut | normal | nicht relevant |
|----------------------------|----------|-----|--------|----------------|
| **Zuverlässigkeit**        |          |     |        |                |
| Fehlertoleranz             | -        | -   | X      | -              |
| Wiederherstellbarkeit      | X        | -   | -      | -              |
| Ordnungsmäßigkeit          | -        | -   | X      | -              |
| Richtigkeit                | X        | -   | -      | -              |
| Konformität                | -        | X   | -      | -              |
| **Benutzerfreundlichkeit** |          |     |        |                |
| Installierbarkeit          | -        | -   | -      | X              |
| Verständlichkeit           | X        | -   | -      | -              |
| Erlernbarkeit              | -        | X   | -      | -              |
| Bedienbarkeit              | X        | -   | -      | -              |
| **Performance**            |          |     |        |                |
| Zeitverhalten              | -        | -   | X      | -              |
| Effizienz                  | -        | -   | -      | X              |
| **Sicherheit**             |          |     |        |                |
| Analysierbarkeit           | -        | -   | -      | X              |
| Modifizierbarkeit          | -        | -   | -      | X              |
| Stabilität                 | -        | -   | X      | -              |
| Prüfbarkeit                | -        | X   | -      | -              |

## 2.4 Graphische Benutzerschnittstelle

* GUI-Mockups passend zu User Stories

* Screens mit Überschrift kennzeichnen, die im Inhaltsverzeichnis zu sehen ist

* Unter den Screens darstellen (bzw. verlinken), welche User Stories mit dem Screen abgehandelt werden

* Modellierung der Navigation zwischen den Screens der GUI-Mockups als Zustandsdiagramm

* Mockups für unterschiedliche Akteure

* Mockups für unterschiedliche Frontends (Mobil, Web, Desktop)

## 2.5 Anforderungen im Detail

*

User Stories mit Akzeptanzkritierien

*

Optional: Name (oder ID) und Priorität ("Must", "Should", "Could", "Won't")

*

Strukturierung der User Stories in funktionale Gruppen

*

Sicherheit: Misuse-Stories formulieren

### Schablone für User Stories

|
**Als**
|

**möchte ich**
|
**so dass**
|
**Akzeptanz**
|
| :------ | :----- | :------ | :-------- |
| Wer | Was | Warum | Wann akzeptiert |

### Beispiel 1

|
**Als**
|

**möchte ich**
|
**so dass**
|
**Akzeptanz**
|
| :------ | :----- | :------ | :-------- |
| Benutzer | bei Fehleingabe die Lösung angezeigt bekommen | ich lernen kann | Lösung wird angezeigt |

### Beispiel 2

|
**Name**
|

**In meiner Rolle als**
...| ...
**möchte ich**
... | ...,
**so dass**
... |
**Erfüllt, wenn**
... |
**Priorität**
|
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| Lernen |Benutzer| bei Fehleingabe die Lösung angezeigt bekommen|ich lernen kann| Lösung wird angezeigt | Muss |

# 3 Technische Beschreibung

## 3.1 Systemübersicht (zusammen, Termin: )

* Systemarchitekturdiagramm ("Box-And-Arrow" Diagramm)
* Kommunikationsprotokolle, Datenformate

Das Diagramm in Kapitel "Systemübersicht" ist statisch und nicht dynamisch und stellt daher keine Abläufe dar. Abläufe
werden im Kapitel "Abläufe" dargestellt. Im Kapitel "Systemübersicht" soll genau ein Diagramm dargstellt werden. Das "
Box-and-Arrow"-Diagramm soll als Systemarchitekturdiagramm eine abstrakte Übersicht über das Softwaresystem geben. Dazu
stellt es die Rechnerknoten und deren Kommunikationsbeziehungen (Protokoll (z.B. HTTP), Datenformat (z.B. JSON)) dar.
Also Rechtecke und gerichtete Pfeile. Ähnlich einem UML-Deployment-Diagramm, aber noch abstrakter, denn es zeigt nicht
die Verteilung der Softwarebausteine auf die Rechnerknoten. So erlangt der Leser einen schnellen und guten Überblick
über das Softwaresystem.

## 3.2 Softwarearchitektur (zusammen, Termin: )

* Darstellung von Softwarebausteinen (Module, Schichten, Komponenten)

Hier stellen Sie die Verteilung der Softwarebausteine auf die Rechnerknoten dar. Das ist die Softwarearchitektur. Zum
Beispiel Javascript-Software auf dem Client und Java-Software auf dem Server. In der Regel wird die Software dabei
sowohl auf dem Client als auch auf dem Server in Schichten dargestellt.

* Server
* Web-Schicht
* Logik-Schicht
* Persistenz-Schicht
* Client
* View-Schicht
* Logik-Schicht
* Kommunikation-Schicht

Die Abhängigkeit ist bei diesen Schichten immer unidirektional von "oben" nach "unten". Die Softwarearchitektur aus
Kapitel "Softwarearchitektur" ist demnach detaillierter als die Systemübersicht aus dem Kapitel "Systemübersicht". Die
Schichten können entweder als Ganzes als ein Softwarebaustein angesehen werden. In der Regel werden die Schichten aber
noch weiter detailliert und in Softwarebausteine aufgeteilt.

### 3.2.1 Technologieauswahl  (zusammen, Termin: )

Beschreiben Sie hier, welche Frameworks / Technologien / Bibliotheken / Datenformate / Protokolle benutzt werden.

## 3.3 Schnittstellen

* Schnittstellenbeschreibung (API)
* Auflistung der nach außen sichtbaren Schnittstelle der Softwarebausteine

Hier sollen sämtliche Schnittstellen definiert werden:

* die externen Schnittstellen nach außen. Über welche Schnittstelle kann z.B. der Client den Server erreichen?
* die internen Schnittstellen der unter 3.2 definierten Softwarebausteine

Es ist sinnvoll, wenn die API von denjenigen definiert werden, die die Anforderungen an die API kennen: in einem
Client-Server-System haben die Client-Entwickler Anforderungen an die Backend-Entwickler, so dass in diesem Fall die
Client-Entwickler die API definieren sollten, die dann vom Backend-Entwickler implementiert werden.

## 3.3.1 Ereignisse (in unserem Fall nicht vorhanden)

* In Event-gesteuerten Systemen: Definition der Ereignisse und deren Attribute

## 3.4 Datenmodell

* Konzeptionelles Analyseklassendiagramm (logische Darstellung der Konzepte der Anwendungsdomäne)
* Modellierung des physikalischen Datenmodells
* RDBMS: ER-Diagramm bzw. Dokumentenorientiert: JSON-Schema

## 3.5 Abläufe

*

Aktivitätsdiagramme für relevante Use Cases

*

Aktivitätsdiagramm für den Ablauf sämtlicher Use Cases

*

Aktivitätsdiagramm mit Swimlanes sind in der Regel hilfreich
für die Darstellung der Interaktion von Akteuren der Use Cases / User Stories

*

Abläufe der Kommunikation von Rechnerknoten (z.B. Client/Server)
in einem Sequenz- oder Aktivitätsdiagramm darstellen

*

Modellieren Sie des weiteren die Diagramme, die für das (eigene) Verständnis des
Softwaresystems hilfreich sind.

## 3.6 Entwurf

*

Detaillierte UML-Diagramme für relevante Softwarebausteine

## 3.7 Fehlerbehandlung

*

Mögliche Fehler / Exceptions auflisten

*

Fehlercodes / IDs sind hilfreich

*

Nicht nur Fehler technischer Art ("Datenbankserver nicht erreichbar") definieren, sondern auch im Hinblick auf
Kapitel 3.8 sind fachliche Fehler wie "Kunde nicht gefunden". "Nachricht wurde bereits gelöscht" o.ä.

## 3.8 Validierung

*

Relevante (Integrations)-Testfälle, die aus den Use Cases abgeleitet werden können

*

Testfälle für

*

Datenmodell

*

API

*

User Interface

*

Fokussieren Sie mehr auf Integrationstestfälle als auf Unittests

*

Es bietet sich an, die IDs der Use Cases / User Stories mit den Testfällen zu verbinden, so dass erkennbar ist, ob Sie
alle Use Cases getestet haben.

# 4 Projektorganisation 

## 4.1 Annahmen

*

Nicht durch den Kunden definierte spezifische Annahmen, Anforderungen und Abhängigkeiten

*

Verwendete Technologien (Programmiersprache, Frameworks, etc.)

*

Aufteilung in Repositories gemäß Software- und Systemarchitektur und Softwarebausteinen

*

Einschränkungen, Betriebsbedingungen und Faktoren, die die Entwicklung beeinflussen (Betriebssysteme,
Entwicklungsumgebung)

*

Interne Qualitätsanforderungen (z.B. Softwarequalitätsmerkmale wie z.B. Erweiterbarkeit)

## 4.2 Verantwortlichkeiten

*

Zuordnung von Personen zu Softwarebausteinen aus Kapitel "Systemübersicht" und "Softwarearchitektur"

*

Rollendefinition und Zuordnung
| Softwarebaustein | Person(en) |
|----------|-----------|
| Komponente A | Thomas Mustermann |

### Rollen

Überlegen Sie, ob es sinnvoll ist, wenn Sie die Rollen für
Product-Owner und Scrum-Master vergeben, wobei Sie bedenken
sollten, ob diese Rollen über den gesamten Projektzeitraum
aktiv sein werden. Neben diesen Rollen können folgende Rollen
sinnvoll sein:

#### Softwarearchitekt

Entwirft den Aufbau von Softwaresystemen und trifft Entscheidungen über das Zusammenspiel der Softwarebausteine.

#### Frontend-Entwickler

Entwickelt graphische oder andere Benutzerschnittstellen, insbesondere das Layout einer
Anwendung.

#### Backend-Entwickler

Implementiert die funktionale Logik der Anwendung. Hierbei werden zudem diverse Datenquellen und externe Dienste
integriert und für die Anwendung bereitgestellt.

#### DevOps-Engineer

Ist für die Repositories und das Deployment verantwortlich.

### Rollenzuordnung

| Name              | Rolle               |
|-------------------|---------------------|
| Thomas Mustermann | Frontend-Entwickler |

## 4.3 Grober Projektplan
-
Meilensteine

### Meilensteine

*

KW 43 (21.10)

*

Abgabe Pflichtenheft

*

KW 44 (28.10) / Projekt aufsetzen

*

Repository Struktur

*

KW 45 (4.11) / Implementierung

*

Implementierung #3 (Final)

*

KW 48 (18.12) / Abnahmetests

*

manuelle Abnahmetests

*

Präsentation / Software-Demo

# 5 Anhänge

## 5.1 Glossar

*

Definitionen, Abkürzungen, Begriffe

## 5.2 Referenzen

*

Handbücher, Gesetze

*

z.B. Datenschutzgrundverordnung

## 5.3 Index