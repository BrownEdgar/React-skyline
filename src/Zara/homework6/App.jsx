import React, { useRef, useState } from 'react'
import './App.scss'

export default function App() {

    const [axcan, setAxcan] = useState([])
    const [axcanner , setAxcanner] = useState([
      {
        id: 1,
        name:"«Մայրաքաղաքային»",
        receipt: ['Տավարի միս - 400գ',
            'Կարտոֆիլ - 3 հատ',
            'Գազար - 3 հատ',
            'Պահածոյացված կանաչ ոլոռ - 200գ․',
            'Թթու վարունգ - 4 հատ',
            'Ձու - 4 հատ',
            'Մայոնեզ 200գ․ կամ Թթվասեր - 200գ․',
            'Թթվասեր - 200գ․'],
        prepMethod:['1․ Տավարի միսը, Կարտոֆիլը, Գազար, Ձուն խաշել, որից հետո կտրատել խորանարդաձև։',
            '2․ Թթու վարունգը կտրատել խորանարդաձև։',
           ' 3․ Կտրատած բոլոր բաղադրիչները Տավարի միսը, Կարտոֆիլը, Գազար, Ձուն, Թթու վարունգը խառնել իրար։',
            '4․ Մատուցելուց առաջ ավելացնել թթվասերը կամ մայոնեզը։'],
        img:"./images/Zara/homework6/axcanMayraqaxaqayin.jpg",
        video: "https://www.youtube.com/embed/yW6Ww7yRU8Q?si=pixfoJo5pUhN_AUF"
    },
    {
      id: 2,
      name:"«Ցեզր» ավանդական",
      receipt: ['Մառոլ 1 կապ',
            'Հավի ֆիլե 300գ',
            'Լոլիկ 1 հատ',
            '6 հատ սպիտակ հաց',
            'Կարագ 2 ճաշի գդալ',
            'Սխտոր 2 պճեղ',
            'Պարմեզան պանիր ըստ ճաշակի'
          ],
      prepMethod:['Լվանալ, չորացնել, որից հետո մանր կտրատել մառոլի տերևները։',
            'Տաք թավայի մեջ լցնել 1 ջաշի գդալ կարագ։ Երբ կարագաը ամբողջությամբ հալվի լցնել մանր կտրատված 1 պճեղ սխտորը։',
           ' Հավի կրծքամիսը կտրատել կտորներով մոտավոր 1x3սմ չափով։ Կտրատված հավի կրծքամիսը լցնել թավայի մեջ և տապակել սխտորի հետ մոտ 10 րոպե, մինչև հավի միսը ստանա ոսկեգույն տեսը։ Տապակելուց հետո վերցնել թավան գազօջախից։',
            'Նույն թավայի մեջ նորից ավելացնել 1 ճաշի գդալ կարագ և երկրորդ սխտորի պճեղը։ Այդ ընթացքում կտրատել հացը՝ փոքր խորանարդիկների տեսքով։ Կտրատված հացի խորանարդիկները լցնել թավայի մեջ և տապակել մինչև ստանան ոսկեգույն տեսք։ Ցանկալի է անդադար խառնել, որպեսզի չվառվեն։',
          'Մառոլի տերևների վրա լցնել տապակած հավի կրծքամիսը, բարակ շերտերով կտրատված լոլիկը, որից հետո խառնել: Աղցանի վրան լցնել հացից ստացված սուխարիկները և քերած պանիրը։'
        ],
      img:"./images/Zara/homework6/axcanCezr.jpg",
      video: "https://www.youtube.com/embed/oY_tOsGbQNs?si=CJAbW0pNu4lEUC_z"
    },
    {
      id: 3,
      name:"Աղցան կիվիով եւ հավի մսով",
      receipt: ['1-2 հատ հավի միս,',
            'Պանիր 120գ,',
            'Վարունգի 1 հատ',
            'Կիվի 2-3 հատ',
            'Աղ',
            'Պղպեղ',
            '2-3 ճաշի գդալ մայոնեզ'
          ],
      prepMethod:[
          'Հավի միսը եփել, կտրատել խորանարդաձեւ, ավելացնել պինդ պանիրը խորանարդաձեւ կտրատած:',
            'Թարմ վարունգը լվանալ եւ կտրատել խորանարդաձեւ:',
           ' Կիվին մաքրել, մանրացնել եւ ավելացնել աղցանին: Աղցանին ցանել աղ եւ պղպեղ, ավելացնել մայենեզը եւ լավ խառնել:',
            
        ],
      img:"./images/Zara/homework6/axcanKiviov.jpg",
      video: "https://www.youtube.com/embed/qHDdLBIwQf4?si=cC8mN6kiXgjS-OPk"
    }
  ])

  const handleChange = (e)=>{
    setAxcan(e.target.value)

  }
  return (
    <div className='App'>
      <select name="axcan" id="axcan" onChange={handleChange} defaultValue="աղցաններ ․․․">
        {
        axcanner.map(axcan =>{
          return (
            <option value={axcan.name} key={axcan.id}> {axcan.name}</option>
          )
        })
      }
      </select>
      {
        axcanner.map(elem =>{
          if(elem.name === axcan){
            return (
              <div key={elem.id} className='second'>
                <h1>{elem.name}</h1>
                <img src={elem.img} alt="img" />
                <h3>ԲԱՂԱԴՐՈՒԹՅՈՒՆԸ</h3>
                  <>{
                    elem.receipt.map((step, index) =>{
                      return (<p key={index}>{step}</p>)
                    })
                  }</>
                <h3>ՊԱՏՐԱՍՏՄԱՆ ԵՂԱՆԱԿԸ</h3>
                  <>{
                      elem.prepMethod.map((step, index) =>{
                        return (<p key={index}>{step}</p>)
                      })
                    }</>
                {/* <p>{axcan.prepMethod}</p> */}
                {/* <iframe width="560" height="315" src={axcan.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe> */}
              </div>
          )

          }
          
        })
      }
      
    </div>
  )
}
