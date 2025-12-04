import React from 'react'
import './Trekking.css'

const Trekking = () => {
  const divStyle={
    color: 'black',
    fontSize:"30px",
    fontFamily: 'Arial',
    
  }
  const paraStyle={
    color: 'black',
    fontSize:"20px",
    fontFamily: 'Arial',

  }

  return (
    <div>
      <div class="treking-div">
        <div class="img-para">
          <div class="img-div">
            <img src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600" alt="NotFOund" class="tr-pic" />
          </div>
          <div class="para-div">
            <p style={divStyle}>UTTRAKHAND</p>
            <p style={paraStyle}>Uttarakhand, known as the "Land of Gods," is a premier trekking destination in India, offering a unique blend of adventure, nature, and spirituality. Nestled in the Indian Himalayas, the state boasts an array of trekking routes that cater to all levels of trekkers. From the famous Valley of Flowers trek, which is a UNESCO World Heritage site, to the challenging Kedarkantha trek, Uttarakhand’s treks take you through lush forests, high-altitude meadows, and breathtaking mountain landscapes. The Garhwal and Kumaon regions are home to some of the most picturesque treks, with views of towering peaks like Nanda Devi, Trishul, and Shivling. These treks also offer glimpses into the state's rich cultural heritage, with ancient temples, traditional villages, and friendly local communities. Whether you seek serenity in the snow-capped mountains or an adrenaline rush on rugged trails, trekking in Uttarakhand is an experience that promises lasting memories.</p>
          </div>
        </div>

        <div class="img-para">
          <div class="para-div">
            <p style={divStyle}><b>MANALI</b></p>
            <p style={paraStyle}>Manali, located in Himachal Pradesh, is a popular trekking destination known for its stunning landscapes and diverse trails. Some key treks include:</p>
            <ol style={paraStyle}>
              <li>Hampta Pass Trek: A moderate trek connecting Kullu Valley to Spiti Valley, offering views of snow-capped peaks and alpine meadows at an altitude of 14,000 feet.</li>
              <li>Solang Valley Trek: A short, easy trek ideal for beginners, offering beautiful views of the valley and surrounding mountains.</li>
              <li>Beas Kund Trek: A moderate trek to the origin of the Beas River, with views of peaks like Hanuman Tibba and Friendship Peak.</li>
              <li>Great Himalayan National Park Trek: A nature-filled trek through a UNESCO World Heritage Site, showcasing diverse wildlife and untouched beauty.</li>
              <li>Chandrakhani Pass Trek: A moderate trek offering panoramic views of the Pir Panjal and Dhauladhar ranges at 12,000 feet.</li>
              <li>Each trek offers a unique adventure with breathtaking Himalayan views and varied difficulty levels</li>
            </ol>
            
          </div>
          <div class="img-div">
            <img src="https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Not Found" class="tr-pic" />
          </div>
        </div>
        <div class="img-para">
          <div class="img-div">
            <img src="https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Not Found" class="tr-pic" />
          </div>
          <div class="para-div">
            <p style={divStyle}><b>SIKKIM</b></p>
            <section>
              <p style={paraStyle}>Sikkim, a captivating destination in northeastern India, offers a rich blend of natural beauty, spiritual significance, and adventure. Gangtok, the capital city, is a vibrant hub known for its stunning views of Mount Kanchenjunga, the third-highest peak in the world. The city is dotted with attractions like the Rumtek Monastery, Enchey Monastery, and the Tsomgo Lake, a glacial lake surrounded by snow-capped mountains. The nearby Nathula Pass, on the Indo-China border, provides incredible views and an experience of being on one of the world’s highest motorable roads.</p>
              <p style={paraStyle}>For those seeking tranquil natural beauty, places like Pelling offer mesmerizing vistas of Kanchenjunga, along with historical sites such as the Pemayangtse Monastery and Khecheopalri Lake, revered for its spiritual significance. Yuksom, the first capital of Sikkim, serves as the base for trekking adventures like the Dzongri and Kanchenjunga treks, surrounded by lush forests and spectacular landscapes.</p>
              <p style={paraStyle}>In the northern part of the state, Lachung is a picturesque village that leads to the Yumthang Valley, known as the "Valley of Flowers," famous for its alpine flowers and hot springs. Zuluk, with its unique zigzag roads, offers panoramic views of the Himalayan range and remains an offbeat destination for those seeking solitude. Ravangla, another peaceful town, is located between Gangtok and Pelling and is ideal for those who enjoy serene hill stations and hiking trails.</p>
            </section>
          </div>
        </div>
        <div class="img-para">
         <div class="para-div">
          <p style={divStyle}><b>JAMMU & KASHMIR</b></p>
        <section>
          <p style={paraStyle}>Kashmir, often referred to as "Paradise on Earth," is a breathtakingly beautiful destination known for its serene landscapes, vibrant culture, and majestic mountains. Here’s a glimpse of the beauty that makes Kashmir a must-visit:</p>
          <ol style={paraStyle}>
            <li>Srinagar and Dal Lake: Srinagar, the summer capital of Jammu and Kashmir, is famous for the stunning Dal Lake, where houseboats and Shikara rides offer a peaceful experience amidst picturesque surroundings. The lake is surrounded by the majestic Himalayan mountains, adding to its charm.</li>
            <li>Gulmarg: Known as the "Meadow of Flowers," Gulmarg is a popular hill station and ski destination. The vast meadows are covered in colorful wildflowers in summer, while in winter, the snow-capped mountains create a perfect winter wonderland for skiing and snowboarding.</li>
            <li>Pahalgam: Nestled in the Anantnag district, Pahalgam is a tranquil town offering stunning views of the Lidder River and surrounding pine forests. It serves as a base for the Amarnath Yatra and is ideal for nature lovers, with numerous treks and beautiful landscapes.</li>
            <li>Sonamarg: Known as the "Meadow of Gold," Sonamarg is an enchanting valley with lush green meadows, crystal-clear streams, and snow-clad peaks. It’s a perfect spot for adventure activities like trekking, fishing, and camping.</li>
          </ol>
        </section>
         </div>
         <div class="img-div">
         <img src="https://images.pexels.com/photos/2450296/pexels-photo-2450296.jpeg?auto=compress&cs=tinysrgb&w=600" alt="not found" class="tr-pic" />
         </div>
        </div>
      </div>
    </div>
  )
}

export default Trekking
