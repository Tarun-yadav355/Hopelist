import React from 'react';
import './Donate.css';
import RecipeReviewCard from './RecipeReviewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown  } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';


const ngos = [
  {
    title: 'American Heart Association',
    subheader: 'Updated: July 2025',
    image: 'lg1.png',
    description: 'To be a relentless force for a world of longer, healthier lives.',
    method: <ui><li>
      CPR Training Manikins – For community CPR and first aid training sessions.</li>
      <li>Automated External Defibrillators (AEDs) – For schools, community centers, and public spaces.</li>
      <li>Blood Pressure Monitors – For heart health screenings and educational programs.</li>
      <li>Heart-Healthy Cookbooks – To promote nutrition and heart-healthy lifestyles.</li>
      <li>Fitness Trackers (e.g., pedometers) – For community wellness challenges or giveaways.</li>
      <li>Educational Brochures & Posters – Covering topics like heart disease, stroke prevention, and healthy habits.</li>
      <li>Reusable Water Bottles – For walkathons, awareness events, and volunteer kits.</li>
      <li>T-Shirts with Heart Health Messaging – For fundraising or public awareness campaigns.</li>
      <li>Yoga Mats or Resistance Bands – For heart-healthy fitness events and programs.</li>
      <li>Gift Cards (e.g., Amazon, grocery stores) – Used for fundraising auctions or supporting heart patients in need.</li></ui>,
  },
  {
    title: 'National Geographic Society',
    subheader: 'Updated: July 2025',
    image: 'lg2.png',
    description: 'Furthering exploration and understanding of our world for the benefit of all.',
    method: <ui><li>
      High-Quality Cameras or Lenses – For exploration, wildlife photography, and storytelling.</li>
      <li>Field Equipment – GPS devices, binoculars, compasses, or drone kits for researchers and explorers.</li>
      <li>Scientific Notebooks & Journals – For researchers in the field documenting wildlife and cultures.</li>
      <li>Educational Kits – Geography, science, and conservation learning tools for classrooms or outreach.</li>
      <li>Laptops or Tablets – For field researchers, educators, or student projects.</li>
      <li>Outdoor Gear – Durable tents, sleeping bags, and backpacks for expedition teams.</li>
      <li>Books on Wildlife, Environment, and Cultures – For donations to libraries and educational programs.</li>
      <li>Documentary Filmmaking Supplies – Microphones, tripods, SD cards, lighting gear, etc.</li>
      <li>Virtual Reality (VR) Headsets – For immersive educational experiences in museums or schools.</li>
      <li>Monetary Donations or Grants – To fund global research, storytelling, and conservation missions.</li></ui>,
  },
  {
    title: 'Cystic Fibrosis Foundation',
    subheader: 'Updated: July 2025',
    image: 'lg3.jpg',
    description: 'Adding tomorrows for people with cystic fibrosis.',
    method: <ui><li>
      Air Purifiers – To help maintain clean indoor air for people with respiratory challenges.</li>
      <li>Hand Sanitizers & Disinfectant Wipes – For infection control in homes and care centers.</li>
      <li>High-Calorie Nutritional Supplements – Supports the dietary needs of individuals with CF.</li>
      <li>Nebulizers & Respiratory Therapy Supplies – Essential for daily airway clearance therapy.</li>
      <li>Humidifiers – Helps in easing breathing, especially in dry climates.</li>
      <li>Face Masks (N95 or similar) – To protect against infections during treatment or travel.</li>
      <li>Educational Books or Kids’ Materials – For children with CF to better understand and manage their condition.</li>
      <li>Gift Cards (e.g., pharmacies, grocery stores) – For families managing ongoing care expenses.</li>
      <li>Exercise Equipment (e.g., stationary bikes, yoga mats) – Encourages lung-strengthening physical activity.</li>
      <li>Portable Coolers or Travel Kits – For carrying medications that require refrigeration when traveling.</li></ui>,
  },
  {
    title: 'Kiva (organization)',
    subheader: 'Updated: July 2025',
    image: 'lg4.png',
    description: 'Loans that change lives.Empowering people to create opportunity for themselves and others.',
    method: <ui><li>
      Solar-Powered Chargers or Lights – Especially useful in rural areas with limited electricity.</li>
      <li>Sewing Machines – For women-led tailoring and garment businesses.</li>
      <li>Agricultural Tools – Basic tools like hoes, watering cans, or irrigation kits for small-scale farmers.</li>
      <li>Reusable Menstrual Kits or Hygiene Supplies – To support women’s health initiatives.</li>
      <li>Handmade Product Supplies – Fabrics, beads, or raw materials for artisans and craft entrepreneurs.</li>
      <li>Portable Water Filters – For improving health and sanitation in rural business settings.</li>
      <li>Backpacks or Business Bags – For school entrepreneurs or traveling merchants to carry their goods or materials.</li></ui>,
  },
  {
    title: 'Compassion International',
    subheader: 'Updated: July 2025',
    image: 'lg5.jpg',
    description: 'Releasing children from poverty in Jesus’ name.Bringing hope, love, and opportunity to children in need',
    method: <ui><li>School Supplies – Notebooks, pencils, backpacks, crayons, and learning kits for children’s education.</li>
    <li>Children’s Clothing – New or gently used clothes suitable for various ages and seasons.</li>
    <li>Nutritional Supplements – Vitamins or healthy food packs (when accepted locally).</li>
    <li>Blankets and Bedding – Especially in colder regions or for children in transitional homes.</li>
    <li>Shoes or Sandals – Durable footwear for school and everyday use.</li>
    <li>Art and Craft Supplies – For child development centers: paper, markers, scissors, glue, etc.</li>
    <li>Gift Cards or Monetary Donations – To support a child’s specific needs or educational goals.</li></ui>,
  },
  {
    title: 'Open Society Foundations',
    subheader: 'Updated: July 2025',
    image: 'lg6.gif',
    description: 'Working to build vibrant and inclusive democracies whose governments are accountable to their citizens.',
    method: <ui><li>
      Books on Human Rights & Civil Liberties – Educational material for schools and training programs.</li>
      <li>Recording Equipment (e.g., cameras, audio) – For documenting injustices or creating awareness content.</li>
      <li>Training Materials – Manuals and toolkits for civic education, journalism, and anti-corruption workshops.</li>
      <li>Protective Gear for Protesters or Field Workers – Helmets, first-aid kits, or face masks for safety.</li>
      <li>Monetary Donations or Grant Funding – To support democracy-building, minority rights, and transparency programs.

</li></ui>,
  },
];

function Donate() {
  return (
    <>
      <div className='don1'>
        <h1>Different Paths, Shared Purpose</h1>
        <p>Thank you for considering a donation!</p>
        <h1>Browse NGOs by Category:</h1>
      </div>
<div className='ddd1'>
      <div className='don2'>
        <p>
          Below is a list of NGOs and the items they need. Click on the <FontAwesomeIcon icon={faAngleDown} size="xl" style={{ color: '#a8abb1ff'}} /> button to view the list.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} className='ngg'>
          {ngos.map((ngo, index) => (
            <RecipeReviewCard
              key={index}
              title={ngo.title}
              subheader={ngo.subheader}
              image={ngo.image}
              description={ngo.description}
              method={ngo.method}
            />
          ))}
        </div>
        <div className='nxt'>
          <Button className='nxb' variant="contained">NEXT PAGE </Button>
        </div>
        
        
      </div>
      <div className='ft'>
         <img className='ft1' src="footer_b.png" alt="Logo" />
        </div>
      </div>
      
    </>
  );
}

export default Donate;
