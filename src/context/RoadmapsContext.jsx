import { createContext, useState, useContext } from "react";

// Create a context to share the roadmap data
const RoadmapContext = createContext();



export const RoadmapProvider = ({ children }) => {
  const [roadmaps, setRoadmaps] = useState([
    {
      "id": 1,
      "title": "Construcția Imperiului Tău de Lemn",
      "description": "Bine ai venit în aventura ta antreprenorială! Ești pregătit să începi o călătorie captivantă pentru a-ți construi propriul atelier de prelucrare a lemnului.",
      "objective": "Înființarea unui gater funcțional și sustenabil în Iași, care să răspundă cerințelor pieței locale.",
      "totalXP": 7600,
      "quests": [
        {
          "id": 1,
          "title": "Studiază piața locală și definește-ți nișa",
          "xp": 1400,
          "objective": "Înțelegerea pieței și identificarea oportunităților care să-ți permită să te diferențiezi.",
          "tasks": [
            {
              "id": 1,
              "title": "Analizează cererea locală pentru produse din lemn",
              "description": "Cercetează cerințele pieței locale. Descoperă dacă există cerere pentru lemn tăiat la dimensiuni, mobilier personalizat sau produse artizanale.",
              "xp": 400,
              "objective": "Crearea unui raport cu cererea locală.",
              "documentsRequired": [],
              "location": "Iași (vizitează magazine, ateliere, piețe locale)",
              "isDone": false
          },
          {
              "id": 2,
              "title": "Identifică concurența din zona Iași",
              "description": "Realizează un studiu detaliat al competitorilor. Notează tipurile de produse și servicii pe care le oferă, precum și punctele lor forte și slabe.",
              "xp": 500,
              "objective": "Finalizarea unui raport despre concurență.",
              "documentsRequired": [],
              "location": "Iași (vizitează alte gatere și ateliere)",
              "isDone": false
          },
          {
              "id": 3,
              "title": "Află preferințele publicului țintă",
              "description": "Gândește-te la clienții ideali – de la meșteșugari și mici producători de mobilă, până la pasionați de proiecte DIY.",
              "xp": 500,
              "objective": "Crearea unui profil detaliat al clientului ideal.",
              "documentsRequired": [],
              "location": "Acasă, birou",
              "isDone": false
            }
          ]
        },
        {
          "id": 2,
          "title": "Planifică un buget atent și obține finanțarea necesară",
          "xp": 1400,
          "objective": "Crearea unui buget realist pentru începerea activității și identificarea surselor de finanțare.",
          "tasks": [
            {
              "id": 1,
              "title": "Stabilește un buget realist",
              "description": "Identifică echipamentele esențiale și prioritizează cheltuielile inițiale.",
              "xp": 600,
              "objective": "Realizarea unui buget detaliat.",
              "documentsRequired": ["Listă de cheltuieli inițiale"],
              "location": "Acasă, birou",
              "isDone": false
            },
            {
              "id": 2,
              "title": "Aplică pentru finanțare",
              "description": "Documentează-te despre fondurile disponibile, cum ar fi cele europene sau programele naționale.",
              "xp": 800,
              "objective": "Depunerea unei cereri de finanțare.",
              "documentsRequired": [
                "Planul de afaceri",
                "Documente legale ale firmei",
                "Dovezi de cofinanțare"
              ],
              "location": "Online (platforme pentru fonduri europene)",
              "isDone": false
            }
          ]
        },
        {
          "id": 3,
          "title": "Echiparea atelierului și amenajarea spațiului",
          "xp": 1400,
          "objective": "Procurarea echipamentelor necesare și optimizarea spațiului de lucru.",
          "tasks": [
            {
              "id": 1,
              "title": "Achiziționează echipamente de prelucrare",
              "description": "Cumpără mașini și unelte de calitate, esențiale pentru funcționarea atelierului tău.",
              "xp": 700,
              "objective": "Achiziționarea echipamentelor.",
              "documentsRequired": ["Facturi și certificate de garanție"],
              "location": "Furnizori de echipamente sau magazine online",
              "isDone": false
            },
            {
              "id": 2,
              "title": "Organizează spațiul pentru eficiență",
              "description": "Configurează hala de lucru astfel încât să maximizezi eficiența și siguranța.",
              "xp": 400,
              "objective": "Amenajarea spațiului pentru prelucrare.",
              "documentsRequired": [],
              "location": "Hala de prelucrare",
              "isDone": false
            },
            {
              "id": 3,
              "title": "Creează un spațiu de depozitare eficient",
              "description": "Asigură un loc dedicat pentru depozitarea lemnului brut și a produselor finite.",
              "xp": 300,
              "objective": "Organizarea spațiului de stocare.",
              "documentsRequired": [],
              "location": "Atelierul tău",
              "isDone": false
            }
          ]
        },
        {
          "id": 4,
          "title": "Obține autorizațiile necesare ",
          "xp": 1400,
          "objective": "Asigurarea legalității funcționării afacerii.",
          "tasks": [
            {
              "id": 1,
              "title": "Autorizația de funcționare",
              "description": "Obține avizele necesare de la Primărie. Asigură-te că locația respectă cerințele legale.",
              "xp": 600 ,
              "objective": "Obținerea autorizației de funcționare.",
              "documentsRequired": ["Certificat de urbanism","Planul activității"],
              "location": "Primăria locală",
              "isDone": false
            },
            {
              "id": 2,
              "title": "Certificări de mediu",
              "description": "Aliniază-te standardelor de mediu pentru protecția ecosistemelor.",
              "xp": 400,
              "objective": "Obținerea certificărilor de mediu.",
              "documentsRequired": ["Certificat de conformitate"],
              "location": "Agenția de Mediu",
              "isDone": false
            },
            {
              "id": 3,
              "title": "Înregistrare fiscală la ANAF",
              "description": "Asigură-te că poți opera legal prin înregistrarea activității tale la ANAF.",
              "xp": 400,
              "objective": "Înregistrarea fiscală.",
              "documentsRequired": ["Înregistrarea fiscală","Înregistrarea fiscală"],
              "location": "ANAF",
              "isDone": false
            }
          ]
        },
        {
          "id": 5,
          "title": "Lansarea oficială a gaterului",
          "xp": 2000,
          "objective": "Organizarea unui eveniment de deschidere și atragerea primilor clienți.",
          "tasks": [
            {
              "id": 1,
              "title": "Organizează un eveniment de lansare",
              "description": "Invită potențiali clienți, colaboratori și parteneri pentru a-ți prezenta serviciile.",
              "xp": 1000 ,
              "objective": "Realizarea unui eveniment de succes.",
              "documentsRequired": ["Facturi pentru organizare","Invitații"],
              "location": "Atelierul tău",
              "isDone": false
            },
            {
              "id": 2,
              "title": "Promovare locală și online",
              "description": "Folosește publicitatea pentru a atrage clienți. Creează campanii online și reclame locale.",
              "xp": 1000,
              "objective": "Crearea unei campanii publicitare.",
              "documentsRequired": ["Crearea unei campanii publicitare","Buget publicitar"],
              "location": "Online și local",
              "isDone": false
            }            
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "Atelierul de Vis: Misiunea Succesului",
      "description": "Ai început călătoria pentru a-ți înființa un atelier de croitorie și, pentru a reuși, vei parcurge o serie de questuri și taskuri care te vor ajuta să construiești o afacere de succes. Pe parcurs, vei câștiga XP pentru fiecare task finalizat și vei avea ocazia să îndeplinești obiective importante care te vor duce mai aproape de visul tău. Fii pregătit pentru provocări, cercetări și documentație, deoarece pentru fiecare pas vei avea de colectat documentele necesare și de vizitat instituțiile corespunzătoare.",
      "objective":"Deschiderea unui atelier de croitorie și obținerea finanțării europene!",
      "quests": [{
        "id": 1,
        "title": "Definirea Conceptului și Publicului Țintă",
        "xp": 1400,
        "objective": "Crearea unui plan clar pentru atelierul tău, definirea serviciilor și înțelegerea publicului țintă.",
        "tasks": [
          {
            "id": 1,
            "title": "Stabilește Tipul de Atelier",
            "description": "Alege tipul atelierului pe care vrei să-l deschizi. Poate fi o croitorie personalizată, de reparații sau pentru creație vestimentară. Analizează-ți pasiunea și piețele existente pentru a decide ce servicii vei oferi.",
            "xp": 350 ,
            "objective": "Identificarea tipului de atelier (croitorie la comandă, reparații, design personalizat etc.)",
            "documentsRequired": [],
            "location": "Acasa/birou",
            "isDone": false
          },
          {
            "id": 2,
            "title": "Identifică Publicul Țintă",
            "description": "Realizează o cercetare amănunțită despre clienții ideali. Ce vârste au? Ce profesii? Ce tip de produse caută? Aceasta va fi cheia succesului tău în personalizarea ofertelor.",
            "xp": 350,
            "objective": "Crearea unui profil detaliat al clientului țintă.",
            "documentsRequired": [],
            "location": "Acasa/birou",
            "isDone": false
          },
          {
            "id": 3,
            "title": "Studiază Piața și Concurența",
            "description": "Mergi în teritoriu și analizează ce ateliere există deja. Ce oferte au? Cum poți să te diferențiezi? Cu cât ai mai multe informații, cu atât vei fi mai pregătit să atragi clienți.",
            "xp": 700,
            "objective": "Realizarea unui raport detaliat despre piața locală și concurență.",
            "documentsRequired": [],
            "location": "Iași (vizitează atelierele concurente), acasă pentru cercetare online.",
            "isDone": false
          }
        ]
      },
      {
        "id": 2,
        "title": "Stabilește Locația și Bugetul Inițial",
        "xp": 1400,
        "objective": "Alegerea locației potrivite pentru atelierul tău și stabilirea unui buget detaliat pentru cheltuielile inițiale.",
        "tasks": [
          {
            "id": 1,
            "title": "Alege Locația Atelierului",
            "description": "Căută locația ideală pentru atelier. Ai nevoie de o zonă cu trafic pietonal sau acces facil pentru clienți. Ia în considerare chiria și facilitățile zonei.",
            "xp": 500  ,
            "objective": "Găsirea locației perfecte pentru atelier.",
            "documentsRequired": ["Contractul de închiriere","Actul de identitate (al tău și al proprietarului)","Certificatul de înregistrare al firmei tale"],
            "location": "Certificatul de înregistrare al firmei tale",
            "isDone": false
          },
          {
            "id": 2,
            "title": "Planifică Bugetul Detaliat",
            "description": "Crează un plan financiar. Detaliază cheltuielile pentru chirie, echipamente, salarii și alte costuri. Planificarea este cheia succesului!",
            "xp": 350,
            "objective": "Realizarea unui buget complet pentru deschiderea atelierului.",
            "documentsRequired": ["Estimarea cheltuielilor pentru echipamente și amenajarea spațiului.","Estimarea veniturilor și a cheltuielilor lunare."],
            "location": "Acasa/birou",
            "isDone": false
          },
          {
            "id": 3,
            "title": "Studiază Piața și Concurența",
            "description": "Mergi în teritoriu și analizează ce ateliere există deja. Ce oferte au? Cum poți să te diferențiezi? Cu cât ai mai multe informații, cu atât vei fi mai pregătit să atragi clienți.",
            "xp": 700,
            "objective": "Realizarea unui raport detaliat despre piața locală și concurență.",
            "documentsRequired": [],
            "location": "Iași (vizitează atelierele concurente), acasă pentru cercetare online.",
            "isDone": false
          }
        ]
      },
    ]
    },
    {
      "id": 3,
      "title": "Construcția Imperiului Tău de Piele",
      "description": "Similar roadmap as above for a leather business.",
      "quests": []
    },
    {
      "id": 4,
      "title": "Construcția Imperiului Tău de Textile",
      "description": "Similar roadmap as above for a textile business.",
      "quests": []
    }
  ]);

  const updateTaskStatus = (roadmapId, questId, taskId) => {
    // Update the roadmap tasks with the toggled `isDone` status
    setRoadmaps((prevRoadmaps) =>
      prevRoadmaps.map((roadmap) =>
        roadmap.id === roadmapId
          ? {
              ...roadmap,
              quests: roadmap.quests.map((quest) =>
                quest.id === questId
                  ? {
                      ...quest,
                      tasks: quest.tasks.map((task) =>
                        task.id === taskId
                          ? { ...task, isDone: !task.isDone } // Toggle isDone value
                          : task
                      ),
                    }
                  : quest
              ),
            }
          : roadmap
      )
    );
  };

  const calculateTotalXP = () => {
    let totalXP = 0;
    roadmaps.forEach((roadmap) => {
      roadmap.quests.forEach((quest) => {
        quest.tasks.forEach((task) => {
          if (task.isDone) {
            totalXP += task.xp;
          }
        });
      });
    });
    return totalXP;
  };

  return (
    <RoadmapContext.Provider
      value={{
        roadmaps,
        updateTaskStatus,
        calculateTotalXP,
      }}
    >
      {children}
    </RoadmapContext.Provider>
  );
};
export const useRoadmapsContext = ()=>{
    const context = useContext(RoadmapContext);
    if(!context){
        throw new Error("useRoadmapsContext must be used within a RoadmapProvider")
    }
    return context
}
