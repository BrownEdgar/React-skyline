import React from "react";
import "./App.scss";
import { useState } from "react";

const file = "./images/Drivers/";

export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      team: "Mercedes-AMG Petronas F1 Team",
      driver1: "Lewis Hamilton",
      points1: 234,
      num1: 44,
      cob1: "United Kingdom",
      dob1: "January 07, 1985",
      podium1: 197,
      img1: file + "LewisHam.jpg",
      driver2: "George Russell",
      points2: 175,
      num2: 63,
      cob2: "United Kingdom",
      dob2: "February 15, 1998",
      podium2: 11,
      img2: file + "GeorgeRus.jpg",
      color: "#00A19C",
      about:
        "Mercedes’ modern F1 revival started with the creation of a works squad for 2010 - the platform for a meteoric rise up the Grand Prix order. The team generated huge excitement from the off with the sensational return of Michael Schumacher, but headlines soon followed on track: three podiums in their debut season, all via Nico Rosberg - who then claimed a breakthrough pole/victory double at China in 2012. The following season he was paired with Lewis Hamilton, the duo going on to stage some epic title battles as the Silver Arrows swept all before them to become one of the most dominant forces of the modern F1 era. And with Hamilton now partnered by the up-and-coming George Russell, Mercedes remain very much the team that everyone wants to beat…",
    },
    {
      id: 2,
      team: "Scuderia Ferrari",
      driver1: "Charles Leclerc",
      points1: 206,
      num1: 16,
      cob1: "Monaco",
      dob1: "October 16, 1997",
      podium1: 30,
      img1: file + "CharlesLec.jpg",
      driver2: "Carlos Sainz",
      points2: 200,
      num2: 55,
      cob2: "Spain",
      dob2: "September 01, 1994",
      podium2: 18,
      img2: file + "CarlosSai.jpg",
      color: "#A6051A",
      about:
        "For many, Ferrari and Formula 1 racing have become inseparable. The only team to have competed in every season since the world championship began, the Prancing Horse has grown from the humble dream of founder Enzo Ferrari to become one of the most iconic and recognised brands in the world. Success came quickly through the likes of Alberto Ascari and John Surtees, and continued – in amongst leaner times – with Niki Lauda in the 1970s and then Michael Schumacher in the 2000s, when Ferrari claimed a then unprecedented five consecutive title doubles, securing their status as the most successful and decorated team in F1 history...",
    },
    {
      id: 3,
      team: "Red Bull Racing",
      driver1: "Max Verstappen",
      points1: 575,
      num1: 1,
      cob1: "Netherlands",
      dob1: "September 30, 1997",
      podium1: 98,
      img1: file + "MaxVer.jpg",
      driver2: "Sergio Perez",
      points2: 285,
      num2: 11,
      cob2: "Mexico",
      dob2: "January 26, 1990",
      podium2: 35,
      img2: file + "SergioPer.jpg",
      color: "#003773",
      about:
        "Red Bull were no strangers to F1 - as sponsors - prior to formally entering as a works team in 2004. Nonetheless, the scale of their success over the following decade was staggering. After a first podium in 2006, the team hit their stride in 2009, claiming six victories and second in the constructors' standings. Over the next four seasons they were a tour de force, claiming consecutive title doubles between 2010 and 2013, with Sebastian Vettel emerging as the sport's youngest quadruple champion. Now they are recapturing that glory with an equally exciting talent – one named Max Verstappen…",
    },

    {
      id: 4,
      team: "McLaren F1 Team",
      driver1: "Lando Norris",
      points1: 205,
      num1: 4,
      cob1: "United Kingdom",
      dob1: "November 13, 1999",
      podium1: 98,
      img1: file + "LandoNor.jpg",
      driver2: "Oscar Piastri",
      points2: 97,
      num2: 11,
      cob2: "Australia",
      dob2: "March 06, 2001",
      podium2: 2,
      img2: file + "OscarPia.jpg",
      color: "#FF8000",
      about:
        "Since entering the sport in 1966 under the guidance and restless endeavour of eponymous founder Bruce, McLaren's success has been nothing short of breathtaking. Five glittering decades have yielded countless victories, pole positions and podiums, not to mention eight constructors' championships. What's more, some of the sport's greatest drivers made their names with the team, including Emerson Fittipaldi, Ayrton Senna, Mika Hakkinen and Lewis Hamilton...",
    },
    {
      id: 5,
      team: "Alpine F1 Team",
      driver1: "Esteban Ocon",
      points1: 58,
      num1: 31,
      cob1: "France",
      dob1: "September 17, 1996",
      podium1: 3,
      img1: file + "EstebanOco.jpg",
      driver2: "Pierre Gasly",
      points2: 62,
      num2: 10,
      cob2: "France",
      dob2: "February 07, 1996",
      podium2: 4,
      img2: file + "PierreGas.jpg",
      color: "#005BA9",
      about:
        "Alpine may be a relatively new name to Formula 1, but Renault’s famous sportscar arm has plenty of motorsport heritage. The 2021 rebrand of the team marked the next step in Renault’s F1 revival, begun in 2016 with the takeover of the then-Lotus squad. Already race winners in their new guise, regular podiums and a tilt at the title must be their next target…",
    },
    {
      id: 6,
      team: "Aston Martin Cognizant F1 Team",
      driver1: "Fernando Alonso",
      points1: 206,
      num1: 14,
      cob1: "Spain",
      dob1: "July 29, 1981",
      podium1: 106,
      img1: file + "FernandoAlo.jpg",
      driver2: "Lance Stroll",
      points2: 74,
      num2: 18,
      cob2: "Canada",
      dob2: "October 29, 1998",
      podium2: 3,
      img2: file + "LanceStr.jpg",
      color: "#00665E",
      about:
        "Aston Martin’s original Formula 1 foray – over half a century ago – lasted just five races. This time, though, it’s serious. This F1 squad are no strangers to success, having won in their original guise of Jordan and most recently as Racing Point in 2020. Renowned for their ability to punch above their weight, and now with a two-time champion leading their driver line-up, Aston Martin are very much a team to watch…",
    },
    {
      id: 7,
      team: "AlphaTauri",
      driver1: "Daniel Rocciardo",
      points1: 6,
      num1: 4,
      cob1: "Australia",
      dob1: "July 01, 1989",
      podium1: 32,
      img1: file + "DanielRic.jpg",
      driver2: "Yuki Tsunoda",
      points2: 17,
      num2: 22,
      cob2: "Japan",
      dob2: "April 11, 2000",
      podium2: "N/A",
      img2: file + "YukiTsu.jpg",
      color: "#F1F3F4",
      about:
        "Established in 2006 as a squad in which young drivers from Red Bull’s prodigious talent pool could cut their F1 teeth, AlphaTauri – originally named Toro Rosso – were formed from the ashes of the plucky Minardi team. Sebastian Vettel gave validity to the approach almost immediately, delivering a fairy-tale win in 2008, before going on to enjoy world championship success with parent team Red Bull Racing. Today the ethos of nurturing talent still holds true, though the Italian squad are no longer simply a ‘B team’ but a constructor in their own right...",
    },
    {
      id: 8,
      team: "Alfa Romeo F1 Team",
      driver1: "Valtteri Bottas",
      points1: 10,
      num1: 77,
      cob1: "Finland",
      dob1: "August 28, 1989",
      podium1: 67,
      img1: file + "ValtteriBot.jpg",
      driver2: "Zhou Guanyu",
      points2: 6,
      num2: 24,
      cob2: "China",
      dob2: "April 05, 1999",
      podium2: "N/A",
      img2: file + "ZhouGua.jpg",
      color: "#A50F2D",
      about:
        "The name Alfa Romeo boasts Formula 1 connections dating back to the championship’s inception in 1950. Fast forward to the 21st century and Italian flare combines with Swiss sensibilities in a new era for the team formerly known as Sauber.Having enjoyed considerable success in world sportscars, where he helped nurture the emerging talents of future F1 stars Michael Schumacher and Heinz-Harald Frentzen, Peter Sauber guided his eponymous squad into F1 in 1993.The team has since established itself as a mainstay of the grid, becoming race winners under BMW’s brief ownership, and developing a well-earned reputation not only for producing competitive cars, but also for developing young drivers.",
    },
    {
      id: 9,
      team: "	MoneyGram Haas F1 Team",
      driver1: "Kevin Magnussen",
      points1: 3,
      num1: 20,
      cob1: "Denmark",
      dob1: "October 05, 1992",
      podium1: 1,
      img1: file + "KevinMag.jpg",
      driver2: "Nico Hulkenberg",
      points2: 9,
      num2: 27,
      cob2: "Germany",
      dob2: "August 19, 1987",
      podium2: "N/A",
      img2: file + "NicoHul.jpg",
      color: "#AEAEAE",
      about:
        "The youngest team on the grid, Haas made their highly impressive debut in 2016, and in the process became the first all-American-led F1 squad in three decades. Founded by industrialist Gene Haas, they are based in the United States on the same Kannapolis, North Carolina facility as his championship-winning NASCAR Sprint Cup Series team, Stewart-Haas Racing. The Ferrari-powered team, led by the charismatic Guenther Steiner, also have a UK factory in Banbury…",
    },
    {
      id: 10,
      team: "Williams Racing",
      driver1: "Alexander Albon",
      points1: 27,
      num1: 23,
      cob1: "United Kingdom",
      dob1: "March 23, 1996",
      podium1: 2,
      img1: file + "AlexanderAlb.jpg",
      driver2: "Logan Sargeant",
      points2: 1,
      num2: 2,
      cob2: "United States",
      dob2: "December 31, 2000",
      podium2: "N/A",
      img2: file + "LoganSar.jpg",
      color: "#00A3E0",
      about:
        "Williams Racing, a legendary name in Formula One, has undergone transformations to regain its competitive edge. With a blend of youth and experience, including the talented George Russell and Nicholas Latifi, the team is on a journey to reclaim its position among the top contenders.",
    },
  ]);

  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleTeamChange = (e) => {
    const teamName = e.target.value;
    const teamData = data.find((team) => team.team === teamName);
    setSelectedTeam(teamData);
  };

  return (
    <div className="App">
      <form>
        <select onChange={handleTeamChange}>
          <option selected disabled>
            Select a team
          </option>
          {data.map((team) => (
            <option
              style={{ color: team.color }}
              key={team.id}
              value={team.team}
            >
              {team.team}
            </option>
          ))}
        </select>
      </form>

      {selectedTeam ? (
        <div className="App__content">
          <h1 style={{ color: selectedTeam.color }}>{selectedTeam.team}</h1>
          <div className="pilot">
            <img src={selectedTeam.img1} alt={selectedTeam.driver1} />
            <div className="driver-info">
              <p>
                <span style={{ color: selectedTeam.color }}>Team: </span>
                {selectedTeam.team}
              </p>
              <p>
                <span style={{ color: selectedTeam.color }}>Name: </span>
                {selectedTeam.driver1}
              </p>
              <p>
                <span style={{ color: selectedTeam.color }}>Number: </span>
                {selectedTeam.num1}
              </p>
              <p>
                <span style={{ color: selectedTeam.color }}>Points: </span>
                {selectedTeam.points1}
              </p>
              <p>
                <span style={{ color: selectedTeam.color }}>Podiums: </span>
                {selectedTeam.podium1}
              </p>
              <p>
                <span style={{ color: selectedTeam.color }}>Country: </span>
                {selectedTeam.cob1}
              </p>
              <p>
                <span style={{ color: selectedTeam.color }}>
                  Date of Birth:
                </span>
                {selectedTeam.dob1}
              </p>
            </div>
          </div>
          <div className="pilot">
            <img src={selectedTeam.img2} alt={selectedTeam.driver1} />
            <div className="driver-info">
              <p>
                <span style={{ color: selectedTeam.color }}>Team: </span>
                {selectedTeam.team}
              </p>
              <p>
                <span style={{ color: selectedTeam.color }}>Name: </span>
                {selectedTeam.driver2}
              </p>
              <p>
                <span style={{ color: selectedTeam.color }}>Number: </span>
                {selectedTeam.num2}
              </p>
              <p>
                <span style={{ color: selectedTeam.color }}>Points: </span>
                {selectedTeam.points2}
              </p>
              <p>
                <span style={{ color: selectedTeam.color }}>Podiums: </span>
                {selectedTeam.podium2}
              </p>
              <p>
                <span style={{ color: selectedTeam.color }}>Country: </span>
                {selectedTeam.cob2}
              </p>
              <p>
                <span style={{ color: selectedTeam.color }}>
                  Date of Birth:
                </span>
                {selectedTeam.dob2}
              </p>
            </div>
          </div>
          <div className="about">
            <h2 style={{ color: selectedTeam.color }}>About</h2>
            <p>{selectedTeam.about}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
