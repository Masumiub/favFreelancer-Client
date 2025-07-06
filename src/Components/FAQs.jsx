import React from 'react';
import { Slide } from "react-awesome-reveal";


const FAQs = () => {
    return (
        <div className='mt-45'>
            <div className='flex flex-col md:flex-row gap-10 p-5'>
                <div className='w-full md:w-4/12'>
                    <h2 className='text-5xl'>Frequently <span className='text-green-500 font-bold'>Asked Questions</span></h2>
                </div>

                <div className='w-full md:w-8/12'>
                <Slide direction="up" cascade>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-3">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-semibold">What is FavFreelancer?</div>
                        <div className="collapse-content text-sm">FavFreelancer is a full-stack web application that connects freelancers with clients who post tasks or projects. Freelancers can bid in real-time, and clients can manage and assign their tasks easily.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-3">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">Who can use FavFreelancer?</div>
                        <div className="collapse-content text-sm">Both clients and freelancers can use FavFreelancer. Clients can post and manage tasks, while freelancers can browse and bid on available projects.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-3">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">Can I edit or delete a task after posting it?</div>
                        <div className="collapse-content text-sm">Yes. Logged-in users can edit or delete their posted tasks at any time through the task management dashboard.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-3">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How does the real-time bidding system work?</div>
                        <div className="collapse-content text-sm">Once a task is posted, freelancers can place bids in real-time. The system updates dynamically, allowing both clients and freelancers to see the latest bids instantly without refreshing the page.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-3">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">Is there a way to filter tasks based on category, budget, or deadline?</div>
                        <div className="collapse-content text-sm">Yes. FavFreelancer includes a smooth filtering system that lets users narrow down tasks by category, deadline, budget range, and more for a better browsing experience.
                        </div>
                    </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default FAQs;