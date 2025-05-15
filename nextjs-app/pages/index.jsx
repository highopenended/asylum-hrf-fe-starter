import pieChart from '/assets/pie-chart.png';
import lineGraph from '/assets/line-graph.png';
import barGraph from '/assets/bar-graph.png';
import paperStack from '/assets/paper-stack.jpg';
import { useRouter } from 'next/router';
import { useDownloadData } from '@/hooks/useDownloadData.js';
import { decodeBase64 } from '@/utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const router = useRouter();
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
    window.open('https://www.humanrightsfirst.org', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='bg-gray-100'>
      <div className='flex-c w-full h-full'>
        {/* Top Section */}
        <div className='flex-c primary-c'>
          <h1 className='text-6xl text-white text-center mb-8'>Asylum Office Grant Rate Tracker</h1>
          <p className='text-white text-center pb-8'>
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on
            Asylum Office decisions
          </p>
        </div>

        {/* Graphs Section */}
        <div className='flex justify-center h-fit py-16 px-16 gap-16'>
          <div className='w-1/3 flex-c-1 items-center'>
            <img src={barGraph} alt='bar-graph' className='h-full' />
            <p className='text-center text-lg pt-4'>Search Grant Rates By Office</p>
          </div>
          <div className='w-1/3 flex-c-1 items-center'>
            <img src={pieChart} alt='pie-chart' className='h-full' />
            <p className='text-center text-lg pt-4'>Search Grant Rates By Nationality</p>
          </div>
          <div className='w-1/3 flex-c-1 items-center'>
            <img src={lineGraph} alt='line-graph' className='h-full' />
            <p className='text-center text-lg pt-4'>Search Grant Rates Over Time</p>
          </div>
        </div>

        {/* Button Section */}
        <div className='flex justify-center items-center gap-4 p-16 mb-16'>
          <button onClick={() => router.push('/graphs')} className='bg-gray-400 text-white py-2 px-4 font-bold'>
            View the Data
          </button>
          <button onClick={downloadCSV} className='bg-gray-400 text-white py-2 px-4 font-bold'>
            Download the Data
          </button>
        </div>

        {/* Paper stack and description section */}
        <div className='flex justify-center items-center gap-16 mx-16 mb-16'>
          <div className='w-1/2 rounded-2xl overflow-hidden'>
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

        {/* Systemic Disparity Insights Section */}
        <div className='flex-c items-center w-full bg-gray-100 py-16'>
          <h2 className='text-4xl font-semibold mb-12'>Systemic Disparity Insights</h2>
          <div className='flex justify-between items-start gap-8 max-w-7xl mx-auto px-4'>
            {/* 36% Stat */}
            <div className='flex-1 text-center'>
              <div className='text-4xl font-bold mb-4'>36%</div>
              <p className='text-sm'>
                By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to
                28 percent in fiscal year 2020.
              </p>
            </div>

            {/* 5% Stat */}
            <div className='flex-1 text-center'>
              <div className='text-4xl font-bold mb-4'>5%</div>
              <p className='text-sm'>The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</p>
            </div>

            {/* 6x Lower Stat */}
            <div className='flex-1 text-center'>
              <div className='text-4xl font-bold mb-4'>6x Lower</div>
              <p className='text-sm'>
                Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.
              </p>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <div className='flex justify-center items-center mb-12'>
          <button onClick={handleReadMore} className='primary-c text-white py-2 px-4 font-bold'>
            Read More
          </button>
        </div>

        {/* Back to Top Button */}
        <div className='flex justify-center items-center mb-12'>
          <button onClick={scrollToTop} className=' hover:bg-gray-700 text-base rounded flex flex-col items-center'>
            <span>Back To Top ^</span>
          </button>
        </div>
        
      </div>
    </div>
  );
};
