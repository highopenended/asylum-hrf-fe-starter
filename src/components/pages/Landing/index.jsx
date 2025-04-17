import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import { decodeBase64 } from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
  };

  return (
    <div>
      <div className='flex flex-col gap-16 w-full h-auto'>

        {/* Top Section */}
        <div className='primary-c'>
          <h1 className='text-6xl text-white text-center mb-8'>Asylum Office Grant Rate Tracker</h1>
          <p className='text-white text-center m-8'>
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on
            Asylum Office decisions
          </p>
        </div>

        {/* Graphs Section */}
        <div className='flex justify-center gap-24 w-full px-16'>
          <div className='w-1/4'>
            <img src={barGraph} alt='bar-graph' className='w-full h-full' />
            <p className='text-center text-lg pt-4'>Search Grant Rates By Office</p>
          </div>
          <div className='w-1/4'>
            <img src={pieChart} alt='pie-chart' className='w-full h-full' />
            <p className='text-center text-lg pt-4'>Search Grant Rates By Nationality</p>
          </div>
          <div className='w-1/4'>
            <img src={lineGraph} alt='line-graph' className='w-full h-full' />
            <p className='text-center text-lg pt-4'>Search Grant Rates Over Time</p>
          </div>
        </div>

        {/* Paper stack and description section */}
        <div className='flex justify-center items-center gap-32 p-16 m-16'>
          <div className='w-1/3'>
            <img src={paperStack} alt='paper-stack' className='w-full h-auto' />
          </div>
          <div className='w-1/2'>
            <p className='leading-relaxed'>
              Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May
              2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant
              rates by year, nationality, and asylum office. Visualize the data with charts and graphs, and download the data set.
            </p>
          </div>
        </div>

        {/* <div>{'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</div> */}
      </div>
    </div>
  );
};
