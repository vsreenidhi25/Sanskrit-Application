"use client"; // Add this line at the top

import React, { useState } from 'react';
import Link from "next/link";

const BooksPage = () => {
  const [visibleSection, setVisibleSection] = useState<number | null>(null);

  const toggleVisibility = (section: number) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  const openUrl = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-indigo-50 via-orange-100 to-purple-50 flex flex-col items-center py-10">
    {/* Page Title with Styling */}
    <h1 className="text-4xl font-extrabold text-indigo-800 mb-8 tracking-wide drop-shadow-md">Pustakani</h1>

    {/* Section 1: Stories of Srimad Bhagavatam Part-1 */}
    <button
      onClick={() => toggleVisibility(1)}
      className="self-start mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:from-blue-800 hover:to-teal-700 transition duration-300"
    >
        1. Stories of Srimad Bhagavatam Part-1
      </button>

      {/* Conditional Section 1 Content */}
      {visibleSection === 1 && (
        <div className="mt-6 w-full max-w-3xl grid grid-cols-[2fr_1fr] gap-x-8 gap-y-6 bg-white p-6 rounded-lg shadow-lg border border-indigo-200">
          <h1 className="text-xl font-medium text-indigo-900">1. Beginning of Srimad Bhagvatam</h1>
          <button
            onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/01_-_Beginning_of_Srimad_Bhagvatam.pdf')}
            className="px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700"
          >
            Open PDF
          </button>

          {/* Story 2 */}
          <h1 className="text-lg ">2. The Heinous act of Drona's son</h1>
          <button
            onClick={() => openUrl("https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/02_-_The_Heinous_act_of_Drona%27s_son.pdf")}
            className="px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700"
          >
            Open PDF
          </button>

          
            <h1 className="text-lg ">3. The Son of Drona Punished-01</h1>
            <button
              onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/03_-_The_Son_of_Drona_Punished-01.pdf')}
              className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
            >
              Open PDF
            </button>
          

        
            <h1 className="text-lg ">4. How Pariksit Received the Age of Kali</h1>
            <button
              onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/04_-_How_Pariksit_Received_the_Age_of_Kali.pdf')}
              className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
            >
              Open PDF
            </button>
          

        <h1 className="text-lg ">5. Maharaja Pariksit Cursed by a Brahmana Boy</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/05_-_Maharaja_Pariksit_Cursed_by_a_Brahmana_Boy.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
  

      <h1 className="text-lg ">6. The Appearance of Sukadeva Gosvami</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/06_-_The_Appearance_of_Sukadeva_Gosvami.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
      

      <h1 className="text-lg ">7. Glories of Bhagavatam</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/07_-_Glories_of_Bhagavatam.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
      

      
      <h1 className="text-lg ">8. Creation by Brahma</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/08_-_Creation_by_Brahma.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
      
       <h1 className="text-lg ">9. Brahma gives up his Body</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/09_-_Brahma_gives_up_his_Body.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
        <h1 className="text-lg ">10. The Appearance of Lord Varaha</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/10_-_The_Appearance_of_Lord_Varaha.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
        <h1 className="text-lg ">11. Pregnancy of Diti in the Evening</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/11_-_Pregnancy_of_Diti_in_the_Evening.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>

     
        <h1 className="text-lg ">12. The Kingdom of God</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/12_-_The_Kingdom_of_God.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
  

      
        <h1 className="text-lg ">13. Jaya-Vijaya </h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/13_-_Jaya-Vijaya.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
     
        <h1 className="text-lg ">14. Vaikuntha Gatekeepers Cursed by the Sages</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/14_-_Vaikuntha_Gatekeepers_Cursed_by_the_Sages.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
   
        <h1 className="text-lg ">15. Daksha Curses Lord Shiva</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/15_-_Daksha_Curses_Lord_Shiva.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
   
        <h1 className="text-lg ">16. Talks Between Lord Shiva Sati</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/16_-_Talks_Between_Lord_Shiva_Sati.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
  
        <h1 className="text-lg ">17. Sati Quits her Body</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/17_-_Sati_Quits_her_Body.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
      
        <h1 className="text-lg ">18. Frustration of the Sacrifice of Daksa</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/18_-_Frustration_of_the_Sacrifice_of_Daksa.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
     
        <h1 className="text-lg ">19. Brahma Satisfies Lord Siva</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/19_-_Brahma_Satisfies_Lord_Siva.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
      
        <h1 className="text-lg ">20. The Story of King Vena Part-01</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/20_-_The_Story_of_King_Vena_Part-01.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
      
        <h1 className="text-lg ">21. Story of King Vena Part-02</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/21_-_Story_of_King_Vena_Part-02.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
      
        <h1 className="text-lg ">22. Story of King Prthu 01</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/22_-_Story_of_King_Prthu-01.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
      
        <h1 className="text-lg ">23. Story of King Prthu 02</h1>
        <button
          onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/23_-_Story_of_King_Prthu-02.pdf')}
          className="mt-2 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-700 self-start"
        >
          Open PDF
        </button>
      </div>

      
      
      )}

      {/* Button for 2. Stories of Srimad Bhagavatam */}
      <button
        onClick={() => toggleVisibility(2)}
        className="self-start mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:from-blue-800 hover:to-teal-700 transition duration-300"
      >
        2. Stories of Srimad Bhagavatam Part-2
      </button>

      {/* Conditionally render the stories for 2. Stories of Srimad Bhagavatam */}
      {visibleSection === 2 && (
       <div className="mt-6 w-full max-w-3xl grid grid-cols-[2fr_1fr] gap-x-8 gap-y-6 bg-white p-6 rounded-lg shadow-lg border border-indigo-200">
          <h1 className="text-lg">24. The Act of Prachetas</h1>
          <button
            onClick={() =>
              openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/24_-_The_Act_of_Prachetas.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          {/* Story 2 */}
          <h1 className="text-lg ">25. The Activities of Maharaja Priyavrata</h1>
          <button
            onClick={() =>
              openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/25_-_The_Activities_of_Maharaja_Priyavrata.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">26. Lords Exalted Devotee-Bharat Maharaj</h1>
          <button
            onClick={() =>
              openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/26_-_Lords_Exalted_Devotee-Bharat_Maharaj.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          {/* Story 3 */}
          <h1 className="text-lg ">27. Maharaj Bharat finds an Attachment</h1>
          <button
            onClick={() =>
              openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/27_-_Maharaj_Bharat_finds_an_Attachment.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">28. Deer Made Bharat Maharaj-A Deer</h1>
          <button
            onClick={() =>
              openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/28_-_Deer_Made_Bharat_Maharaj-A_Deer_10.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">29. The Supreme Character of Jada Bharata</h1>
          <button
            onClick={() =>
              openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/29_-_The_Supreme_Character_of_Jada_Bharata.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">30. Jada Bharata and Maharaj Rahugana</h1>
          <button
            onClick={() =>
              openUrl(
                'https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/30_-_Jada_Bharata_and_Maharaj_Rahugana.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">31. History of Life of Ajamila</h1>
          <button
            onClick={() =>
              openUrl(
                'https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/31_-_History_of_Life_of_Ajamila.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">32. Yamadutas Vs Vishnudutas</h1>
          <button
            onClick={() =>
              openUrl(
                'https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/32_-_Yamadutas_Vs_Vishnudutas.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">33. Ajamila Delivered by the Visnudutas</h1>
          <button
            onClick={() =>
              openUrl(
                'https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/33_-_Ajamila_Delivered_by_the_Visnudutas.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>


          <h1 className="text-lg ">34. Repentance of Ajamila</h1>
          <button
            onClick={() =>
              openUrl(
                'https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/34_-_Repentance_of_Ajamila.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">35. Narada Muni cursed by Prajapati Daksha</h1>
          <button
            onClick={() =>
              openUrl(
                'https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/35_-_Narada_Muni_cursed_by_Prajapati_Daksha.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">36. Indra offends his Spiritual Master Brhaspati</h1>
          <button
            onClick={() =>
              openUrl(
                'https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/36_-_Indra_offends_his_Spiritual_Master_Brhaspati.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">37. Appearance of the Demon Vrtrasura</h1>
          <button
            onClick={() =>
              openUrl(
                'https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/37_-_Appearance_of_the_Demon_Vrtrasura.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">38. Demigods Prepare for killing Vrtrasura</h1>
          <button
            onClick={() =>
              openUrl(
                'https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/38_-_Demigods_Prepare_for_killing_Vrtrasura.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">39. Mission Vritrasura Begins</h1>
          <button
            onClick={() =>
              openUrl(
                'https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/39_-_Mission_Vritrasura_Begins.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">40. Vritrasura-A_Demon_or_Devotee</h1>
          <button
            onClick={() =>
              openUrl(
                'https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/40_-_Vritrasura-A_Demon_or_Devotee.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">41. Vrtrasura’s Glorious Death</h1>
          <button
            onClick={() =>
              openUrl(
                'https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/41_-_Vrtrasura%E2%80%99s_Glorious_Death.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">42. King_Indra_Afflicted_by_Sinful_Reaction</h1>
          <button
            onClick={() =>
              openUrl(
                'https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/42_-_King_Indra_Afflicted_by_Sinful_Reaction.pdf'
              )
            }
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700"
          >
            Open PDF
          </button>

          <h1 className="text-lg ">43. Chitraketu Vritrasura Connection</h1>
          <button onClick={() =>openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/43_-_Chitraketu_Vritrasura_Connection.pdf')}
            className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-700">Open PDF
           </button>
        </div>
      )}
       {/* Button for 3. Stories of Srimad Bhagavatam */}
      <button
      onClick={() => toggleVisibility(3)}
      className="self-start mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:from-blue-800 hover:to-teal-700 transition duration-300"
      >
      3. Stories of Srimad Bhagavatam Part-3
    </button>

    {/* Conditionally render the stories for 3. Stories of Srimad Bhagavatam */}
    {visibleSection === 3 && (
      <div className="mt-6 w-full max-w-3xl grid grid-cols-[2fr_1fr] gap-x-8 gap-y-6 bg-white p-6 rounded-lg shadow-lg border border-indigo-200">
          <h1 className="text-lg">44. King Citraketu got a temporary Life</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/44_-_King_Citraketu_got_a_temporary_Life.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">            Open PDF </button> 
            <h1 className="text-lg ">45. Sages Instruction to the King</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/45_-_Sages_Instruction_to_the_King.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">            Open PDF </button> 
            <h1 className="text-lg ">46. King_Citraketu_meets_the_Supreme_Lord</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/46_-_King_Citraketu_meets_the_Supreme_Lord.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">            Open PDF </button> 
            <h1 className="text-lg ">47. Chitraketu_becomes_Vritrasura</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/47_-_Chitraketu_becomes_Vritrasura.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">            Open PDF </button> 
            <h1 className="text-lg ">48. Diti vows to kill Indra</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/48_-_Diti_vows_to_kill_Indra.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">            Open PDF </button> 
            <h1 className="text-lg ">49. Diti starts her Austerities</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/49_-_Diti_starts_her_Austerities.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">            Open PDF </button> 
            <h1 className="text-lg ">50. Babies cut into Pieces</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/50_-_Babies_cut_into_Pieces.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">            Open PDF </button> 
            <h1 className="text-lg ">51. The King of Demons</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/51_-_The_King_of_Demons.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">            Open PDF </button> 
            <h1 className="text-lg ">52. Penance by Hiranyakasipu</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/52_-_Penance_by_Hiranyakasipu.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">            Open PDF </button> 
            <h1 className="text-lg ">53. Hiranyakasipu asks for Immortality</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/53_-_Hiranyakasipu_asks_for_Immortality.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">            Open PDF </button> 
            <h1 className="text-lg ">54. Hiranyakasipu_Terrorizes_the_Universe</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/54_-_Hiranyakasipu_Terrorizes_the_Universe.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">            Open PDF </button> 
            <h1 className="text-lg ">55. A Lotus in the Pool of Dirt</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/55_-_A_Lotus_in_the_Pool_of_Dirt.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">            Open PDF </button> 
            <h1 className="text-lg ">56. The Saintly Son of Hiranyakasipu</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/56_-_The_Saintly_Son_of_Hiranyakasipu.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">            Open PDF </button>
            <h1 className="text-lg ">57. Perfect Question Perfect Answer</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/57_-_Perfect_Question_Perfect_Answer.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">Open PDF </button>
            <h1 className="text-lg ">58. Undeserved Torture to the Son</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/58_-_Undeserved_Torture_to_the_Son.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">Open PDF </button>
            <h1 className="text-lg ">60. Teachers_consoling_King</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/59_-_Teachers_consoling_King.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">Open PDF </button>
            <h1 className="text-lg ">61. Prahlad in the Womb</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/60_-_Prahlad_in_the_Womb.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">Open PDF </button>
            <h1 className="text-lg ">61. Prahlada Instructs his Schoolmates-01</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/61_-_Prahlada_Instructs_his_Schoolmates-01.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">Open PDF </button>
            <h1 className="text-lg ">62. Prahlada Instructs his Schoolmates-02</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/62_-_Prahlada_Instructs_his_Schoolmates-02.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">            Open PDF </button>
            <h1 className="text-lg ">63. Final Instructions to his Mates</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/63_-_Final_Instructions_to_his_Mates.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">Open PDF </button>
            <h1 className="text-lg ">64. Hiranyakasipu threatens Prahlada Maharaja</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/64_-_Hiranyakasipu_threatens_Prahlada_Maharaja.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">Open PDF </button>
            <h1 className="text-lg ">65. Appearance of a Personality from Pillar</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/65_-_Appearance_of_a_Personality_from_Pillar.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">Open PDF </button>
            <h1 className="text-lg ">66. The Furious Nrsimhadeva</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/66_-_The_Furious_Nrsimhadeva.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">Open PDF </button>
            <h1 className="text-lg ">67. A Divine Trikuta</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/67_-_A_Divine_Trikuta.pdf') } className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700">Open PDF </button>

            
        </div>
      )}

       {/* Button for 4. Stories of Srimad Bhagavatam */}
       <button
        onClick={() => toggleVisibility(4)}
        className="self-start mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:from-blue-800 hover:to-teal-700 transition duration-300"
      >
        4. Stories of Srimad Bhagavatam Part-4
      </button>

      {/* Conditionally render the stories for 4. Stories of Srimad Bhagavatam */}
      {visibleSection === 4 && (
        <div className="mt-6 w-full max-w-3xl grid grid-cols-[2fr_1fr] gap-x-8 gap-y-6 bg-white p-6 rounded-lg shadow-lg border border-indigo-200">

          <h1 className="text-lg ">68. In Crisis-An Elephant</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/68_-_In_Crisis-An_Elephant.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">69. Gajendra Surrenders and returns Home</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/69_-_Gajendra_Surrenders_and_returns_Home.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">70. The Truce between Demigods and Demons</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/70_-_The_Truce_between_Demigods_and_Demons.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">71. A Most Gracious One - Neelkantha</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/71_-_A_Most_Gracious_One_-_Neelkantha.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">72. The Churning of the Milk Ocean</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/72_-_The_Churning_of_the_Milk_Ocean.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">73. Churning and Appearance of Rama</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/73_-_Churning_and_Appearance_of_Rama.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">74. The Churning and Dhanvantri</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/74_-_The_Churning_and_Dhanvantri.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">75. The Result of Aditi's Austerities</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/75_-_The_Result_of_Aditi%27s_Austerities.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">76. The Dwarf Incarnation</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/76_-_The_Dwarf_Incarnation.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">77. Lord Begs Charity from a King</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/77_-_Lord_Begs_Charity_from_a_King.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">78. Bali Maharaja Surrenders the Universe</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/78_-_Bali_Maharaja_Surrenders_the_Universe.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">7.9ali Maharaja Arrested by the Lord</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/79_-_Bali_Maharaja_Arrested_by_the_Lord.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">80. A Generous King Surrenders his Life</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/80_-_A_Generous_King_Surrenders_his_Life.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">81. Back Home Back to Heaven</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/81_-_Back_Home_Back_to_Heaven.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">82. Lord Appears As Fish</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/82_-_Lord_Appears_As_Fish.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">83. King Sudyumna Becomes a Woman</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/83_-_King_Sudyumna_Becomes_a_Woman.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">84. The Downfall of Saubhari Muni</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/84_-_The_Downfall_of_Saubhari_Muni.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">85. King Pururava Enchanted by Urvasi</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/85_-_King_Pururava_Enchanted_by_Urvasi.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">86. King Yayati regains his Youth</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/86_-_King_Yayati_regains_his_Youth.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">87. King_Yayati_Achieves_Liberation</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/87_-_King_Yayati_Achieves_Liberation.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">88. King_Rantideva</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/88_-_King_Rantideva.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          <h1 className="text-lg ">89. The Saver of the Earth Appears</h1>
          <button onClick={() => openUrl('https://ebooks.iskcondesiretree.com/pdf/Srimad_Bhagavatam_Stories/The_Saver_of_the_Earth_Appears.pdf') } className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-700"> Open PDF </button>
          
          
        </div>
      )}
      {/* Divider Line Above Buy Books Section */}
      <hr className="w-3/4 my-10 border-t-2 border-gray-300" />
     {/* Enhanced Buy Books Section */}
     <div className="w-full max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Purchase Books</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/books/buybooks">
            <button className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
              Buy Sanskrit & Other books
            </button>
          </Link>
        </div>
        <p className="mt-4 text-gray-600">Explore</p>
      </div>
    </div>
  );
};

export default BooksPage;