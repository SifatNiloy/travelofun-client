import React from 'react';
import bird from '../../../images/blog/bird.jpg'
import sydney from '../../../images/blog/sydney.jpg'
const Blog = () => {
    return (
        <div className='mx-auto w-75 mt-5'>
            <h2 className='text-center text-warning'>HOP ABOUT OCENIA</h2>
            <p>Covering Australia, New Zealand and a vast number of islands, Oceania is a region of the world focused on the Pacific Ocean. With so much ocean to cover to get around, it's one of the harder parts of the world for tourists to thoroughly explore.

                Australia is the largest country in Oceania, with cities, deserts and rainforest to explore. Next there's it's neighbor New Zealand, famous for Lord of the Rings. After that though, there are all sorts of magical tropical island destinations like Fiji and Palau waiting for you.

                <h2 className='text-center py-4 text-success'>DISCOVER YOUR AUSTRALIA</h2>
                <p>Looking for places to visit in Australia and how to make it the dream trip of a lifetime?

                    Australia IS everything you've dreamed of and more. It's a land of colors and contrasts: from the red, dusty outback to the lush, tropical rainforests, with moutains, vineyards, and the most beautiful beaches in the world in between.</p>
                <div className='text-center'>
                    <img className='w-75 my-2' src={bird} alt="" /><br />
                    <img className='w-75 my-2' src={sydney} alt="" />
                </div>
                <h2>Travel Industry Trends and Stats</h2>
                <p>
                    <ul>
                        <li>Convenient booking remains the biggest trend in the global travel industry.ul</li>
                        <li>Solo Travel: Leisure travel is no longer just a family affair.
                            The travel and tourism industry generated 10.4 percent of all global economic activity last year.</li>
                        <li> The travel industry is the second-fastest-growing sector in the world, ahead of healthcare (+3.1%), information technology (+1.7%) and financial services (+1.7%), and behind only manufacturing.</li>
                        <li> Last year, travel and tourism increased its share of leisure spending to 78.5 percent.</li>
                        <li>Three in five travel companies say they offer customer service via chat.</li>
                    </ul>

                    
                </p>
            </p>
        </div>
    );
};

export default Blog;